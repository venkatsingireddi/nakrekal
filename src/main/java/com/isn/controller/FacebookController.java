package com.isn.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.social.facebook.api.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.isn.model.FBHistory;
import com.isn.model.Feedback;
import com.isn.service.FacebookService;


@Controller



@RequestMapping(value = "/facebook")
public class FacebookController {
	Logger log=Logger.getLogger(FacebookController.class);
	
	@Value(value = "${APP_SECRET}")	
	private String APP_SECRET = null;//b085a85527c14610fe15ca2cf0c21a1c
	@Value(value = "${APP_ID}")
	private String APP_ID = null;//285312434946834
	 Logger logger=Logger.getLogger(FacebookController.class);
	        //facebook.clientId=639716389447302
			//facebook.clientSecret=b2ae145fac0ae0ee7b86bbf9db8e7992
	
	@Autowired
	FacebookService facebookService;

	  
	  
	@RequestMapping(value = "/signin")
	public void loginWithFacebook(HttpServletResponse response,
			HttpServletRequest request) {
//http://www.facebook.com/dialog/oauth?
		System.out.println(request.getServerName());
		System.out.println(request.getScheme());
		
		System.out.println(request.getServerPort());//https://graph.facebook.com/oauth/authorize
		if (!"localhost".equals(request.getServerName())) {
			APP_SECRET = System.getenv("APP_SECRET");
			APP_ID = System.getenv("APP_ID");
		} else {
			log.warn("Scret : "+APP_SECRET);
			log.warn("App Id :"+APP_ID);
		}
		
		
		String faceBookLoginUrl = "http://www.facebook.com/dialog/oauth?client_id="
				+ APP_ID
				+ "&display=page&redirect_uri="
				+ request.getScheme()
				+ "://"
				+ request.getServerName()
				+ ":"
				+ request.getServerPort()+request.getContextPath() + "/online/facebook/handleAuth&scope=email,publish_actions,public_profile,user_birthday,user_photos";

		try {
			response.sendRedirect(faceBookLoginUrl);
		} catch (IOException e) {
			
			e.printStackTrace();
		}
	}

	@RequestMapping(value = "/handleAuth")
	public String handleAuthResponse(HttpServletResponse response,
			HttpServletRequest request,
			@RequestParam(value="code",required=false) String code,Model model) throws MalformedURLException {
		
		 URL url = new URL(getAuthURL(code,request,APP_ID,APP_SECRET));
		 
         try {
             String result = readURL(url);
             String accessToken = null;
             Integer expires = null;
             String[] pairs = result.split("&");
             for (String pair : pairs) {
                 String[] kv = pair.split("=");
                 if (kv.length != 2) {
                     throw new RuntimeException("Unexpected auth response");
                 } else {
                     if (kv[0].equals("access_token")) {
                         accessToken = kv[1];
                     }
                     if (kv[0].equals("expires")) {
                         expires = Integer.valueOf(kv[1]);
                     }
                 }
             }
             //model.addAttribute("accessToken", accessToken);
             //redirectAttributes.addFlashAttribute("accToken", accessToken);
             request.getSession().setAttribute("accToken", accessToken);
             if ( StringUtils.isEmpty(accessToken) || expires==null ){
            	
            	 return "redirect:/";
             }             
             logger.info("Access Token is :"+ accessToken+" Expires ----- " + expires);
             return "redirect:/online/facebook/profile";
             
            
         } catch (IOException e) {
        	 return "redirect:/";
             //throw new RuntimeException(e);
         }
		
         
      
	}

	@RequestMapping(value="/profile")
	public String getProfile(HttpServletRequest request,Map<String, Object> map)
	{	//@ModelAttribute("accessToken") final String accessToken
		//@PathVariable String token,
		HttpSession session =request.getSession(false);
		String accessToken=(String) session.getAttribute("accToken");
		//logger.info("Got access token :" +accessToken);
		logger.info("Redirected value is :"+accessToken);
		User user=facebookService.getFriendList(accessToken);
		FBHistory fBHistory =mapUserTOFBHistory(user);
		facebookService.saveFBHistory(fBHistory);
		List<FBHistory> fbList = facebookService.getHistory(user.getId());
        map.put("user",user);
        map.put("fbList", fbList);
	    return "facebook/profile"; 
	}
	
	
	private FBHistory mapUserTOFBHistory(User user) {
		// TODO Auto-generated method stub
		FBHistory fbHistory = new FBHistory();
		fbHistory.setId(user.getId());
		fbHistory.setFirstName(user.getFirstName());
		fbHistory.setLastName(user.getLastName());
		fbHistory.setLoggedInDate(new java.util.Date());
		fbHistory.setUpdatedDate(user.getUpdatedTime());
		fbHistory.setGender(user.getGender());
		fbHistory.setAboutyou(user.getAbout());
				
		return fbHistory;
	}

	public static String getAuthURL(String authCode,HttpServletRequest request,String APP_ID ,String APP_SECRET) {
        return "https://graph.facebook.com/oauth/access_token?client_id=" + 
            APP_ID+"&redirect_uri="
            + request.getScheme()
			+ "://"
			+ request.getServerName()
			+ ":"
			+ request.getServerPort() +request.getContextPath()+ "/online/facebook/handleAuth"+"&client_secret="+APP_SECRET+"&code="+authCode;
    }
	
	
	
	
	private String readURL(URL url) throws IOException {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        InputStream is = url.openStream();
        int r;
        while ((r = is.read()) != -1) {
            baos.write(r);
        }
        return new String(baos.toByteArray());
    }
	@RequestMapping(value="/feedback",method = RequestMethod.POST)
	public String getFeedback(HttpServletRequest request,Map<String, Object> map,
			@RequestParam(value="fbId",required=false) String fbId,
			@RequestParam(value="name",required=false) String name,
			@RequestParam(value="email",required=false) String email,
			@RequestParam(value="message",required=false) String message,
			@RequestParam(value="feedBackType",required=false) String feedBackType,
			@RequestParam(value="status",required=false) String status
			)
	{
		if ( StringUtils.isEmpty(fbId)){
        	
			return "redirect:/";
       	 
        }
		Feedback feedback=getFeedBackObj(fbId,name,email,message,feedBackType,status);
		facebookService.saveFeedback(feedback);
		logger.warn("Feedback saved for user : "+name);
		return "redirect:/online/facebook/profile";
	}

	private Feedback getFeedBackObj(String fbId, String name, String email,
			String message, String feedBackType, String status) {
		
		Feedback feedback = new Feedback();
		feedback.setFbId(fbId);
		feedback.setName(name);
		feedback.setEmail(email);
		feedback.setMessage(message);
		feedback.setFeedBackType(feedBackType);
		feedback.setStatus(status);
		// TODO Auto-generated method stub
		return feedback;
	}
	
	@RequestMapping(value="/feedbacks")
	public String getFeedbacks(HttpServletRequest request,Map<String, Object> map){
		List<Feedback> feedbackList=facebookService.getAllFeedbacks();
		map.put("feedbackList",feedbackList);
		logger.warn("Number of feedbacks : "+feedbackList.size());
		return "facebook/feedback";
		
	}
	
}

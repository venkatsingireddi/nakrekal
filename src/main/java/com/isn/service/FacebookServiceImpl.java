package com.isn.service;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.facebook.api.User;
import org.springframework.social.facebook.api.impl.FacebookTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import com.isn.model.FBHistory;
import com.isn.model.Feedback;


@Service
public class FacebookServiceImpl implements FacebookService {
	Logger log=Logger.getLogger(FacebookServiceImpl.class);
	
	@PersistenceContext
	EntityManager em;
	
	@Autowired
	private RestTemplate restTemplate;
	
	public User getFriendList(String accessToken,String appId) {
		 List<HttpMessageConverter<?>> messageConverters=new ArrayList<HttpMessageConverter<?>>();
		 StringHttpMessageConverter shc= new StringHttpMessageConverter();//new StringHttpMessageConverter(Charset.forName("UTF-8"))
		 
		 
		 messageConverters.add(shc);
		restTemplate.setMessageConverters(messageConverters);
		Facebook facebook = new FacebookTemplate(accessToken,null,appId);
		
		boolean valid =facebook.isAuthorized();
		
		
		log.info("Is accessed user ?  "+valid);
		
		User profile = facebook.userOperations().getUserProfile();
		log.info("User ID  "+profile.getId()+" Email:  "+profile.getEmail());
		log.info("Link  "+profile.getLink());
		log.info("User Name  "+profile.getName());
		return profile;

	}

	public void postPhotoAndTaggAllFriends(String accessToken) {

		Facebook facebook = new FacebookTemplate(accessToken);
		List<User> friends = facebook.friendOperations()
				.getFriendProfiles();
		try {

			Resource photo = new FileSystemResource(
					"D:\\personl drive\\1003833_523350081065609_1979981052_n.jpg");
			String photoId = facebook.mediaOperations().postPhoto(photo);

			for (User profile : friends) {

				restTemplate.postForLocation("https://graph.facebook.com/"
						+ photoId + "/tags?to=" + profile.getId()
						+ "&x=20&y=20" + "&access_token=" + accessToken, null);

			}

		} catch (Exception e) {
			e.printStackTrace();
		}

	}
	
	@Transactional
	public void saveFBHistory(FBHistory fBHistory) {
		// TODO Auto-generated method stub
		em.persist(fBHistory);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List<FBHistory> getHistory(String id) {
		// TODO Auto-generated method stub
		Query c = em.createQuery("Select f from FBHistory f where f.id = :id", FBHistory.class);
        c.setParameter("id", id);
        List<FBHistory> fbList= c.getResultList();
        return fbList;
	}

	@Override
	@Transactional
	public void saveFeedback(Feedback feedback) {
		// TODO Auto-generated method stub
		em.persist(feedback);
		
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List<Feedback> getFeedback(String id) {
		// TODO Auto-generated method stub
		Query c = em.createQuery("Select f from Feedback f where f.fbId = :id", Feedback.class);
        c.setParameter("id", id);
        List<Feedback> fbList= c.getResultList();
        return fbList;
	
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List<Feedback> getAllFeedbacks() {
		// TODO Auto-generated method stub
		//CriteriaQuery<Feedback> c = em.getCriteriaBuilder().createQuery(Feedback.class);
		Query query = em.createQuery("SELECT f FROM Feedback f");
		List<Feedback> feedbackList=query.getResultList();
        return feedbackList;
		
	}

}

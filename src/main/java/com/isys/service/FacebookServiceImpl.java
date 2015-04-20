package com.isys.service;

import java.nio.charset.Charset;
import java.nio.charset.CharsetEncoder;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.facebook.api.PagedList;
import org.springframework.social.facebook.api.User;
import org.springframework.social.facebook.api.impl.FacebookTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class FacebookServiceImpl implements FacebookService {

	
	@Autowired
	private RestTemplate restTemplate;

	public void getFriendList(String accessToken) {
		 List<HttpMessageConverter<?>> messageConverters=new ArrayList<HttpMessageConverter<?>>();
		 StringHttpMessageConverter shc= new StringHttpMessageConverter();//new StringHttpMessageConverter(Charset.forName("UTF-8"))
		 
		 
		 messageConverters.add(shc);
		restTemplate.setMessageConverters(messageConverters);
		Facebook facebook = new FacebookTemplate(accessToken);
		
		boolean valid =facebook.isAuthorized();
		System.out.println("Is accessed user ?  "+valid);
		User profile = facebook.userOperations().getUserProfile();
         //System.out.println("Number of friends are : "+friends.size());
		
 
			System.out.println("ID :"+profile.getId()+" Name :"+profile.getFirstName()+","+profile.getLastName()+"  B'day :"+profile.getAbout()+" Time zone :"+profile.getTimezone()+"  Email :"+profile.getEmail());
			
			try {
				PagedList<User> pl =facebook.friendOperations().getFriendProfiles();
				if(pl!=null){
				System.out.println("Number of friends are : "+pl.size());
				for (User user : pl) {
					System.out.println(profile.getId()+" Name :"+user.getFirstName()+","+user.getLastName()+" Install type :"+user.getInstallType()+" B'day :"+user.getBirthday()+" Time zone :"+user.getTimezone()+"Home town"+user.getHometown().getName());
				}
				}
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
			
			
			
			
		/*
		
		Facebook facebook1 = socialContext.getFacebook();
		FeedOperations feedOps = facebook1.feedOperations();
		 
		List<Post> posts = feedOps.getHomeFeed();*/

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

}

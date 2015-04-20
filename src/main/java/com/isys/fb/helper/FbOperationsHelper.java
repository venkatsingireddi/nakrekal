package com.isys.fb.helper;

import java.util.ArrayList;
import java.util.List;

import org.springframework.social.facebook.api.Facebook;

import com.isys.dio.FriendsList;

public class FbOperationsHelper {
	
	public FriendsList getFriendNames(Facebook facebook){
		
		List<String> friendsList = new ArrayList<String>();
		  //List<User> friendsProfileLIst = facebook.friendOperations().getFriendProfiles();
		  
		 /* for(FacebookProfile fbProfile :friendsProfileLIst){
			  friendsList.add(fbProfile.getFirstName());
		  }*/
		  
		  FriendsList friendsListDto = new FriendsList();
		  friendsListDto.setFriendsList(friendsList);
		  
		  return friendsListDto;  
	}

}
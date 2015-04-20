package com.isys.service;




public interface FacebookService {
	
	void getFriendList(String accessToken);
	void postPhotoAndTaggAllFriends(String accessToken);
	
}

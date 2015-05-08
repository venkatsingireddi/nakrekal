package com.isn.service;

import java.util.List;

import org.springframework.social.facebook.api.User;

import com.isn.model.FBHistory;
import com.isn.model.Feedback;

public interface FacebookService {
	
	User getFriendList(String accessToken);
	void postPhotoAndTaggAllFriends(String accessToken);
	void saveFBHistory(FBHistory fBHistory);
	public List<FBHistory> getHistory(String id);
	void saveFeedback(Feedback feedback);
	public List<Feedback> getFeedback(String id);
	public List<Feedback> getAllFeedbacks();
	
}

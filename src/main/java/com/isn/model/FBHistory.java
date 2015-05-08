package com.isn.model;

import java.io.Serializable;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="fbhistory")
public class FBHistory implements Serializable{
	 /**
	  * 
	 */
	private static final long serialVersionUID = 1L;

	 @Id
	 @GeneratedValue
	 private Integer gid;
	 
	 private String id;
	 private String firstName;
	 private String lastName;
	 private String gender;
	 private String aboutyou;
	 private String country;
	 private String state;
	 private String updatedDate;
	 private String loggedInDate;
	 

	public String getId() {
		return id;
	}
	public Integer getGid() {
		return gid;
	}
	public void setGid(Integer gid) {
		this.gid = gid;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getAboutyou() {
		return aboutyou;
	}
	public void setAboutyou(String aboutyou) {
		this.aboutyou = aboutyou;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getUpdatedDate() {
		return updatedDate;
	}
	public void setUpdatedDate(Date updatedDate) {
		
		DateFormat df = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
		String reportDate = df.format(updatedDate);
		this.updatedDate = reportDate;
	}
	public String getLoggedInDate() {
		return loggedInDate;
	}
	public void setLoggedInDate(Date d) {
		// Create an instance of SimpleDateFormat used for formatting 
		// the string representation of date (month/day/year)
		DateFormat df = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");

		// Get the date today using Calendar object.
		//Date today = new Date();       
		// Using DateFormat format method we can create a string 
		// representation of a date with the defined format.
		String reportDate = df.format(d);
		  	
		this.loggedInDate = reportDate;
	}
		
		
		

}

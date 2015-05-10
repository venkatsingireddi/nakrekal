<!doctype html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>	
<head >
   	
    <title>profile</title>
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    
	<link href="//netdna.bootstrapcdn.com/bootstrap/2.3.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="http://heroku.github.com/template-app-bootstrap/heroku.css" rel="stylesheet">
    <script src="/js/jquery-1.10.1.min.js"></script>
    <script src="/js/jquery.validate.min.js"></script>
    <script src="/js/jquery-ui.js"></script>    
    <script type="text/javascript">
     $(document).ready(function() {
    	 $('#feedback-form').validate({
    		 
            	focusCleanup: true,
            	focusInvalid: false,
    	        rules: {
    	        	message:{
    					required: true,
    					minlength: 100,
    					maxlength: 250,
    				},
    	        	feedBackType:"required",
    				
    			},messages: {
    				message: {
    					required: "Please Share your feedback.",
    					minlength: jQuery.format("Feedback should be minimum {0} charactors."),
    					maxlength: jQuery.format("Feedback should be maximum {0} charactors."),
    				},
    				feedBackType: "What is your feedback type ?",
    				
    			},
    			ignore:[],		
    		  }); 
    	
     });
 </script>
 <style type="text/css">
    .control-label{
        color:#64644A;
        font-size:110%;
        font-family:Arial,Helvetica,sans-serif;
        float: left;
        width: 200px;
        text-align: left;
    }
    .classLegend{
    color: #636361;
    font-size:130%;
    font-family:Arial,Helvetica,sans-serif;
    }
    .error {
    color: #FB3A3A;
    display: inline-block;
    margin-left: 7px;
    padding: 0;
    text-align: left;
    
}
   
</style>
        
</head>

<body>

<div class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
            <a href="/" class="brand">Home</a>
            <a href="" class="brand " id="heroku">Hello&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<strong>${user.lastName},&nbsp; &nbsp; &nbsp;${user.firstName}</strong></a>
        </div>
    </div>
</div><br><br>
<br><br>
<div class="container">
<div class="span9 offset2">
	<div class="page-header"><h3>Your's Facebook Profile Information</h3></div>
		<table class="table">
	     	<tr class="active">
	         <td> <b>Your profile picture</b></td>
	          <td>
	          <c:url var="imgurl" value="http://graph.facebook.com/${user.id}/picture" />
	          <img src="${imgurl}" alt="anotherimage" class="img-thumbnail" width="120" height="120"/>
	        
	         </td>
	     </tr>
	     <tr class="active">
	        <td> <b>First Name</b></td>
	        <td>${user.firstName}</td>
	     </tr>
	      <tr class="active">
	        <td> <b>Last Name</b></td>
	        <td>${user.lastName}</td>
	     </tr>
	      <tr class="active">
	        <td> <b>Birth Day</b></td>
	        <td>${user.birthday}</td>
	     </tr>
		<tr class="active">
	        <td> <b>Gender</b></td>
	        <td>${user.gender}</td>
	     </tr>
	     <tr class="active">
	        <td> <b>Email</b></td>
	        <td>${user.email}</td>
	     </tr>
	     <tr class="active">
	        <td> <b>You have updated your Facebook status on :</b></td>
	        <td>${user.updatedTime}</td>
	     </tr>
	     <tr class="active">
	        <td> <b>We are on Date of  :</b></td>
	        <td><c:out value="<%=new java.util.Date()%>"/></td>
	     </tr>
	     <tr class="active">
	        <td> <b>Your installation type :</b></td>
	        <td>${user.installType}</td>
	     </tr>
	     <tr class="active">
	        <td> <b>About you :</b></td>
	        <td>${user.about}</td>
	     </tr>
	     
	     <tr class="active">
	        <td> <b>Your Biography :</b></td>
	        <td>${user.bio}</td>
	     </tr>
	     
	      <tr class="active">
	        <td> <b>Your political ideology :</b></td>
	        <td>${user.political}</td>
	     </tr>
	     
	       <tr class="active">
	        <td> <b>Your quotes :</b></td>
	        <td>${user.quotes}</td>
	     </tr>
	     
	</table>
  </div>
</div>


<div class="container">
<div class="span9 offset2">
<div class="hero-unit">
  <h3 class="alert alert-success">Your feedback is highly appreciated :</h3>
  <br/>
  <form id="feedback-form" role="form" action="feedback" method="post" class="form-horizontal">
     <div class="form-group" style="margin-bottom: 10px">
      <label class="control-label col-sm-2" for="name">Your Name:</label>
      <div class="col-sm-4" style="margin-left: 2px">
        <input type="text" class="form-control" name="name" placeholder="Your Name" value="${user.lastName}" readonly="readonly"/>
      </div>
    </div>
    <div class="form-group" style="margin-bottom: 10px">
      <label class="control-label col-sm-2" for="email">Email:</label>
      <div class="col-sm-4" style="margin-left: 2px">
        <input type="email" class="form-control" name="email" placeholder="Enter email" value="${user.email}" readonly="readonly"/>
      </div>
    </div>
    <div class="form-group" style="margin-bottom: 10px">
      <label class="control-label col-sm-2" for="message">Comments:</label>
      <div class="col-sm-4" style="margin-left: 2px">          
        <textarea name="message" class="form-control" rows="3" placeholder="Your comments" maxlength="250"></textarea>
      </div>
    </div>
    <div class="form-group" style="margin-bottom: 10px">
        <label class="control-label col-sm-2">Feedback Type:</label>
        <div class="col-sm-4" style="margin-left: 2px">
			<select name="feedBackType" class="form-control">
			<option value="" selected>Choose One:</option>
			<option value="Appreciation">Appreciation</option>
			<option value="Suggestion">Suggestion</option>
			</select>
     </div>
    </div>
     <input type="hidden" name="status" value="Submitted"/>
     <input type="hidden" name="fbId" value="${user.id}"/>
    <div class="form-group">        
      <div class="col-sm-4">
        <button type="submit" class="btn btn-primary btn-large">Submit</button>
      </div>
    </div>
  </form>
</div>
</div>
</div>
<div class="container">
<div class="span9 offset2">
		<div class="page-header">
               <h3>Your's FB Log History</h3> 
        </div>
      		 <c:if  test="${!empty fbList}">
                
                <table class="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>About You</th>
                        <th>FB Last Updated on</th>
                        <th>FB Last Logged-in on</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    <c:forEach items="${fbList}" var="fb">
                        <tr class="danger">
                            <td>${fb.lastName}&nbsp; &nbsp; &nbsp;&nbsp;${fb.firstName}</td>
                            <td>${fb.aboutyou}</td>
                            <td>${fb.updatedDate}</td>
                            <td>${fb.loggedInDate}</td>
                        </tr>
                    </c:forEach>
                    </tbody>
                </table>
 	 </c:if>
 	</div>
</div>
</body>
</html>
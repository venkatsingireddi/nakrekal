<!doctype html>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<html>
<head>
    <meta charset="utf-8">
    <title>Registration</title>

    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="//netdna.bootstrapcdn.com/bootstrap/2.3.2/css/bootstrap.min.css" rel="stylesheet">

    <!--
      IMPORTANT:
      This is Heroku specific styling. Remove to customize.
    -->
    <link href="http://heroku.github.com/template-app-bootstrap/heroku.css" rel="stylesheet">
    <!-- /// -->
    <script src="/js/jquery-1.10.1.min.js"></script>
    <script src="/js/jquery.validate.min.js"></script>
    <script src="/js/jquery-ui.js"></script>
    <script type="text/javascript" src="/js/countries.js"></script>
     <script type="text/javascript">
     $(document).ready(function() {
    	 $('#village-form').validate({
    	        rules: {
    	        	firstName:"required",
    	        	lastName:"required",
    				
    	        	phone: {
    					required: true,
    					digits: true,
    					minlength: 10,
    					maxlength: 10,
    				},
    				aadhar: {
    					required: true,
    					digits: true,
    					minlength: 12,
    					maxlength: 12,
    				},
    				
    	           
    			},messages: {
    				firstName:"Please enter first name.",
    				lastName: "Please enter last name.",
    				
    				phone: {
    					required: "Please enter phone number",
    					minlength: jQuery.format("Phone number should be {0} digits."),
    					maxlength: jQuery.format("Phone number should be {0} digits."),
    				},
    				aadhar: {
    					required: "Please enter 12 digit aadhar number",
    					minlength: jQuery.format("Phone number should be {0} digits."),
    					maxlength: jQuery.format("Phone number should be {0} digits."),
    				},
    				
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
    .error{    
    color:#FF7E5F;
          }
   
</style>
</head>

<body>
<div class="navbar navbar-fixed-top">
    <div class="navbar-inner">
        <div class="container">
            <a href="/" class="brand">Welcome to Chandampally Village</a>
            <a href="/" class="brand" id="heroku">by <strong>venkat s reddy</strong></a>
        </div>
    </div>
</div>

	<div class="container">
           	<div class="page-header">
                <h1>Register here</h1>
            </div>
            <form:form id="village-form" method="post" action="add" commandName="person" class="form-horizontal">

	 		<div class="control-group">
	 		<form:label class="control-label col-xs-3" path="firstName">First Name</form:label>
            <div class="controls">
                <form:input name="firstName" path="firstName" />
             </div>
     		</div>
     		<div class="control-group">
	 		<form:label class="control-label col-xs-3" path="lastName">Last Name</form:label>
            <div class="controls">
                <form:input name="lastName" path="lastName" /><br/>
             </div>
     		</div>
     		<div class="control-group">
	 		<form:label class="control-label col-xs-3" path="phone">Phone Number</form:label>
            <div class="controls">
                <form:input name="phone" path="phone" maxlength="10"/>
             </div>
     		</div>
           <div class="control-group">
	 		<form:label class="control-label col-xs-3" path="aadhar">Aadhar Card Number</form:label>
            <div class="controls">
                <form:input name="aadhar" path="aadhar" maxlength="12" />
             </div>
          </div>
          <div class="control-group">
	 		<div class="controls">
                <input type="submit" value="Submit" class="btn"/>
             </div>
          </div>
   </form:form>


            <c:if  test="${!empty peopleList}">
                <h3>Registered Persons</h3>
                <table class="table">
                    <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Phone Number</th>
                        <th>Aadhar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <c:forEach items="${peopleList}" var="person">
                        <tr>
                            <td>${person.lastName}</td><td>${person.firstName}</td>
                            <td>${person.phone}</td><td>${person.aadhar}</td>
                            <td><form action="delete/${person.id}" method="post"><input type="submit" class="btn btn-danger btn-mini" value="Delete"/></form></td>
                        </tr>
                    </c:forEach>
                    </tbody>
                </table>
            </c:if>
    </div>
   
</body>
</html>

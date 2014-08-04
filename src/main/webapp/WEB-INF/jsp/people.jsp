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
    				fname:"Please enter first name.",
    				lname: "Please enter last name.",
    				
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
    	 $('#village-form').submit(function(e){
         	e.preventDefault(); //STOP default action
            
             var $form = $(this);

             // check if the input is valid
             if(!$form.valid()) return false;
    	 });
     });
     </script>
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
    <div class="row">
        <div class="span8 offset2">
            <div class="page-header">
                <h1>Register here</h1>
            </div>
            <form:form id="village-form" method="post" action="add" commandName="person" class="form-vertical">

                <form:label path="firstName">First Name</form:label>
                <form:input name="firstName" path="firstName" />
                <form:label path="lastName">Last Name</form:label>
                <form:input name="lastName" path="lastName" /><br/>
                <form:label path="phone">Phone Number</form:label>
                <form:input name="phone" path="phone" /><br/>
                <form:label path="aadhar">Aadhar Card Number</form:label>
                <form:input name="aadhar" path="aadhar" /><br/>
                <input type="submit" value="Submit" class="btn"/>
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
    </div>
</div>

</body>
</html>

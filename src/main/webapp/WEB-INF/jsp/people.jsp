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
    		 
            	focusCleanup: true,
            	focusInvalid: false,
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
    				caste:"required",
    				community:"required",
    				revenue:"required",
    				village:"required",
    				aboutyou:"required",
    				//gender
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
    				caste: "Please select your Caste.",
    				community: "Please enter Community name.",
    				revenue: "Please select your Revenue Mondal.",
    				village: "Please select your Village.",
    				aboutyou:"Please enter your feedback about Village.",
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
            <a href="/" class="brand">Welcome to Nakrekal</a>
            <a href="/" class="brand" id="heroku">by <strong>ust global technologies</strong></a>
        </div>
    </div>
</div>

	<div class="container">
	  <div class="span9 offset2">
           	<div class="page-header">
                <h1>Global village Registration Form</h1>
            </div>
            <form:form id="village-form" method="post" action="add" commandName="person" class="form-horizontal">

	 		<div class="control-group">
	 		<form:label class="control-label col-xs-3" path="firstName">First Name</form:label>
            <div class="controls">
                <form:input name="firstName" path="firstName" />
             </div>
     		</div>
     		<div class="control-group">
	 		<form:label class="control-label col-xs-3" path="lastName">Family Name</form:label>
            <div class="controls">
                <form:input name="lastName" path="lastName" />
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
          <!-- Radio for sex -->
          
          <div class="control-group">
	 		<form:label class="control-label col-xs-3" path="gender">Gender</form:label>
            <div class="controls">
                 
                <label class="radio-inline">
  					<form:radiobutton path="gender" value="Male" checked="checked" />Male
				</label>
				<label class="radio-inline">
  					<form:radiobutton	path="gender" value="Female" />Female
				</label>
                      
                
             </div>
          </div>
          
          <!-- Select box for caste -->
          
          <div class="control-group">
	 		<form:label class="control-label col-xs-3" path="caste">Caste</form:label>
            <div class="controls">
                <form:select name="caste" path="caste">
					<form:option value="" label="Select Caste" />
					<form:option value="OC" label="OC" />
					<form:option value="BC-A" label="BC-A" />
					<form:option value="BC-B" label="BC-B" />
					<form:option value="BC-C" label="BC-C" />
					<form:option value="BC-D" label="BC-D" />
					<form:option value="SC" label="SC" />
					<form:option value="ST" label="ST" />
				</form:select></div>
          </div>
          <!-- Enter community -->
          <div class="control-group">
	 		<form:label class="control-label col-xs-3" path="community">Community Name</form:label>
            <div class="controls">
                <form:input name="community" path="community" maxlength="15"/>
             </div>
     	  </div>
          
          <!-- Select box for revenue -->
          
          <div class="control-group">
	 		<form:label class="control-label col-xs-3" path="revenue">Revenue Mondal</form:label>
            <div class="controls">
                <form:select name="revenue" path="revenue">
					<form:option value="" label="Select Revenue Mondal" />
					<form:option value="Nakrekal" label="Nakrekal" />
				</form:select></div>
          </div>
          
          <!-- Select box for village -->
          
          <div class="control-group">
	 		<form:label class="control-label col-xs-3" path="village">Village</form:label>
            <div class="controls">
                <form:select name="village" path="village">
					<form:option value="" label="Select Village" />
					<form:option value="Adavi Bollaram(576921)" label="Adavi Bollaram" />
					<form:option value="Chandam Pally (576922)" label="Chandam Pally" />
					<form:option value="Chandupatla	(576927)" label="Chandupatla" />
					<form:option value="Gorenkal Pally (576929)" label="Gorenkal Pally" />
					<form:option value="Kadaparthy (576920)" label="Kadaparthy" />
					<form:option value="Mandalapur (576930)" label="Mandalapur" />
					<form:option value="Mangali Pally (576926)" label="Mangali Pally" />
					<form:option value="Marrur	(576928)" label="Marrur" />
					<form:option value="Nakrekal(CT) (576931)" label="Nakrekal(CT)" />
					<form:option value="Nellibanda (576923)" label="Nellibanda" />
					<form:option value="Nomula (576919)" label="Nomula" />
					<form:option value="Ogode (576916)" label="Ogode" />
					<form:option value="Palem (576918)" label="Palem" />
					<form:option value="Tatikal	(576924)" label="Tatikal" />
					<form:option value="Tettekunta (576925)" label="Tettekunta" />
					<form:option value="Vallabhapur (576917)" label="Vallabhapur" />
					
				</form:select></div>
          </div>
          
          <div class="control-group">
	 		<form:label class="control-label col-xs-3" path="aboutyou">About Village</form:label>
            <div class="controls">
                <form:textarea name="aboutyou" path="aboutyou" rows="3"/>
             </div>
     	  </div>
          
          <div class="control-group">
	 		<div class="controls">
                <input type="submit" value="Submit" class="btn"/>
             </div>
          </div>
   </form:form>

    </div>
   </div>
</body>
</html>

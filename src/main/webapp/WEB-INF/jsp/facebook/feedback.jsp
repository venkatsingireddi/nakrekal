<!doctype html>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<html>
<head>
    <meta charset="utf-8">
    <title>Feedback</title>

    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="//netdna.bootstrapcdn.com/bootstrap/2.3.2/css/bootstrap.min.css" rel="stylesheet">
	<link href="http://heroku.github.com/template-app-bootstrap/heroku.css" rel="stylesheet">
    
    <script src="/js/jquery-1.10.1.min.js"></script>
    <script src="/js/jquery.validate.min.js"></script>
    <script src="/js/jquery-ui.js"></script>

</head>

<body>
<div class="navbar navbar-fixed-top">
    <div class="navbar-inner">
        <div class="container">
       		<a href="<%=request.getContextPath()%>/" class="brand">Home</a>
            <a href="" class="brand">Welcome to SDC, Nakrekal</a>
            <a href="" class="brand" id="heroku">by <strong>venkat s reddy</strong></a>
        </div>
    </div>
</div>
<br/><br/><br/>
<div class="container">
 <div class="hero-unit">
  <h3 class="alert alert-success">Users feedback's : &nbsp;&nbsp; ${fn:length(feedbackList)}</h3>
  <br/>
    <c:if  test="${!empty feedbackList}">             
          <c:forEach items="${feedbackList}" var="feedback">
                    <div class="post">
    				<h4>${feedback.feedBackType}</h4>
    				<p>${feedback.message}</p>
    				<p>--by &nbsp;&nbsp;<i>${feedback.name}</i></p>
  					</div>   
          </c:forEach>                   
 	</c:if>
 </div>
 </div>
</body>
</html>
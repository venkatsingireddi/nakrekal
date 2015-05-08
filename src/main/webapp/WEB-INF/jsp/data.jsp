<!doctype html>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<html>
<head>
    <meta charset="utf-8">
    <title>Data</title>

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
    <style type="text/css">
    .bs-example{
    	margin: 20px;
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
<div class="bs-example">
       <c:if  test="${!empty peopleList}">
                <h3>Registered Persons</h3>
                <table class="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Aadhar</th>
                        <th>Village</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    <c:forEach items="${peopleList}" var="person">
                        <tr class="danger">
                            <td>${person.firstName} , ${person.lastName}</td><td>${person.phone}</td>
                            <td>${person.aadhar}</td><td>${person.village}</td>
                            <td><form action="delete/${person.id}" method="post"><input type="submit" class="btn btn-danger btn-mini" value="Delete"/></form></td>
                        </tr>
                    </c:forEach>
                    </tbody>
                </table>
  </c:if>
 
</div>
</body>
</html>
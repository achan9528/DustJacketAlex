<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>  
 <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Create Artist</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/css/search.css">
<!--     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> -->
<!--     <script src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js'></script> -->
    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
  	<script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script>
    	$(document).ready(function(){
    		$("#backButton").click(function(e){
    			$(".container").toggle("fade");
    			setTimeout(function(){
    				window.open("/", "_self");
    			}, 1000)
    		})
    	})
    </script>
</head>
<body>
	<div class="container">
		<div class="row header-row">
			<h1 class="col">Create a New Artist</h1>
			<h3 class="col-3 text-muted" id="backButton">Back</h3>
		</div>
		<div class="row main-content">
			<form:form modelAttribute="artist" action="/artists" method="post">
			    <div class="form-group">
			    	<form:label path="name">Artist Name</form:label>
			        <form:errors path="name"/>
			        <form:input path="name" placeholder="Maluma, Metallica, Mumford and Sons..." class="form-control"/>
			    </div>
			    <button class="btn btn-primary">Create</button>
			</form:form>>			
		</div>
	</div>
</body>
</html>
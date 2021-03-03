<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/search.js"></script>
    <title>DskJckt</title>
</head>
<body>
	<div class="container">
		<div>
			<a href="/logout">Logout</a>
			<a href="/tasks">Dust Jacket</a>
		</div>
		<div class="row">
			<form action="/" method="post" id="searchForm">
				<div class="form-group">
					<label for="searchBar">Search:</label>
					<input type="text" name="searchBar" id="searchBar">
				</div>
				<button class="btn btn-primary">Submit</button>
			</form>
			<div>
				<p id="apiData">
					<c:out value="${apiData}"></c:out>
				</p>
				<div id="gallery">
				</div>
			</div>
		</div>
	</div>
</body>
</html><%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/css/search.css">
<!--     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> -->
<!--     <script src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js'></script> -->
    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
  	<script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script type="text/javascript" src="js/search.js"></script>
    <script>
      function play() {
        var audio = document.getElementById("audio");
        audio.play();
      }
    </script>
    <title>DskJckt</title>
</head>
<body>
	<div class="container min-vh-100" id="container">
		<div class="row min-vh-100 justify-content-center align-items-center" id="mainContent">
			<form action="/" method="post" id="searchForm">
				<h2 class="text-muted">Browse</h2>
				<div class="input-group">
					 
					 <div class="input-group-prepend">
					 	<select class="btn btn-outline-secondary dropdown-toggle" id="searchOption">
					 		<option value="tracks">by Song Title</option>
					 		<option value="artists">by Artist Name</option>
					 	</select>
<!-- 					    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button> -->
<!-- 					    <div class="dropdown-menu" id="searchOption"> -->
<!-- 					      <a class="dropdown-item">Songs</a> -->
<!-- 					      <a class="dropdown-item">Artists</a> -->
<!-- 					      <a class="dropdown-item" href="#">Another action</a> -->
<!-- 					      <a class="dropdown-item" href="#">Something else here</a> -->
<!-- 					      <div role="separator" class="dropdown-divider"></div> -->
<!-- 					      <a class="dropdown-item" href="#">Separated link</a> -->
<!-- 					    </div> -->
					 </div>
					  
					 
				 	<input type="text" class="form-control" aria-label="Text input with dropdown button" id="searchBar" placeholder="Nas, BTS, Katy Perry, the (one and only) Wiggles..." required>
				 	
				 	<div class="input-group-append">
					    <button class="input-group-text" id="searchButton">Search</button>
					 </div>
				</div>
			
<!-- 				  <div class="input-group-append">
				    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
				    <div class="dropdown-menu" id="searchOption">
				      <a class="dropdown-item">Songs</a>
				      <a class="dropdown-item">Artists</a>
				      <a class="dropdown-item" href="#">Another action</a>
				      <a class="dropdown-item" href="#">Something else here</a>
				      <div role="separator" class="dropdown-divider"></div>
				      <a class="dropdown-item" href="#">Separated link</a>
				    </div>
				  </div> -->
			</form>
			<div>
				<div id="gallery" style="display:block;">
				</div>
			</div>
		</div>
	</div>
</body>
</html><%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
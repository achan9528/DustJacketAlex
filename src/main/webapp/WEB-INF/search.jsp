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
    <script>
      function play() {
        var audio = document.getElementById("audio");
        audio.play();
      }
    </script>
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
				<div class="form-group">
					<label class="btn btn-outline-success" for="searchSongs">By Song</label>
					<input type="radio" class="btn btn-check" name="searchBarOption" id="searchSongs" autocomplete="off" value="tracks">
					
					<label class="btn btn-outline-danger" for="searchArtists">By Artist</label>
					<input type="radio" class="btn btn-check" name="searchBarOption" id="searchArtists" autocomplete="off" value="artists" checked>
				</div>
				<button class="btn btn-primary">Submit</button>
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
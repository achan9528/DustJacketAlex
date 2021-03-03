$(document).ready(function(){
//	var data;
//	$("#searchForm").submit(function(event){
//		event.preventDefault();
//		var t = $("#searchBar").val();
//		var option = $("searchBarOption").val();
//		
//		$.ajax({
//			url: "/searchAPI",
//			data: {'searchBar': t},
//			success: function(result){
//				console.log("success");
//				var temp = JSON.parse(result);
//				data = temp;
//				console.log(temp);
//				console.log(temp['artists']['items'][0].name);
//				$("#gallery").empty();
//				for (var i = 0; i < temp['artists']['items'].length; i++){
//
////				<h3 id="song1"></h3>
////				<img style="width: 40px; height: 40px" src="" id="album_img_1">					
//					var section = `#artist_${i}`;
//					var sectionHTML = `<div style="display:none;" id=artist_${i}></div>`
//					var artistName = temp['artists']['items'][i].name;
//					var artistNameHTML = `<h3 id=artist_${i}>${artistName}</h3>`;
//					
//					
//					$("#gallery").append(sectionHTML);
//					$(section).append(artistNameHTML);
//					$(section).delay(100).fadeIn("slow", function(){});
//				}
//				
//			},
//			error: function(result){
//				console.log("failed");
//				console.log(result);
//			}
//		})
//	})
	
		var data;
	$("#searchForm").submit(function(event){
		event.preventDefault();
		var t = $("#searchBar").val();
		var options = document.getElementsByName('searchBarOption');
		var option;
		for (var i = 0; i < options.length; i++){
			if (options[i].checked){
				option = options[i].value;
			}
		}
		
		$.ajax({
			url: "/searchAPI",
			data: {'searchBar': t},
			success: function(result){
				console.log("success");
				var temp = JSON.parse(result);
				data = temp;		
				console.log(temp);
				console.log(temp[option]['items'][0].name);
				$("#gallery").empty();
				for (var i = 0; i < temp[option]['items'].length; i++){

//				<h3 id="song1"></h3>
//				<img style="width: 40px; height: 40px" src="" id="album_img_1">					
					var section = `#artist_${i}`;
					var sectionHTML = `<div style="display:none;" id=artist_${i}></div>`
					var artistName = temp[option]['items'][i].name;
					var artistNameHTML = `<h3 id=artist_${i}>${artistName}</h3>`;
					
					
					$("#gallery").append(sectionHTML);
					$(section).append(artistNameHTML);
					$(section).delay(100).fadeIn("slow", function(){});
				}
				
			},
			error: function(result){
				console.log("failed");
				console.log(result);
			}
		})
	})
	
	
	
	
})   
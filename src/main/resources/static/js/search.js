$(document).ready(function(){
	$("#searchForm").submit(function(event){
		event.preventDefault();
		var t = $("#searchBar").val();
		console.log(typeof(t));
		console.log(t);
		var x = 'nas, common,   backstreet';
		console.log(t);
		$.ajax({
			url: "/searchAPI",
			data: {'searchBar': t},
			success: function(result){
				console.log("success");
				var temp = JSON.parse(result);
				console.log(temp);
//				tempImg = temp['images'][0]['url'];
//				console.log(tempImg);
//				$("#testImage").attr("src", tempImg);
			},
			error: function(result){
				console.log("failed");
				console.log(result);
			}
		})
	})
})   
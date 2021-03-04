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
		
		$("#searchForm").toggle("explode");
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
				if (option=="tracks"){
					var galleryHeader = "<div id='galleryHeader' class='row' style='display:none;'><h2 class='col'>Song Title <span class='text-muted'>& Related Artists </span><span class='text-info'>& Related Album</span></h2><h2 class='col-6 text-right' id='searchHeader'>Search</h2></div>";
				} else{
					var galleryHeader = "<div id='galleryHeader' class='row' style='display:none;'><h2 class='col'>Artist <span class='text-muted'>& Related Genres</span></h2><h2 class='col-6 text-right' id='searchHeader'>Search</h2></div>";
				}
				$("#gallery").append(galleryHeader);
				$("#galleryHeader").fadeIn("slow");
//				$("#searchHeader").fadeIn("slow");
				
				for (var i = 0; i < temp[option]['items'].length; i++){

//				<h3 id="song1"></h3>
//				<img style="width: 40px; height: 40px" src="" id="album_img_1">					
					var section = `#section_${i}`;
					var sectionHTML = `<div class='searchData' style="display:none;" id=section_${i}></div>`
					var firstField = temp[option]['items'][i].name;
					var secondField = "";
					var thirdField = "";
					if (option=='tracks'){
						var secondFieldList = temp[option]['items'][i]['artists'];
						for (var n = 0; n < secondFieldList.length; n++){
							secondField += secondFieldList[n].name + ", ";
						}
						
						secondField = secondField.substring(0, secondField.length - 2);
						
						var thirdField = temp[option]['items'][i]['album'].name;
//						for (var n = 0; n < thirdFieldList.length; n++){
//							thirdField += thirdFieldList[n].name + ", ";
//						}
						
//						thirdField = thirdField.substring(0, thirdField.length - 2);
					} else{
						console.log("made it");
						var secondFieldList = temp[option]['items'][i]['genres'];
						for (var n = 0; n < secondFieldList.length; n++){
							secondField += secondFieldList[n] + ", ";
						}
						
						secondField = secondField.substring(0, secondField.length - 2);
//						
//						var thirdField = temp[option]['items'][i]['album'].name;
////						for (var n = 0; n < thirdFieldList.length; n++){
////							thirdField += thirdFieldList[n].name + ", ";
////						}
//						
////						thirdField = thirdField.substring(0, thirdField.length - 2);
						
					}
					
					
					var html = `
						<div class="expandable" id="expandable_${i}">
						<h4 class="expandable" id=artist_${i}>${firstField}
						<span class="text-muted expandable">${secondField}</span>
						<span class="text-info expandable">${thirdField}</span>
						</h4>
						</div>`;
						
					var testHTML = `<p style='display:none;' id='test_${i}'>test</p>`
					var htmlID = `#expandable_${i}`
					
					$("#gallery").append(sectionHTML);
					$(section).append(html);
					$(htmlID).append(testHTML);

				}
				
				$(".searchData").each(function(){
						$(this).fadeIn("slow");
//						setTimeout(function(){$(this).fadeIn("slow");}, 500);
				});
				
			},
			error: function(result){
				console.log("failed");
				console.log(result);
			}
		})
	})

	// show line item details
	$(document.body).on("click","h4",function(){
		var temp = $(this).prop("id").split("_");
		var temp = temp[1];
		var idString = "#test_"+ temp;
		$(idString).slideToggle("slow");
		return;
		
	});
	
		// show line item details
	$(document.body).on("click", "#searchHeader",function(){
		console.log("clicked");
		$("#searchForm").toggle("explode");
//		$("#gallery").toggle("explode");
	});
	
	$(document).click(function(e){ console.log(e.target); });
})   
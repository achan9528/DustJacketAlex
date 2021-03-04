function previewTrack(external_link){
	window.open(external_link, '_blank');
}

$(document).ready(function(){
	var data; // this holds the spotify data and gets defned in the
			// form submission and ajax call
	
	
	$("#searchForm").submit(function(event){
		event.preventDefault();
		var t = $("#searchBar").val();
		var options = document.getElementsByClassName('searchBarOption');
		console.log(options);
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
					var galleryHeader = "<div id='galleryHeader' class='row' style='display:none;'><h2 class='col'><span class='text-white bg-dark'>Song Title </span>& Related Artists <span class='text-muted'>& Related Album</span></h2><h2 class='col-3 text-right text-muted' id='searchHeader'>Search</h2></div>";
				} else{
					var galleryHeader = "<div id='galleryHeader' class='row' style='display:none;'><h2 class='col'><span class='text-white bg-dark'>Artist </span>& Related Genres</h2><h2 class='col-3 text-right text-muted' id='searchHeader'>Search</h2></div>";
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
					var external_link = "";
					if (option=='tracks'){
						var secondFieldList = temp[option]['items'][i]['artists'];
						for (var n = 0; n < secondFieldList.length; n++){
							secondField += secondFieldList[n].name + ", ";
						}
						
						secondField = secondField.substring(0, secondField.length - 2);
						
						var thirdField = temp[option]['items'][i]['album'].name;
						external_link = temp[option]['items'][i]['external_urls']['spotify'];	
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
						<h4 class="expandable" id=artist_${i}>
						<span class="text-white bg-dark">${firstField}</span>
						<span class="expandable">${secondField}</span>
						<span class="text-muted expandable">${thirdField}</span>
						</h4>
						</div>`;
					
					
					var testHTML = `
					<ul class='options' style='display:none;' id="options_${i}">
						<li class='addToVinyl' id='addToVinyl_${i}'><h5>Add to A Vinyl</h5></li>
						<li class='saveToPlaylist' id='addToVinyl_${i}'><h5>Save to A Playlist</h5></li>
						<li class='preview' id='preview_${i}'>
							<h5 onclick="previewTrack('${external_link}')">preview in spotify</h5>
						</li>
					</ul>
					
					`
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

	// show search form
	$(document.body).on("click", "#searchHeader",function(){
		console.log("clicked #searchHeader");
		$("#searchForm").toggle("explode");
	});

	// show line item details
	$(document.body).on("click","h4",function(){
		var temp = $(this).prop("id").split("_");
		var temp = temp[1];
		var idString = "#options_"+ temp;
		$(idString).toggle("slide");
		return;
		
	});
	
	// opens up list of vinyl options
	$(document.body).on("click", ".addToVinyl",function(e){
		e.stopPropagation();
		console.log("clicked addToVinyl");
		var optionListId = "optionList_" + $(this).prop("id").split("_")[1];
		var optionListSelector = "#" + optionListId;
		var optionList = `
			<ul style="display:none;" id=${optionListId}>
				<li class="vinyl"><h5>Option 1</h5></li>
				<li class="vinyl"><h5>Option 2</h5></li>
				<li class="vinyl"><h5>Option 3</h5></li>
			</ul>
		`
		$(this).append(optionList)
		$(optionListSelector).toggle("slide","slow");
	});
	
	// submits song information to addToVinyl route and displays alert
	$(document.body).on("click", ".vinyl",function(e){
		e.stopPropagation();
		console.log("clicked vinyl");
		console.log("successfully added song to Vinyl");
		var alert = "<p id='alert' style='display:none;' class='alert alert-success' role='alert'>Success!</p>";
		var temp = $(this).parent().parent().prepend(alert);
		$("#alert").toggle("slide","slow",function(){
			$("#alert").toggle("slide",2000);
		})
			
//		$.ajax({
//			url: '/addSongToVinyl',
//			data: {},
//			success: function(){
//				console.log("successfully added song to Vinyl");
//				var alert = "<p id='alert' class='alert alert-success' role='alert'>Success!</p>";
//				var temp = $("#mainContent").prepend(alert);
//				setTimeout(function(){
//					$("#alert").toggle("fade")}, 2000);
//			}, error: function(){
//				console.log("did not add song to Vinyl");
//				var alert = "<p id='alert' class='alert alert-danger' role='alert'>Success!</p>";
//				var temp = $("#mainContent").prepend(alert);
//				setTimeout(function(){
//					$("#alert").toggle("fade")}, 2000);
//			}
//		})
	});
	
//	// opens up preview for sound
//	$(document.body).on("click", ".preview",function(e){
//		e.stopPropagation();
//		console.log("clicked preview");
//		var external_link = $(this).data('el');
//		console.log($(this).prop("tagName"));
//		console.log($(this).prop("id"));
//		console.log($(this).data('el'));
//		console.log($(this).attr("data-el"));
//		window.open(external_link, '_blank');
//	});
	
	
	
	$(document).click(function(e){ console.log(e.target);});
})   
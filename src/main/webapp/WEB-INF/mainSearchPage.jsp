<div class="row" id="mainContent">
	<form action="/" method="post" id="searchForm">
		<div class="form-group">
			<label for="searchBar">Search:</label>
			<input type="text" name="searchBar" id="searchBar">
			
<!-- 					<input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked> -->
<!-- 					<label class="btn btn-outline-success" for="success-outlined">Checked success radio</label> -->
			
<!-- 					<input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off"> -->
<!-- 					<label class="btn btn-outline-danger" for="danger-outlined">Danger radio</label> -->
			
			<input type="radio" class="btn btn-check searchBarOption" name="options-outlined" id="searchSongs" autocomplete="off" value="tracks" checked>
			<label class="btn btn-outline-success" for="searchSongs">By Song</label>
			
			<input type="radio" class="btn btn-check searchBarOption" name="options-outlined" id="searchArtists" autocomplete="off" value="artists">					
			<label class="btn btn-outline-danger" for="searchArtists">By Artist</label>

			
			<button class="btn btn-primary">Submit</button>
		</div>
	</form>
	<div>
		<div id="gallery" style="display:block;">
		</div>
	</div>
</div>
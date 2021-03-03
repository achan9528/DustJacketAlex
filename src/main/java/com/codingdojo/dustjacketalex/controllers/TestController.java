package com.codingdojo.dustjacketalex.controllers;
//Web Stuff
import javax.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
//import javax.validation.Valid;
import org.springframework.ui.Model;
//Needed user-defined classes
//import com.codingdojo.taskmanager.models.*;
//import com.codingdojo.taskmanager.services.TaskManagerService;
//import com.codingdojo.taskmanager.validator.*;
//Other Java classes needed
import java.util.List;
import java.util.HashMap;
import java.util.Map;
import java.io.IOException;
import java.net.URI;
import java.net.http.*;
import java.net.http.HttpResponse.BodyHandlers;
//JSON Parsing library
@Controller
public class TestController {
	
	private String spotifyAccessCode = "Bearer BQDG9nSrLnQ9p6FFNCxZ35dGwRLgY2Ivr5ouERqXxL6pMZCYdY6qDkKibGsAgJYvP5VKfN4q6sjjOZZwwsM";
	
	@RequestMapping("/")
	public String index() {
		return "search.jsp";
	}
	
	@RequestMapping("/searchAPITest")
	@ResponseBody
	public String searchTracks(Model model,
			@RequestParam("searchBar") String keywords) {
		
		String kws = convertToCSL(keywords);
		String uri = "https://api.spotify.com/v1/search?type=track&q=" + kws;
		
		HttpClient client = HttpClient.newHttpClient();
		HttpRequest request = HttpRequest.newBuilder()
				.header("Accept", "application/json")
				.header("Content-Type", "application/json")
				.header("Authorization", spotifyAccessCode)
				.uri(URI.create(uri))
				.build();
		try {
			HttpResponse<String> response = client.send(request, BodyHandlers.ofString());
//			model.addAttribute("apiData", response.body());
			return response.body();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			model.addAttribute("apiData", e);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			model.addAttribute("apiData", e);
		}
		
		return "search.jsp";
	}
	
	@RequestMapping("/searchAPI")
	@ResponseBody
	public String searchArtists(Model model,
			@RequestParam("searchBar") String keywords) {
		
		String kws = convertToCSL(keywords);
		String uri = "https://api.spotify.com/v1/search?type=artist,track&q=" + kws;
		
		HttpClient client = HttpClient.newHttpClient();
		HttpRequest request = HttpRequest.newBuilder()
				.header("Accept", "application/json")
				.header("Content-Type", "application/json")
				.header("Authorization", spotifyAccessCode)
				.uri(URI.create(uri))
				.build();
		try {
			HttpResponse<String> response = client.send(request, BodyHandlers.ofString());
//			model.addAttribute("apiData", response.body());
			return response.body();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			model.addAttribute("apiData", e);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			model.addAttribute("apiData", e);
		}
		
		return "search.jsp";
	}
	
	private String convertToCSL(String x) {
		String[] words = x.split(",");
		String kws = "";
		for (String s:words) {
			s = s.trim();
			String[] temp = s.split(" ");
			if (temp.length > 1){
				String l = "";
				for (String tempS: temp) {
					l += tempS + "+";
				}
				l = l.substring(0, l.length()-1);
				kws += l + "+";
			} else {
				kws += s + "+";
			}
		}
		kws = kws.substring(0, kws.length()-1);
		return kws;
	}
	
}

// first this step
// curl -X "POST" -H "Authorization: Basic NDNmYjY4YzYzNmVmNGU3NGE3NWYzYjYzYWM2NTkzNTk6YTJjNWEzMjBmYzI5NDQ2MGJlY2FjN2RiNTZiNzdiNDk=" -d grant_type=client_credentials "https://accounts.spotify.com/api/token"

// then this step. This is the actual API Search
// curl -X "GET" "https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQCfFgKSrrP0m7j4BIOYrGQj17ZVM9k2QLacEej8TPrjCtMU5n-sMJTV0HhWiVi7R7k8Nxn9wFtIiLj8BP8"
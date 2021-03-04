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
import java.io.BufferedReader;
//JSON Parsing library

import java.net.URL;
import java.net.URLConnection;
import javax.net.ssl.HttpsURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.io.DataOutputStream;
import java.io.InputStreamReader;


@Controller
public class TestController {
	
	private String spotifyAccessCode = "Bearer BQA1X6sO8n6Zas7mLZ2YHmyypKYpILjJ1_rt_MUF4_306F1eZuRfK19wigXPYCKie1cDnNMeTumpkLjPzGA";
	
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
			// save spotifySongID
			// song name, artist, album ,genre
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
	
	@RequestMapping("/artist")
	public String artistPage() {
		return "artist.jsp";
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
	
	@RequestMapping("/addSongToVinyl")
	@ResponseBody
	public String test(){
		return "test";
	}
	
	@RequestMapping("/recommendation")
	@ResponseBody
	public String getRecommendation(Model model,
			@RequestParam("artistIds") String artistIds) {
		
		System.out.println(artistIds);
		String[] artists = artistIds.split(",");
		System.out.println(artists[0].toString());
		
		String uri = "https://api.spotify.com/v1/artists/" + artists[0] + "/top-tracks?market=US";
		
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
		
		return "getRecommendation()";
	}
	
	@RequestMapping("/searchAPI8")
	@ResponseBody
	public String searchArtists8(Model model,
			@RequestParam("searchBar") String keywords) {
		
		String kws = convertToCSL(keywords);
		String uri = "https://api.spotify.com/v1/search?type=artist,track&q=" + kws;
				
		URL url;
		HttpsURLConnection con;
		try {
			
			// establishes connection
			url = new URL(uri);
			con = (HttpsURLConnection) url.openConnection();
			// sets the parameters and headers
			con.setRequestMethod("GET");
			con.setDoOutput(true);
			con.setRequestProperty("Accept", "application/json");
			con.setRequestProperty("Content-Type", "application/json");
			con.setRequestProperty("Authorization", spotifyAccessCode);
//			// sets a reader for the input stream
//			reader = new BufferedReader(new InputStreamReader(con.getInputStream()));
//			// reads each line
//			String line = reader.readLine();
			
			return print_content(con);
			
			
		} catch (MalformedURLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			return e1.toString();
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			return e1.toString();
		}

	}
	
	@RequestMapping("/recommendation8")
	@ResponseBody
	public String getRecommendation8(Model model,
			@RequestParam("artistIds") String artistIds) {
		
		System.out.println(artistIds);
		String[] artists = artistIds.split(",");
		System.out.println(artists[0].toString());
		
		String uri = "https://api.spotify.com/v1/artists/" + artists[0] + "/top-tracks?market=US";
				
		URL url;
		HttpsURLConnection con;
		try {
			
			// establishes connection
			url = new URL(uri);
			con = (HttpsURLConnection) url.openConnection();
			// sets the parameters and headers
			con.setRequestMethod("GET");
			con.setDoOutput(true);
			con.setRequestProperty("Accept", "application/json");
			con.setRequestProperty("Content-Type", "application/json");
			con.setRequestProperty("Authorization", spotifyAccessCode);
//			// sets a reader for the input stream
//			reader = new BufferedReader(new InputStreamReader(con.getInputStream()));
//			// reads each line
//			String line = reader.readLine();
			
			return print_content(con);
			
			
		} catch (MalformedURLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			return e1.toString();
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			return e1.toString();
		}
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
	
   private String print_content(HttpsURLConnection con){
	    if(con!=null){
	            
	    try {
	        
	       System.out.println("****** Content of the URL ********");			
	       BufferedReader br = 
	        new BufferedReader(
	            new InputStreamReader(con.getInputStream()));
	                
	       String input;
	       String return_value = "";
	                
	       while ((input = br.readLine()) != null){
	          System.out.println(input);
	          return_value += input;
	       }
	       br.close();
	       return return_value;
	                
	    } catch (IOException e) {
	       e.printStackTrace();
	       return e.toString();
	    }
	            
	       }
	   return "no connection";
   }
	
}

// first this step
// curl -X "POST" -H "Authorization: Basic NDNmYjY4YzYzNmVmNGU3NGE3NWYzYjYzYWM2NTkzNTk6YTJjNWEzMjBmYzI5NDQ2MGJlY2FjN2RiNTZiNzdiNDk=" -d grant_type=client_credentials "https://accounts.spotify.com/api/token"

// then this step. This is the actual API Search
// curl -X "GET" "https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQCfFgKSrrP0m7j4BIOYrGQj17ZVM9k2QLacEej8TPrjCtMU5n-sMJTV0HhWiVi7R7k8Nxn9wFtIiLj8BP8"
package com.app.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ContentSpecificResponse;
import com.app.entity.Content;
import com.app.entity.ContentType;
import com.app.service.ArtistService;
import com.app.service.ContentService;
import com.app.service.ReviewService;

@RestController
@RequestMapping("/content")
@CrossOrigin(origins = "http://localhost:3000")
public class ContentController {

	@Autowired
	private ContentService contentSer;
	
	@Autowired
	private ReviewService reviewSer;
	
	@Autowired
	private ArtistService artistSer;
	
	public ContentController() {
		// TODO Auto-generated constructor stub
	}
	
	@GetMapping
	public List<Content> getAllContent(){
		return contentSer.getContent();
	}
	
	@GetMapping(value = "/{conId}/image", produces = { MediaType.IMAGE_GIF_VALUE, 
			MediaType.IMAGE_JPEG_VALUE,
			MediaType.IMAGE_PNG_VALUE })
	public ResponseEntity<?> serveImageFromServerSideFolder(@PathVariable Integer conId) throws IOException {
		
		return new ResponseEntity<>(contentSer.serveImage(conId), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> findByContentId(@PathVariable Integer id) {
		return ResponseEntity.ok(contentSer.findContentById(id));
	}
	
	@GetMapping("/searchByType/{conType}")
	public List<ContentSpecificResponse> searchByContentType(@PathVariable String conType){
		return contentSer.fetchContentByType(ContentType.valueOf(conType.toUpperCase()));
	}
	
	@GetMapping("/ratingInRange/{minRate}/{maxRate}")
	public List<ContentSpecificResponse> ratingInParticularRange(@PathVariable double minRate, @PathVariable double maxRate){
		return contentSer.getContentByRateRange(minRate,maxRate);
	}
	
	
	@GetMapping("/searchContent/{key}")
	public List<ContentSpecificResponse> searchContentByKey(@PathVariable String key){
		return contentSer.fetchContentByKey(key);
	} 

}
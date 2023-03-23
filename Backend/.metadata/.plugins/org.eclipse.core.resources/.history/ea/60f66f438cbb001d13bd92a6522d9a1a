package com.app.controller;

import java.security.PublicKey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CommentDto;
import com.app.dto.LoginDto;
import com.app.dto.ReviewDto;
import com.app.dto.UserDto;
import com.app.entity.Comment;
import com.app.entity.Payment;
import com.app.entity.Review;
import com.app.entity.User;
import com.app.service.CommentService;
import com.app.service.ReviewService;
import com.app.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

	
	@Autowired
	private UserService userSer;
	
	@Autowired
	private ReviewService reviewSer;
	
	@Autowired
	private CommentService commentSer;
	
	
	public UserController() {
		// TODO Auto-generated constructor stub
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> loginUser(@RequestBody LoginDto dto)
	{
		return ResponseEntity.ok(userSer.loginUser(dto));
	}
	
	@PostMapping
	public ResponseEntity<?> registerUser(@RequestBody UserDto dto) {
		return ResponseEntity.ok(userSer.addUserDetails(dto));
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> updateDetails(@RequestBody UserDto dto){
		return ResponseEntity.ok(userSer.updateUserDetails(dto));
	}
	
	@PostMapping("/{userId}/{conId}/addreview")
	public ResponseEntity<?> addReview(@RequestBody ReviewDto newRev,@PathVariable Integer userId, @PathVariable Integer conId){
		return ResponseEntity.ok(reviewSer.addReview(newRev, userId, conId));
	}
		@PostMapping("/{userId}/{revId}/addcomment")
	public ResponseEntity<?> addComment(@RequestBody CommentDto newComment ,@PathVariable Integer userId, @PathVariable Integer revId){
		return ResponseEntity.ok(commentSer.addComment(newComment, userId, revId));
	}
}

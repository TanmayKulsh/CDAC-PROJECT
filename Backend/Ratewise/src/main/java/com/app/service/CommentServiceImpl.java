package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceAddingFailedException;
import com.app.custom_exception.ResourceNotFoundException;
import com.app.dto.CommentDto;
import com.app.dto.ReviewDto;
import com.app.entity.Comment;
import com.app.entity.Content;
import com.app.entity.Review;
import com.app.entity.User;
import com.app.repository.CommentRepository;
import com.app.repository.ReviewRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class CommentServiceImpl implements CommentService {

	@Autowired
	private CommentRepository commentRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private ReviewRepository reviewRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public String delcomment(Integer id) {
		String mesg = "Comment Deletion Failed..!!!!";
		if(commentRepo.existsById(id)) {
			commentRepo.deleteById(id);
			mesg = "Comment Deletion Successfull...!!!!";
		}
		return mesg;
	}

	@Override
	public List<Comment> getComments() {
		// TODO Auto-generated method stub
		return commentRepo.findAll();
	}

	@Override
	public Optional<Comment> findCommentById(Integer id) {
		// TODO Auto-generated method stub
		return commentRepo.findById(id);
	}

	@Override
	public CommentDto addComment(CommentDto newComment, Integer userId, Integer revId) {
		User user = userRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User Not Found"));
		Review review = reviewRepo.findById(revId).orElseThrow(() -> new ResourceNotFoundException("Review Not Found"));
		if(user != null && review != null) {
			Comment comment = mapper.map(newComment, Comment.class);
			comment.setUser(user);
			comment.setReview(review);
			return mapper.map(commentRepo.save(comment), CommentDto.class);
		}
		throw new ResourceAddingFailedException("Comment Adding Failed..!!!");
	}

	@Override
	public CommentDto updateComment(CommentDto dto) {
		Comment comment = commentRepo.findById(dto.getId()).orElseThrow(() -> new ResourceNotFoundException("Comment Not Found"));
		if(comment != null) {
			comment.setText(dto.getText());
			comment.setTimestamp(dto.getTimestamp());
			return mapper.map(commentRepo.save(comment), CommentDto.class);
		}
		throw new ResourceAddingFailedException("Failed to Update Review..!!");
		
	}

}

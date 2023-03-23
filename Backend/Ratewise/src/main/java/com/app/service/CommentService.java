package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.CommentDto;
import com.app.dto.ReviewDto;
import com.app.entity.Comment;

public interface CommentService {

	String delcomment(Integer id);

	List<Comment> getComments();

	Optional<Comment> findCommentById(Integer id);

	CommentDto addComment(CommentDto newComment, Integer userId, Integer revId);

	CommentDto updateComment(CommentDto dto);

}

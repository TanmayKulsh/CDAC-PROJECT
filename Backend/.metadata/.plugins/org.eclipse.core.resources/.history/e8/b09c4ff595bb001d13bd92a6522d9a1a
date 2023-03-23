package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.ReviewDto;
import com.app.entity.Review;

public interface ReviewService {

	String delreview(Integer id);

	List<Review> getReviews();

	Optional<Review> findReviewById(Integer id);

	ReviewDto addReview(ReviewDto newRev, Integer userId, Integer conId);

}

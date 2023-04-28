package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Content;
import com.app.entity.ContentType;

public interface ContentRepository extends JpaRepository<Content, Integer> {

	List<Content> findByName(String cname);
	
	List<Content> findByNameContaining(String key);
	
	List<Content> findAllByOrderByAvgRatingAsc();
	
	List<Content> findAllByOrderByAvgRatingDesc();
	
	List<Content> findByType(ContentType conType);

	List<Content> findByAvgRatingBetween(double minRating, double maxRating);
}

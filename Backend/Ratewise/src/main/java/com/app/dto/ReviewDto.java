package com.app.dto;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.validator.constraints.ru.INN;

import com.app.entity.BaseEntity;
import com.app.entity.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//@Entity
//@Table(name = "review")
//@NoArgsConstructor 
//@Getter 
//@Setter
//@ToString
//@AllArgsConstructor
public class ReviewDto  extends BaseEntity{

	@Column
	private String title;
	@Column(length = 300)
	private String review;
	@Column(scale = 10)
	private double rating;
	@UpdateTimestamp
	private LocalDateTime timestamp;
	
	

	public ReviewDto() {
		// TODO Auto-generated constructor stub
	}

	public ReviewDto(String title, String review, double rating, LocalDateTime timestamp) {
		super();
		this.title = title;
		this.review = review;
		this.rating = rating;
		this.timestamp = timestamp;
	}
	
	

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public LocalDateTime getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = timestamp;
	}

	

	@Override
	public String toString() {
		return "Review [title=" + title + ", review=" + review + ", rating=" + rating + ", timestamp=" + timestamp
				+ "]";
	}
	
	
	
}

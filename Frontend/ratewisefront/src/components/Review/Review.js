import React from 'react';
import "./Review.css"

const Review = (review) => {
  return (
    <div className="review">
      <h2>{review.title}</h2>
      <div className="rating">{review.rating}/5</div>
      <p>{review.review}</p>
    </div>
  );
};

export default Review;

// CSS

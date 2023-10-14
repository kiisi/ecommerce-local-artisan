/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { reviews } from '../../utils/constants';
import './review.scss'


const StarRating = ({ rating }) => {
  const stars = Array.from({ length: rating }, (_, i) => (
    <FaStar key={i} color="#ffc107" />
  ));

  return <div className="star-rating">{stars}</div>;
};
const Review = ({ review }) => {
  return (
    <div className="review">
      <div className="imageC">
      {review.img && (
        <img src={review.img} alt={review.author} className="author-image" />
      )}
      <h3>{review.author}</h3>
      </div>
     
     
      {/* <div className="star-rating">
         {[...review(review.rating)].map((_, index) => (
          <FaStar key={index} color="#ffc107" />
        ))} 
      </div> */}
      <p>{review.content}</p>
      <StarRating rating={review.rating} />
    </div>
  );
};

export default Review;

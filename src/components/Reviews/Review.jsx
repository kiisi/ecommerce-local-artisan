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
      {review.userImage && (
        <img src={review.userImage} alt={review.username} className="author-image" />
      )}
      <h3>{review?.username}</h3>
      </div>
     
     
      {/* <div className="star-rating">
         {[...review(review.rating)].map((_, index) => (
          <FaStar key={index} color="#ffc107" />
        ))} 
      </div> */}
      <p>{review.description}</p>
      <StarRating rating={review.star} />
    </div>
  );
};

export default Review;

import React, { createContext, useState, useEffect } from 'react';
import listReview from '../components/home_page/review/review.js';

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem('reviews');
    return savedReviews ? JSON.parse(savedReviews) : listReview;
  });

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewContext;

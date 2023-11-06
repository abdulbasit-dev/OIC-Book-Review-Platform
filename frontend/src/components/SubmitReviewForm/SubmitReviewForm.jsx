import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import './SubmitReviewForm.css';
import axios from '../../axios';

const SubmitReviewForm = ({setReviews}) => {
  const {id} = useParams();
  const [name, setName] = useState('');
  const [rating, setRating] = useState(1); // Default rating is 1
  const [review, setReview] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const reviewData = {
        book_id: id,
        name,
        rating: parseInt(rating),
        review,
      };

      await axios.post('/reviews', reviewData);
      setReviews(prevReviews => [reviewData, ...prevReviews]);
      alert('Review submitted successfully');

      setName('');
      setRating(1);
      setReview('');
    } catch (error) {
      alert('Error submitting review: ' + error.response.data.message);
    }
  };

  return (
    <div className='book-reviews-form'>
      <h3 className='book-reviews-form-title'>Submit a review </h3>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='nameInput' className='form-label'>
            Name
          </label>
          <input type='text' className='form-control' id='nameInput' value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label htmlFor='ratingInput' className='form-label'>
            Rating
          </label>
          <input type='number' className='form-control' id='ratingInput' value={rating} onChange={e => setRating(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label htmlFor='reviewInput' className='form-label'>
            Review
          </label>
          <textarea className='form-control' id='reviewInput' value={review} onChange={e => setReview(e.target.value)} />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default SubmitReviewForm;

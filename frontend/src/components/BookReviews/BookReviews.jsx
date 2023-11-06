import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Loading from '../Loader/Loader';
import './BookReviews.css';
import axios from '../../axios';
import starImage from '../../images/star.png';
import SubmitReviewForm from '../SubmitReviewForm/SubmitReviewForm';

const BookReviews = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    setLoading(true);
    async function getBookReviews() {
      try {
        const response = await axios.get(`/reviews/${id}`);
        setReviews(response.data.data.reviews);
        setAvgRating(response.data.data.average_rating);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    getBookReviews();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <section className='book-reviews'>
      <div className='container'>
        <div className='book-reviews-header'>
          <h2 className='reviews-title'>Reviews</h2>  
            <p className='reviews-rating-text'>Average Rating: {avgRating}</p>
        </div>
        <div className='book-reviews-content'>
          <div className='book-reviews-info'>
            {reviews.length > 0 ? (
              reviews.map((review,i) => (
                <div key={i} className='review-item'>
                  <div className='reviews-header'>
                    <p className='reviews-name'>{review.name}</p>
                    <div className='reviews-rating'>
                      {[...Array(review.rating)].reverse().map((star, i) => (
                        <img key={i} src={starImage} alt='star' />
                      ))}
                    </div>
                  </div>
                  <p className='reviews-text'>{review.review}</p>
                  <p className='reviews-date'>{review.created_at}</p>
                </div>
              ))
            ) : (
              <p className='no-reviews'>No reviews yet 🥲</p>
            )}
          </div>
        </div>
        <SubmitReviewForm setReviews={setReviews}/>
      </div>
    </section>
  );
};

export default BookReviews;

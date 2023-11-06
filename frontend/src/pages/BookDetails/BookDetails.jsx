import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

import {BookReviews, Loading} from '../../components';
import axios from '../../axios';
import './BookDetails.css';

const BookDetails = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await axios.get(`/books/${id}`);
        setBook(response.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <div>
      <section className='book-details'>
        <div className='container'>
          <button type='button' className='flex flex-c back-btn' onClick={() => navigate('/')}>
            <FaArrowLeft size={22} />
            <span className='fs-18 fw-6'>Go Back</span>
          </button>

          <div className='book-details-content grid'>
            <div className='book-details-img'>
              <img src={book?.cover_image} alt='cover img' />
            </div>
            <div className='book-details-info'>
              <div className='book-details-item title'>
                <span className='fw-6 fs-24'>{book?.title}</span>
              </div>
              <div className='book-details-item description'>
                <span dangerouslySetInnerHTML={{__html: book?.description}}></span>
              </div>
              <div className='book-details-item'>
                <span className='fw-6'>Authors: </span>
                <span className='text-italic'>{book?.authors.map(author => author).join(', ')}</span>
              </div>
              <div className='book-details-item'>
                <span className='fw-6'>Publish Date: </span>
                <span>{book?.publication_year}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookReviews />
    </div>
  );
};

export default BookDetails;

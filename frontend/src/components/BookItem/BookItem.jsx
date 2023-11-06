import React from 'react';
import {Link} from 'react-router-dom';
import './BookItem.css';
import coverImg from '../../images/cover_not_found.jpg';

const BookItem = book => {
  const {cover_image, title, publication_year, id} = book;
  const coverImgSrc = cover_image ? cover_image : coverImg;

  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src={coverImgSrc} alt='cover' />
      </div>
      <div className='book-item-info text-center'>
        <Link to={`/books/${id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{title}</span>
          </div>
        </Link>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{publication_year}</span>
        </div>
      </div>
    </div>
  );
};

export default BookItem;

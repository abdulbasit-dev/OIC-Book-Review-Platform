import React from 'react';
import BookItem from "../BookItem/BookItem";
import "./BookList.css";


const BookList = ({books, resultTitle}) => {
  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {books.map((item, index) => {
            return <BookItem key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BookList
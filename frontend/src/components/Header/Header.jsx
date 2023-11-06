import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

const Header = ({setBooks, setLoading, setResultTitle}) => {
  return (
    <div className='holder'>
      <header className='header'>
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>Discover your next favorite book.</h2>
          <br />
          <p className='header-text fs-18 fw-3'>
            Explore a world of stories, adventures, and knowledge. Find the perfect book that speaks to you.
          </p>
          <SearchForm setBooks={setBooks} setLoading={setLoading} setResultTitle={setResultTitle} />
        </div>
      </header>
    </div>
  );
};

export default Header;

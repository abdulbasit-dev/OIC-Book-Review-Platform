import React, {useRef} from 'react';
import {FaSearch} from 'react-icons/fa';
import './SearchForm.css';
import axios from '../../axios';

const SearchForm = ({setBooks, setLoading, setResultTitle}) => {
  const searchText = useRef('');

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const searchTerm = searchText.current.value;
    const response = await axios.get(`/books/search?q=${searchTerm}`);
    setResultTitle(`Search results for "${searchTerm}"`);
    setLoading(false);
    setBooks(response.data.data);
  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type='text' placeholder='The Lost World ...' ref={searchText} />
              <button type='submit' className='flex flex-c' onClick={handleSubmit}>
                <FaSearch className='text-black' size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;

import React, {useState, useEffect} from 'react';
import axios from '../../axios';
import './SearchFilter.css';

const SearchFilter = ({setBooks, setLoading}) => {
  const [genres, setGenres] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // Default is ascending

  useEffect(() => {
    async function getBookGenres() {
      try {
        const response = await axios.get(`/genres/`);
        setGenres(response.data.data);
      } catch (error) {
        alert('Error fetching genres: ' + error.response.data.message);
      }
    }
    getBookGenres();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      let q = 'q=';

      if (keyword) {
        q += `${keyword}`;
      }

      if (genre) {
        q += `subject:${genre}&`;
      }

      if (publicationYear) {
        q += `publishedDate=${publicationYear}`;
      }

      // Apply sorting if selected
      const sort = sortBy ? `&sort=${sortBy}:${sortOrder}` : '';

      console.log(q + sort);

      const response = await axios.get(`/books/search?${q}${sort}`);
      setBooks(response.data.data);
    } catch (error) {
      alert('Error fetching books: ' + error.response.data.message);
    }

    setLoading(false);
    setKeyword('');
    setGenre('');
    setPublicationYear('');
  };

  return (
    <div>
      <div className='container'>
        <form className='search-filter' onSubmit={handleSubmit}>
          <input
            type='text'
            className='filter__input'
            placeholder='Search for books'
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />

          <select className='filter__input' name='genre' value={genre} onChange={e => setGenre(e.target.value)}>
            <option value=''>Select Genre</option>
            {genres.length > 0 && genres.map((genre, i) => <option key={i}>{genre.name}</option>)}
          </select>

          <input
            type='text'
            className='filter__input'
            placeholder='Publication Year'
            value={publicationYear}
            onChange={e => setPublicationYear(e.target.value)}
          />

          <select className='filter__input' value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value=''>Sort By</option>
            <option value='title'>Title</option>
            <option value='publishedDate'>Publication Year</option>
            <option value='averageRating'>Average Rating</option>
          </select>

          <select className='filter__input' value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
            <option value='asc'>Ascending</option>
            <option value='desc'>Descending</option>
          </select>

          <button type='submit' className='filter__button'>
            Filter
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchFilter;

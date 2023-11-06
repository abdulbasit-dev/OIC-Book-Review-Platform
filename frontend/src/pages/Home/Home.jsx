import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';
import axios from '../../axios';
import {Header, Loading, BookList, SearchFilter} from '../../components';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState('New Releases');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/books');
      setBooks(response.data.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <main>
      <Header setBooks={setBooks} setLoading={setLoading} setResultTitle={setResultTitle} />
      <Outlet />
      <SearchFilter setBooks={setBooks} setLoading={setLoading} />
      {loading ? <Loading /> : <BookList books={books} resultTitle={resultTitle} />}
    </main>
  );
};

export default Home;

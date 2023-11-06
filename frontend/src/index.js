import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppProvider} from './context';
import './index.css';
import Home from './pages/Home/Home';
import BookDetails from './pages/BookDetails/BookDetails';
import {Footer, Navbar} from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/:id' element={<BookDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </AppProvider>
);

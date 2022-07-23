//import React, { Component } from 'react';
import styles from './App.module.css';
import Searchbar from './Searchbar';
import api, { HITS_PER_PAGE } from '../services/pixebay-api';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      api
        .fetchImages(query, page)
        .then(data => {
          if (data.totalHits === 0) {
            toast.error('Not found any image!');
            return;
          }
          setItems(prevItems => [...prevItems, ...data.hits]);
          setTotalPages(Math.ceil(data.totalHits / HITS_PER_PAGE));
        })
        .catch(e => toast.error(e))
        .finally(() => setLoading(false));
    }, 500);
  }, [page, query]);

  const handleSubmit = q => {
    if (q !== query) {
      setQuery(q);
      setItems([]);
      setPage(1);
      setTotalPages(0);
    }
  };

  const loadMoreAvailable = page < totalPages && !loading;

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={handleSubmit} />
      {items.length > 0 && <ImageGallery items={items} page={page} />}
      {loadMoreAvailable && (
        <Button onClick={() => setPage(prevPage => prevPage + 1)} />
      )}
      {loading && <Loader />}
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default App;

import React, { Component } from 'react';
import './App.css';
import Searchbar from './Searchbar';
import api, { HITS_PER_PAGE } from '../services/pixebay-api';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//const HITS_PER_PAGE = 12;

class App extends Component {
  state = {
    query: '',
    items: [],
    page: 1,
    totalPages: 0,
    loading: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ loading: true });
      setTimeout(() => {
        api
          .fetchImages(query, page)
          .then(data => {
            if (data.totalHits === 0) {
              toast.error('Not found any image!');
              return;
            }
            this.setState(({ items }) => ({
              items: [...items, ...data.hits],
              totalPages: Math.ceil(data.totalHits / HITS_PER_PAGE),
            }));
          })
          .catch(e => toast.error(e))
          .finally(() => this.setState({ loading: false }));
      }, 500);
    }
  }

  handleSubmit = query => {
    this.setState({
      query,
      items: [],
      page: 1,
      totalPages: 0,
    });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { items, loading, page, totalPages } = this.state;
    const loadMoreAvailable = page < totalPages && !loading;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        {items.length > 0 && <ImageGallery items={items} page={page} />}
        {loadMoreAvailable && <Button onClick={this.loadMore} />}
        {loading && <Loader />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;

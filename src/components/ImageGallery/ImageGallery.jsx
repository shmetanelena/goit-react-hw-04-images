import './ImageGallery.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Component } from 'react';
import { HITS_PER_PAGE } from '../../services/pixebay-api';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
    page: PropTypes.number.isRequired,
  };

  componentDidMount() {
    this.gallery = document.querySelector('.ImageGallery');
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items !== this.props.items) {
      const firstOnPage =
        this.gallery.children[(this.props.page - 1) * HITS_PER_PAGE];
      if (firstOnPage) {
        window.scrollBy({
          top: firstOnPage.getBoundingClientRect().top - 85,
          behavior: 'smooth',
        });
      }
    }
  }

  render() {
    const { items } = this.props;
    return (
      <ul className="ImageGallery">
        {items.map(item => (
          <ImageGalleryItem key={item.id} item={item} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;

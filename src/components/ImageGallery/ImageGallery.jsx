import './ImageGallery.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Component } from 'react';
import { HITS_PER_PAGE } from '../../services/pixebay-api';

class ImageGallery extends Component {
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

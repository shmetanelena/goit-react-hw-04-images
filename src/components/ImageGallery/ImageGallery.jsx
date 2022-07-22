import './ImageGallery.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { useEffect, useRef } from 'react';
import { HITS_PER_PAGE } from '../../services/pixebay-api';
import PropTypes from 'prop-types';

const ImageGallery = ({ items, page }) => {
  const galleryRef = useRef();

  useEffect(() => {
    const firstOnPage = galleryRef.current.children[(page - 1) * HITS_PER_PAGE];
    if (firstOnPage) {
      window.scrollBy({
        top: firstOnPage.getBoundingClientRect().top - 85,
        behavior: 'smooth',
      });
    }
  }, [items, page]);

  return (
    <ul className="ImageGallery" ref={galleryRef}>
      {items.map(item => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  page: PropTypes.number.isRequired,
};

/*
class _ImageGallery extends Component {
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
*/

export default ImageGallery;

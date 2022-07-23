import styles from './ImageGallery.module.css';
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
    <ul className={styles.image_gallery} ref={galleryRef}>
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

export default ImageGallery;

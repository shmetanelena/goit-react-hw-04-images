import styles from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ImageGalleryItem = ({ item }) => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(prevIsModal => !prevIsModal);
  };

  const { webformatURL, tags, largeImageURL } = item;

  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItem_image}
        onClick={toggleModal}
      />
      {isModal && (
        <Modal src={largeImageURL} alt={tags} onClose={toggleModal} />
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;

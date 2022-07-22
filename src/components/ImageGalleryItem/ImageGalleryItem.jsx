import './ImageGalleryItem.css';
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
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
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

/*
class _ImageGalleryItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    isModal: false,
  };

  toggleModal = () => {
    this.setState(({ isModal }) => ({ isModal: !isModal }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.item;
    const { isModal } = this.state;
    return (
      <li className="ImageGalleryItem">
        <img
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
          onClick={this.toggleModal}
        />
        {isModal && (
          <Modal src={largeImageURL} alt={tags} onClose={this.toggleModal} />
        )}
      </li>
    );
  }
}
*/

export default ImageGalleryItem;

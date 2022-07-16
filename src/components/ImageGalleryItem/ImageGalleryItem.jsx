import { Component } from 'react';
import './ImageGalleryItem.css';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
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

export default ImageGalleryItem;

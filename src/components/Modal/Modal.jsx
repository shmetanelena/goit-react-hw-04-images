import { Component } from 'react';
import './Modal.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    stc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickOverlay = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props;
    return (
      <div className="Overlay" onClick={this.handleClickOverlay}>
        <div className="Modal">
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;

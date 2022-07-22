import './Modal.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Modal = ({ src, alt, onClose }) => {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClickOverlay = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return (
    <div className="Overlay" onClick={handleClickOverlay}>
      <div className="Modal">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

/*
class _Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
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

*/

export default Modal;

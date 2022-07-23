import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
  <button type="button" className={styles.button} onClick={onClick}>
    Load more
  </button>
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

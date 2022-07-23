import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.Loader}>
    <ThreeDots color="gray" height={80} width={80} />
  </div>
);

export default Loader;

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeDots } from 'react-loader-spinner';
import './Loader.css';

const Loader = () => (
  <div className="Loader">
    <ThreeDots color="gray" height={80} width={80} />
  </div>
);

export default Loader;

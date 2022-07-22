import './Searchbar.css';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Enter the name');
      return;
    }
    onSubmit(query);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <ImSearch size={25} />
        </button>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={e => setQuery(e.currentTarget.value.toLowerCase())}
          value={query}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

/*
class _Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleQueryChanged = e => {
    const query = e.currentTarget.value.toLowerCase();
    this.setState({ query });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    if (query.trim() === '') {
      toast.error('Enter the name');
      return;
    }
    this.props.onSubmit(query);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            
            <ImSearch size={25} />
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQueryChanged}
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}
*/

export default Searchbar;

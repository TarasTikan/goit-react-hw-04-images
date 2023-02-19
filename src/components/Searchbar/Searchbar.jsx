import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Search,
  SearchForm,
  SearchButton,
  SearchButtonLabel,
  SearchInput,
} from './Searchbar.styled';
export function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  return (
    <Search>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchButton>

        <SearchInput
          onChange={handleQueryChange}
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Search>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

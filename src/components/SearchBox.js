import React from 'react';
import PropTypes from 'prop-types';

import {
  FormGroup,
  FormControl,
  InputGroup,
  Glyphicon,
} from 'react-bootstrap';

const SearchBox = ({ searchValue, updateSearch }) => (
  <FormGroup>
    <InputGroup>
      <InputGroup.Addon>
        <Glyphicon glyph="search" />
      </InputGroup.Addon>
      <FormControl type="text" value={searchValue} onChange={updateSearch} placeholder="Type to search..." />
    </InputGroup>
  </FormGroup>
);

SearchBox.propTypes = {
  searchValue: PropTypes.string.isRequired,
  updateSearch: PropTypes.func.isRequired,
};

export default SearchBox;

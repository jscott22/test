import React from 'react';
import PropTypes from 'prop-types';

import {
  DropdownButton,
  MenuItem,
  FormGroup,
  Radio,
} from 'react-bootstrap';

const SortDropdown = ({ activeSort, updateSort }) => (
  <FormGroup style={{ paddingRight: '10px' }}>
    <DropdownButton id="sort-dropdown" bsStyle="default" noCaret title="Sort by...">
      <MenuItem header>Sort by</MenuItem>
      <MenuItem eventKey="1" onClick={() => updateSort('EPISODE')}>
        <Radio checked={activeSort === 'EPISODE'} readOnly>Episode</Radio>
      </MenuItem>
      <MenuItem onClick={() => updateSort('YEAR')} eventKey="2">
        <Radio checked={activeSort === 'YEAR'} readOnly>Year</Radio>
      </MenuItem>
    </DropdownButton>
  </FormGroup>
);

SortDropdown.propTypes = {
  activeSort: PropTypes.string.isRequired,
  updateSort: PropTypes.func.isRequired,
};

export default SortDropdown;

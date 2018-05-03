import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  Navbar,
} from 'react-bootstrap';

import SearchBox from '../components/SearchBox';
import SortDropdown from '../components/SortDropdown';

import updateSearch from '../actions/search';
import updateSort from '../actions/sort';


class Header extends PureComponent {
  updateSort = (sortType) => {
    this.props.updateSort(sortType);
  }

  updateSearch = ({ target: { value } }) => {
    this.props.updateSearch(value);
  }

  render() {
    const { search, sort } = this.props;

    return (
      <Navbar fluid fixedTop>
        <Navbar.Form>
          <SortDropdown activeSort={sort} updateSort={this.updateSort} />
          <SearchBox searchValue={search} updateSearch={this.updateSearch} />
        </Navbar.Form>
      </Navbar>
    );
  }
}

Header.propTypes = {
  search: PropTypes.string.isRequired,
  updateSearch: PropTypes.func.isRequired,
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
};

const mapStateToProps = ({ search, sort }) => ({ search, sort });

const actions = {
  updateSearch,
  updateSort,
};

export default connect(mapStateToProps, actions)(Header);

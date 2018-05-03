import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MovieDescription from '../components/MovieDescription';

const MoviePlaceholder = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const SelectedMovie = ({ selection }) => (
  selection === null
    ? <MoviePlaceholder><h4>No movie selected</h4></MoviePlaceholder>
    : <MovieDescription movie={selection} />
);

export const mapStateToProps = ({ movies: { movies, selectedMovieId } }) => ({
  selection: selectedMovieId ? movies[selectedMovieId] : null,
});

SelectedMovie.propTypes = {
  selection: PropTypes.object,
};

SelectedMovie.defaultProps = {
  selection: null,
};

export default connect(mapStateToProps)(SelectedMovie);

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import sortBy from 'lodash/sortBy';

import { ListGroup } from 'react-bootstrap';

import { fetchMovies, selectMovie } from '../actions/movies';

import MovieListItem from '../components/MoveListItem';

const Placeholder = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;


class MovieList extends PureComponent {
  componentDidMount() {
    this.props.fetchMovies();
  }

  filterMovies = () => {
    const {
      search, movies, movieIds,
    } = this.props;

    let filtered;

    if (!search) {
      filtered = movieIds;
    } else {
      const regEx = new RegExp(search, 'i');

      filtered = movieIds.filter(id => regEx.test(movies[id].fields.title));
    }

    return filtered;
  }

  sortMovies = (filteredMovies) => {
    const { movies, sort } = this.props;

    return sortBy(filteredMovies, (id) => {
      const { fields } = movies[id];
      return sort === 'EPISODE' ? fields.episode_id : fields.release_date;
    });
  }

  selectMovie = (movieId) => {
    this.props.selectMovie(movieId);
  }

  renderMovieItems = () => {
    const { movies } = this.props;

    const filtered = this.filterMovies();
    const sorted = this.sortMovies(filtered);

    return sorted.map(id => (
      <MovieListItem key={id} selectMovie={this.selectMovie} movie={movies[id]} />
    ));
  }

  render() {
    const {
      fetching, movieIds, error,
    } = this.props;

    if (fetching) return <Placeholder><h4>Loading...</h4></Placeholder>;
    if (error) return <Placeholder><h4>Error {error}</h4></Placeholder>;

    if (!movieIds.length) return 'No movies to show :(';

    return (
      <ListGroup>
        {this.renderMovieItems()}
      </ListGroup>
    );
  }
}

const mapStateToProps = ({ movies, search, sort }) => ({
  ...movies,
  search,
  sort,
});

const actions = {
  fetchMovies,
  selectMovie,
};

MovieList.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  selectMovie: PropTypes.func.isRequired,
  error: PropTypes.string,
  movies: PropTypes.object.isRequired,
  movieIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  fetching: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};

MovieList.defaultProps = {
  error: '',
};

export default connect(mapStateToProps, actions)(MovieList);

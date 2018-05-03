import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ListGroupItem } from 'react-bootstrap';

class MovieListItem extends PureComponent {
  handleClick = () => {
    this.props.selectMovie(this.props.movie.id);
  }
  render() {
    const { movie: { fields } } = this.props;
    return (
      <ListGroupItem onClick={this.handleClick}>
        <span>EPISODE {fields.episode_id}</span>
        <span>{fields.title}</span>
        <span>{fields.release_date}</span>
      </ListGroupItem>

    );
  }
}

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired,
  selectMovie: PropTypes.func.isRequired,
};

export default MovieListItem;

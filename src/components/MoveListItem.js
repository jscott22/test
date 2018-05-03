import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ListGroupItem } from 'react-bootstrap';

const ItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

const Episode = styled.span`
  font-size: 10px;
  font-weight: light;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-right: 15px;
`;

const Title = styled.span`
  font-weight: semi-bold;
  font-size: 14px;
`;


class MovieListItem extends PureComponent {
  handleClick = () => {
    this.props.selectMovie(this.props.movie.id);
  }
  render() {
    const { movie: { fields } } = this.props;
    return (
      <ListGroupItem onClick={this.handleClick}>
        <ItemContent>
          <TitleWrapper>
            <Episode>Episode {fields.episode_id}</Episode>
            <Title>{fields.title}</Title>
          </TitleWrapper>
          <span>{fields.release_date}</span>
        </ItemContent>
      </ListGroupItem>

    );
  }
}

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired,
  selectMovie: PropTypes.func.isRequired,
};

export default MovieListItem;

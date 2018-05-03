import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DescriptionWrapper = styled.div`
  padding: 0 20px;
`;

const MovieDescription = ({ movie: { fields } }) => (
  <DescriptionWrapper>
    <h3>{fields.title}</h3>
    <p>{fields.opening_crawl}</p>
    <p>Directed by: {fields.director}</p>
  </DescriptionWrapper>
);

MovieDescription.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieDescription;

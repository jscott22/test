import React from 'react';
import styled from 'styled-components';

import Header from './containers/Header';
import MovieList from './containers/MovieList';
import SelectedMovie from './containers/SelectedMovie';

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Container = styled.div`
  height: 100%;
  display: flex
  padding-top: 51px;
`;

const Column = styled.div`
  max-height: 100%;
  overflow: auto;
  width: 100%;

  &:first-of-type {
    border-right: 1px solid darkgrey;
  }
`;

const App = () => (
  <AppWrapper>
    <Header />
    <Container>
      <Column>
        <MovieList />
      </Column>
      <Column>
        <SelectedMovie />
      </Column>
    </Container>
  </AppWrapper>
);
export default App;

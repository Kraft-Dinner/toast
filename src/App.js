import React from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';
import Notification from './Notification';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Content />
      </Container>
      <Notification />
    </>
  );
}

export default App;

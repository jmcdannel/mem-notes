import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';

function Header() {
  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <h3><strong>mem</strong>Notes</h3>
        </Container>
    </AppBar>
  );
}

export default Header;

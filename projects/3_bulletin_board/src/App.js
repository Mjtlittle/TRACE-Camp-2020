import React from 'react';
import './App.css';

import { Button, Container } from 'react-bootstrap';

import BulletinNavbar from './components/BulletinNavbar';
import PersonPosts from './components/PersonPosts';

function App() {

  const names = ['Aaron','Devin','Josh','Rohit'];

  return (
    <div className="App">
      <BulletinNavbar title='Resource Bulletin Board' names={names}/>
      <Container>
        <PersonPosts />
      </Container>
    </div>
  );
}

export default App;

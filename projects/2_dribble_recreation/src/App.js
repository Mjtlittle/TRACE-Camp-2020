import React from 'react';
import './App.css';

import Page from './components/Page';

function App() {
  return (
    <div className="App">
      <Page />
      <div className='App-credits'>
          Remade by: <a href='https://jlittle.dev/' target='_blank' rel='noopener noreferrer'>Joshua Little</a>
          <br /> 
          Reference: <a href='https://dribbble.com/shots/11580352-Travel-App-Design-Concept' target='_blank' rel='noopener noreferrer'>Purrweb UI on Dribble</a>
        </div>
    </div>
  );
}

export default App;

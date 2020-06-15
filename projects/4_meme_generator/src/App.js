import React, { useState, useEffect } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Button } from 'react-bootstrap';

import MemeCreator from './components/MemeCreator';
import MemeCollection from './components/MemeCollection';

import defaultMemes from './defaultMemes';

function App() {

  const [ memes, setMemes ] = useState(defaultMemes);

  const addMeme = (meme) => {
    const newMemes = memes.concat(meme);
    setMemes(newMemes);
    console.log(JSON.stringify(newMemes));
  }

  const deleteMeme = (key) => {
    setMemes(memes.filter(m => m.key !== key));
  }

  // load from local storage on start if exists
  useEffect(() => {
    
    // if local storage does not exist
    if (typeof(Storage) === 'undefined')
      setMemes(defaultMemes);

    // check if there is anything in local storage
    const rawStorage = window.localStorage.getItem('memes');
    if (rawStorage !== null) {
      setMemes(JSON.parse(rawStorage));
    } else {
      setMemes(defaultMemes);
    }

  }, []);
  
  // save all memes to local storage on memes change
  useEffect(() => {
    window.localStorage.setItem('memes', JSON.stringify(memes));
  }, [memes]);

  const [ showEditor, setShowEditor ] = useState(false);
  
  return (
    <div className="App">
      <Container>

        <div className='py-5 mt-4 text-center'>
          <h1>Meme Collection</h1>
          <p className='lead'>Make and store memes for future appreciation. You can also download and remove stored memes by hovering over each meme.</p>
          <Button onClick={() => setShowEditor(true)}>New Meme</Button>
        </div>

        <hr />

        <MemeCreator 
          show={showEditor}
          handleClose={() => setShowEditor(false)}
          onSaveMeme={addMeme}
        />
        <MemeCollection memes={memes} deleteCallback={deleteMeme}/>
      </Container>
    </div>
  );
}

export default App;

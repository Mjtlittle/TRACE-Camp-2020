import React from 'react';
import './App.css';
import MemePanel from './components/MemePanel';

function App() {
  return (
    <div className="App">
      <MemePanel src='https://unsplash.com/photos/e5DJ7pDT1e4/download?force=true&w=512'/>
      <MemePanel src='https://unsplash.com/photos/e5DJ7pDT1e4/download?force=true&w=512'/>
      <MemePanel src='https://unsplash.com/photos/e5DJ7pDT1e4/download?force=true&w=512'/>
      <MemePanel src='https://unsplash.com/photos/e5DJ7pDT1e4/download?force=true&w=512'/>
      <MemePanel src='https://unsplash.com/photos/e5DJ7pDT1e4/download?force=true&w=512'/>
    </div>
  );
}

export default App;

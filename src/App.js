import React, { useState, useEffect } from 'react';
import './App.css';
import { data } from './data';
import Contents from './Components/Contents';
import DirectoryWindow from './Components/DirectoryWindow';

function App() {
  const [showingWindow, setShowingWindow] = useState(false);
  const [currentDirectory, setCurrentDirectory] = useState(null);

  return (
    <div className="App">
      <Contents contents={data} setCurrentDir={setCurrentDirectory} setShowingWindow={setShowingWindow} />
      {showingWindow && currentDirectory &&
        <DirectoryWindow dir={currentDirectory} setCurrentDir={setCurrentDirectory} setShowingWindow={setShowingWindow} />
      }
    </div>
  );
}

export default App;

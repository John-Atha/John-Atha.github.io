import React, { useState, useEffect } from 'react';
import './App.css';
import { data } from './data';
import Contents from './Components/Contents';
import DirectoryWindow from './Components/DirectoryWindow';

function App() {
  const [showingWindow, setShowingWindow] = useState(false);
  const [currentDirectory, setCurrentDirectory] = useState(null);
  const [openDirectories, setOpenDirectories] = useState([]);

  const addDir = (dir) => {
    if (openDirectories.includes(dir)) {
      setCurrentDirectory(dir);
    }
    else {
      setOpenDirectories(openDirectories.concat(dir));
    }
    if (!showingWindow) setShowingWindow(true);
  }

  const removeDir = (dir) => {
    setOpenDirectories(openDirectories.filter((value) => { return value !== dir }))
  }

  const closeAll = () => {
    setOpenDirectories([]);
    setShowingWindow(false);
  }

  useEffect(() => {
    if (openDirectories.length) {
      setCurrentDirectory(openDirectories[openDirectories.length-1]);
    }
    else {
      setShowingWindow(false);
      setCurrentDirectory(null);
    }
  }, [openDirectories])

  return (
    <div className="App">
      <Contents
        contents={data}
        setShowingWindow={setShowingWindow}
        addDir={addDir}
        removeDir={removeDir}
        openDirectories={openDirectories}
        currentDirectory={currentDirectory} />
      {showingWindow && currentDirectory &&
        <DirectoryWindow
          dir={currentDirectory}
          addDir={addDir}
          setShowingWindow={setShowingWindow}
          addDir={addDir}
          removeDir={removeDir}
          openDirectories={openDirectories}
          closeAll={closeAll} />
      }
    </div>
  );
}

export default App;

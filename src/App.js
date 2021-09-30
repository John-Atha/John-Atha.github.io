import React, { useState, useEffect } from 'react';
import './App.css';
import { data } from './data';
import Contents from './Components/Contents';
import DirectoryWindow from './Components/DirectoryWindow';

function App() {
  const [showingWindow, setShowingWindow] = useState(false);
  const [currentDirectory, setCurrentDirectory] = useState(null);
  const [openDirectories, setOpenDirectories] = useState([]);
  const [lastDirAction, setLastDirAction] = useState(null);

  const addDir = (dir) => {
    setLastDirAction('addittion');
    if (openDirectories.includes(dir)) {
      setCurrentDirectory(dir);
    }
    else {
      setOpenDirectories(openDirectories.concat(dir));
    }
    if (!showingWindow) setShowingWindow(true);
  }

  const removeDir = (dir) => {
    setLastDirAction('removal');
    setOpenDirectories(openDirectories.filter((value) => { return value !== dir }))
  }

  const closeAll = () => {
    setOpenDirectories([]);
    setShowingWindow(false);
  }

  useEffect(() => {
    if (openDirectories.length) {
      // I add a new dir, so I set this one as current...
      if (lastDirAction==='addittion') {
        setCurrentDirectory(openDirectories[openDirectories.length-1]);
      }
      // I remove the current dir, so I do not have to set another as current...
      else if (!openDirectories.includes(currentDirectory)) {
        setCurrentDirectory(openDirectories[openDirectories.length-1]);
        console.log('I enable the last one.')
      }
    }
    else if (!openDirectories.length) {
      setShowingWindow(false);
      setCurrentDirectory(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          removeDir={removeDir}
          openDirectories={openDirectories}
          closeAll={closeAll} />
      }
    </div>
  );
}

export default App;

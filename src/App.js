import React, { useState, useEffect } from 'react';
import './App.css';
import { data } from './data';
import Contents from './Components/Contents';
import DirectoryWindow from './Components/DirectoryWindow';
import DocumentWindow from './Components/DocumentWindow';

function App() {

  const [showingDirWindow, setShowingDirWindow] = useState(false);
  const [currentDirectory, setCurrentDirectory] = useState(null);
  const [openDirectories, setOpenDirectories] = useState([]);
  const [lastDirAction, setLastDirAction] = useState(null);

  const [showingDocWindow, setShowingDocWindow] = useState(false);
  const [currentDoc, setCurrentDoc] = useState(null);
  const [openDocs, setOpenDocs] = useState([]);
  const [lastDocAction, setLastDocAction] = useState(null);

  const addDir = (dir) => {
    setLastDirAction('addittion');
    if (openDirectories.includes(dir)) {
      setCurrentDirectory(dir);
    }
    else {
      setOpenDirectories(openDirectories.concat(dir));
    }
    if (!showingDirWindow) setShowingDirWindow(true);
  }

  const addDoc = (doc) => {
    setLastDocAction('addittion');
    if (openDocs.includes(doc)) {
      setCurrentDoc(doc);
    }
    else {
      setOpenDocs(openDocs.concat(doc));
    }
    if (!showingDocWindow) setShowingDocWindow(true);
  }

  const removeDir = (dir) => {
    setLastDirAction('removal');
    setOpenDirectories(openDirectories.filter((value) => { return value !== dir }))
  }

  const removeDoc = (doc) => {
    setLastDocAction('removal');
    setOpenDocs(openDocs.filter((value) => { return value !== doc }));
  }

  const closeAllDirs = () => {
    setOpenDirectories([]);
    setShowingDirWindow(false);
  }

  const closeAllDocs = () => { 
    setOpenDocs([]);
    setShowingDocWindow(false);
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
        console.log('I enable the last dir.')
      }
    }
    else {
      setShowingDirWindow(false);
      setCurrentDirectory(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openDirectories])

  useEffect(() => { 
    if (openDocs.length) {
      if (lastDocAction==='addittion') {
        setCurrentDoc(openDocs[openDocs.length-1]);
      }
      else if (!openDocs.includes(currentDoc)) {
        setCurrentDoc(openDocs[openDocs.length-1]);
        console.log('I enable the last doc.')
      }
    }
    else {
      setShowingDocWindow(false);
      setCurrentDoc(null);
    }
  }, [openDocs])

  return (
    <div className="App">
      <Contents
        contents={data}
        setShowingDirWindow={setShowingDirWindow}
        addDir={addDir}
        removeDir={removeDir}
        openDirectories={openDirectories}
        currentDirectory={currentDirectory}
        addDoc={addDoc} />
      {showingDirWindow && currentDirectory &&
        <DirectoryWindow
          dir={currentDirectory}
          setShowingDirWindow={setShowingDirWindow}
          addDir={addDir}
          removeDir={removeDir}
          openDirectories={openDirectories}
          closeAllDirs={closeAllDirs}
          addDoc={addDoc} />
      }
      {showingDocWindow && currentDoc &&
        <DocumentWindow 
          doc={currentDoc}
          setShowingDocWindow={setShowingDocWindow}
          addDoc={addDoc}
          removeDoc={removeDoc}
          openDocs={openDocs}
          closeAllDocs={closeAllDocs} />
      }
    </div>
  );
}

export default App;

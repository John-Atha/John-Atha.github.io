import React, { useState, useEffect } from 'react';
import './App.css';
import { data, dir0 } from './data';
import { ShortBio, BioHeader, BioDescription, BioDetail } from './Components/styles';
import Contents from './Components/Contents';
import DirectoryWindow from './Components/DirectoryWindow';
import DocumentWindow from './Components/DocumentWindow';
import GameWindow from './Components/GameWindow';
import TerminalWindow from './Components/TerminalWindow';
import MyNavbar from './Components/MyNavbar';
import TopNavbar from './Components/TopNavbar';

function App() {

  const [showingDirWindow, setShowingDirWindow] = useState(false);
  const [showingDocWindow, setShowingDocWindow] = useState(false);
  const [showingGameWindow, setShowingGameWindow] = useState(false);
  const [showingTerminalWindow, setShowingTerminalWindow] = useState(false);
  const [showingNow, setShowingNow] = useState([]);

  const [currentDirectory, setCurrentDirectory] = useState(null);
  const [openDirectories, setOpenDirectories] = useState([]);
  const [lastDirAction, setLastDirAction] = useState(null);

  const [currentDoc, setCurrentDoc] = useState(null);
  const [openDocs, setOpenDocs] = useState([]);
  const [lastDocAction, setLastDocAction] = useState(null);

  const [playing, setPlaying] = useState(false);
  const [game, setGame] = useState(null);

  const [isTerminalRunning, setIsTerminalRunning] = useState(false);
  const [terminalCurrentDir, setTerminalCurrentDir] = useState(dir0);

  const [isDirFullScreen, setIsDirFullScreen] = useState(false);
  const [isDocFullScreen, setIsDocFullScreen] = useState(false);
  const [isGameFullScreen, setIsGameFullScreen] = useState(false);
  const [isTerminalFullScreen, setIsTerminalFullScreen] = useState(false);

  const addToShowingNow = (str) => {
    // add 'dir' to the stack
    const stack = showingNow.filter(value => { return value!==str });
    stack.push(str);
    setShowingNow(stack);
  }

  const removeFromShowingNow = (str) => {
    setShowingNow(showingNow.filter(value => { return value!==str }));
  }

  const showDirWindow = () => {
    addToShowingNow('dir');
    setShowingDirWindow(true);
  }

  const showDocWindow = () => {
    addToShowingNow('doc');
    setShowingDocWindow(true);
  }

  const addDir = (dir) => {
    setLastDirAction('addittion');
    if (openDirectories.includes(dir)) {
      setCurrentDirectory(dir);
    }
    else {
      setOpenDirectories(openDirectories.concat(dir));
    }
    showDirWindow();
  }

  const addDoc = (doc) => {
    setLastDocAction('addittion');
    if (openDocs.includes(doc)) {
      setCurrentDoc(doc);
    }
    else {
      setOpenDocs(openDocs.concat(doc));
    }
    showDocWindow();
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
    setIsDirFullScreen(false);
    removeFromShowingNow('dir');
  }

  const closeAllDocs = () => { 
    setOpenDocs([]);
    setShowingDocWindow(false);
    setIsDocFullScreen(false);
    removeFromShowingNow('doc');
  }

  const stopPlaying = () => {
    setPlaying(false);
    setGame(null);
    setShowingGameWindow(false);
    removeFromShowingNow('game');
  }

  const closeTerminal = () => {
    setIsTerminalRunning(false);
    setShowingTerminalWindow(false);
    removeFromShowingNow('terminal');
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openDocs])

  return (
    <div className="App">
      <ShortBio>
        <BioHeader>Hello, I'm John.</BioHeader>
        <BioDescription>A 22 years old junior software developer from Athens, Greece,</BioDescription>
        <BioDetail>trying to choose between web and AI development.</BioDetail>

      </ShortBio>
      <Contents
        contents={data}
        case='desktop'
        setShowingDirWindow={setShowingDirWindow}
        addDir={addDir}
        removeDir={removeDir}
        openDirectories={openDirectories}
        currentDirectory={currentDirectory}
        addDoc={addDoc}
      />
      {showingDirWindow && currentDirectory &&
        <DirectoryWindow
          zIndex={showingNow.length ? (showingNow[showingNow.length-1]==='dir' ? 2 : 1) : 1}
          dir={currentDirectory}
          setShowingDirWindow={setShowingDirWindow}
          addToShowingNow={addToShowingNow}
          removeFromShowingNow={removeFromShowingNow}
          addDir={addDir}
          removeDir={removeDir}
          openDirectories={openDirectories}
          closeAllDirs={closeAllDirs}
          addDoc={addDoc}
          isDirFullScreen={isDirFullScreen}
          setIsDirFullScreen={setIsDirFullScreen}
        />
      }
      {showingDocWindow && currentDoc &&
        <DocumentWindow
          zIndex={showingNow.length ? (showingNow[showingNow.length-1]==='doc' ? 2 : 1) : 1}
          doc={currentDoc}
          setShowingDocWindow={setShowingDocWindow}
          addToShowingNow={addToShowingNow}
          removeFromShowingNow={removeFromShowingNow}
          addDoc={addDoc}
          removeDoc={removeDoc}
          openDocs={openDocs}
          closeAllDocs={closeAllDocs}
          isDocFullScreen={isDocFullScreen}
          setIsDocFullScreen={setIsDocFullScreen}
        />
      }
      {showingGameWindow && playing &&
        <GameWindow
          zIndex={showingNow.length ? (showingNow[showingNow.length-1]==='game' ? 2 : 1) : 1}
          setShowingGameWindow={setShowingGameWindow}
          addToShowingNow={addToShowingNow}
          removeFromShowingNow={removeFromShowingNow}
          isGameFullScreen={isGameFullScreen}
          setIsGameFullScreen={setIsGameFullScreen}
          setPlaying={setPlaying}
          stopPlaying={stopPlaying}
          game={game}
          setGame={setGame}
        />
      }
      {showingTerminalWindow && isTerminalRunning &&
        <TerminalWindow
          zIndex={showingNow.length ? (showingNow[showingNow.length-1]==='teminal' ? 2 : 1) : 1}
          setShowingTerminalWindow={setShowingTerminalWindow}
          addToShowingNow={addToShowingNow}
          removeFromShowingNow={removeFromShowingNow}
          isTerminalFullScreen={isTerminalFullScreen}
          setIsTerminalFullScreen={setIsTerminalFullScreen}
          setIsTerminalRunning={setIsTerminalRunning}
          closeTerminal={closeTerminal}
          currentDir={terminalCurrentDir}
          setCurrentDir={setTerminalCurrentDir}
          addDoc={addDoc}
          addDir={addDir}
          setPlaying={setPlaying}
          playing={playing}
          setShowingGameWindow={setShowingGameWindow}
        />
      }
      <MyNavbar
        openDocs={openDocs}
        openDirectories={openDirectories}
        setShowingDocWindow={setShowingDocWindow}
        setShowingDirWindow={setShowingDirWindow}
        setShowingGameWindow={setShowingGameWindow}
        setShowingTerminalWindow={setShowingTerminalWindow}
        addToShowingNow={addToShowingNow}
        removeFromShowingNow={removeFromShowingNow}
        showingNow={showingNow}
        showingDocWindow={showingDocWindow}
        showingDirWindow={showingDirWindow}
        showingGameWindow={showingGameWindow}
        showingTerminalWindow={showingTerminalWindow}
        currentDirectory={currentDirectory}
        currentDoc={currentDoc}
        playing={playing}
        setPlaying={setPlaying}
        game={game}
        isTerminalRunning={isTerminalRunning}
        setIsTerminalRunning={setIsTerminalRunning}
      />
      <TopNavbar />
    </div>
  );
}

export default App;

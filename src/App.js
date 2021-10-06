import React, { useState } from 'react';
import './App.css';
import Desktop from './Pages/Desktop';
import Splash from './Pages/Splash';

function App() {

  const [visited, setVisited] = useState(sessionStorage.getItem('visited'));

  const update = () => {
    setVisited(sessionStorage.getItem('visited'));
  }

  if (visited) {
    return (
      <Desktop />
    )
  }
  else {
    return (
      <Splash update={update} />
    )
  }

}

export default App;

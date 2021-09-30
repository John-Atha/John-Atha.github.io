import React from 'react';
import './App.css';
import { data } from './data';
import Contents from './Components/Contents';

function App() {

  return (
    <div className="App">
      <Contents contents={data} />
    </div>
  );
}

export default App;

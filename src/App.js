import React, { useState } from 'react';
import BlockGenerator from './components/BlockGenerator';
import BlockDisplay from './components/BlockDisplay';
import {v4 as uuid} from 'uuid';

import './App.css';


function App() {
  const [state, setState] = useState([
    // {
    //   color: "blue"
    // },
    // {
    //   color: "black"
    // },
    // {
    //   color: "gray"
    // },
    // {
    //   color: "gray"
    // },
    // {
    //   color: "blue"
    // }
    ]);

  // Add Block
  const addBlock = (color) => {
    console.log("you created a block")
    const newBlock = {
      id: uuid(),
      color: color
    }
    setState([...state, newBlock]);
  }

  return (
    <div className="App">
      <BlockGenerator addBlock={ addBlock }/>
      <BlockDisplay blocks={ state }/>
    </div>
  );
}

export default App;

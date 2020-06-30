import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header.js';
import About from './components/pages/About.js';
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
    <Router>
      <div className="App">
        <Header />
        <Route exact path='/' render={props => (
          <React.Fragment>
            <h3>Please enter your favorite color.</h3>
            <BlockGenerator addBlock={ addBlock }/>
            <BlockDisplay blocks={ state }/>
          </React.Fragment>
        )} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  );
}

export default App;

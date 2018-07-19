import React, { Component } from 'react';
import '../App.css';
import PigIndex from './PigIndex.js';
import Nav from './Nav';
import hogs from '../porkers_data';
const hogsArray = hogs

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < PigIndex hogsArray={hogsArray} />

      </div>
    )
  }
}

export default App;

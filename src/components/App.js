import React, {
  Component
} from 'react';
import '../App.css';
import PigIndex from './PigIndex.js';
import Nav from './Nav';
import hogs from '../porkers_data';
const hogsArray = hogs

class App extends Component {

  state = {
    selectedPig: null
  }

  choosePig = (hog) => {
    this.setState((previousState) => {

      return {
        selectedPig: hog
      }

    }, () => console.log("inside app", this.state))
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < PigIndex hogsArray={hogsArray} choosePig = { this.choosePig } />

      </div>
    )
  }
}

export default App;
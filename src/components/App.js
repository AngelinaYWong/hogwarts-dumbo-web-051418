import React, {
  Component
} from 'react';
import '../App.css';
import PigIndex from './PigIndex.js';
import Nav from './Nav';
import hogs from '../porkers_data';
import Pig from './Pig.js';
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

  resetPig = () => {
    this.setState((previousState) => {

      return {
        selectedPig: null
      }

    }, () => console.log("inside app", this.state))
  }

  render() {
    return (
      <div className="App">
          < Nav />
          {
            this.state.selectedPig ? < Pig hog={this.state.selectedPig} resetPig={this.resetPig}/> :
            < PigIndex hogsArray={hogsArray} choosePig = { this.choosePig } />
          }

      </div>
    )
  }
}

export default App;
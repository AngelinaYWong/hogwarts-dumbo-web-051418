import PigTile from "./PigTile.js";
import React from "react";

class PigIndex extends React.Component {

  renderTile = () => {
    return this.props.hogsArray.map(hog => {
      return <PigTile hog = {
        hog
      }
      />
    })

  }

  render() {

    return (
      <div className="ui grid container">
        { this.renderTile() }


      </div>
    )
  }
}
export default PigIndex;
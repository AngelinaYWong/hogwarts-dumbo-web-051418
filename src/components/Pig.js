import React from "react";

class Pig extends React.Component {

  resetAllPigs = () => {
    this.props.resetPig()
  }

  render() {
    return (
      <div className="maxPigTile" onClick={
        this.resetAllPigs
      }>
        <img src={require(`../hog-imgs/${this.props.hog.name.replace(/\s/g,'_').toLowerCase()}.jpg`)}></img>
        <h3>{ this.props.hog.name }</h3>
        <p>Specialty: { this.props.hog.specialty }</p>
        <p>Greased?: { `${this.props.hog.greased}` }</p>
        <p>weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog['Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <p>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</p>

      </div>
    )
  }

}
export default Pig;
import React from "react";

class PigTile extends React.Component {

  render() {
    return (
      <div className="ui eight wide column pigTile">
        <img src={require(`../hog-imgs/${this.props.hog.name.replace(/\s/g,'_').toLowerCase()}.jpg`)}
        alt="this.props.name"/>
        <p>{ this.props.hog.name }</p>
      </div>
    )
  }

}

export default PigTile;
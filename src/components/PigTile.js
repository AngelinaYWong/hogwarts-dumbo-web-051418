import React from "react";

class PigTile extends React.Component {

  handleClick = () => {
    this.props.choosePig(this.props.hog)
  }

  render() {
    return (
      <div className="ui eight wide column pigTile" onClick={ this.handleClick }>
        <img src={require(`../hog-imgs/${this.props.hog.name.replace(/\s/g,'_').toLowerCase()}.jpg`)}
        alt="this.props.name"/>
        <p>{ this.props.hog.name }</p>
      </div>

    )
  }

}

export default PigTile;
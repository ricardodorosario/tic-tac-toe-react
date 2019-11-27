import React from "react";

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      piece: null,
      id: props.id
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.restart != this.props.restart && this.props.restart) {
      this.setState(state => ({
        ...state,
        piece: null
      }));
    }
  }

  onClick() {
    const piece = this.props.onClick(this.state.id, this.state.piece);
    if (piece === null) {
      return;
    }
    this.setState(state => ({
      ...state,
      piece
    }));
  }

  render() {
    return (
      <div id={this.state.id} className={`tile`} onClick={this.onClick}>
        <div className={`${this.state.piece}`}></div>
      </div>
    );
  }
}

export default Tile;

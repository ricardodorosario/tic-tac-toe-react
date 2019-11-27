import React from "react";
import Tile from "./Tile";

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const tiles = [];
    for (let i = 0; i < 9; i++) {
      tiles.push(
        <Tile
          key={i}
          id={i}
          restart={this.props.restart}
          onClick={this.props.onClick}
        />
      );
    }
    return <div className="table">{tiles}</div>;
  }
}

export default Table;

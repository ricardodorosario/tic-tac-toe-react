import React from "react";
import Table from "./Table";
import CounterWinsBar from "./CounterWinsBar";
import * as appActions from "./AppActions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      restart: false,
      whoPlay: "X",
      xCells: [],
      oCells: [],
      xWins: 0,
      oWins: 0
    };
  }

  render() {
    return (
      <div className="app">
        <CounterWinsBar xWins={this.state.xWins} oWins={this.state.oWins} />
        <div className="whoPlay">{this.state.whoPlay} plays</div>
        <Table
          restart={this.state.restart}
          onClick={(id, piece) => appActions.onClick(this, id, piece)}
        />
        <div className="buttons">
          <button className="button" onClick={() => appActions.restart(this)}>
            Restart Game
          </button>
          <button
            className="button"
            onClick={() => appActions.restartScoreboard(this)}
          >
            Restart Scoreboard
          </button>
        </div>
        <div className="footer">
          <h4>Contribute:</h4>
          <div>
            <a href="https://github.com/ricardodorosario/tic-tac-toe-react">
              <img
                src="https://img.shields.io/github/package-json/v/ricardodorosario/tic-tac-toe-react?style=flat-square"
                alt="github"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

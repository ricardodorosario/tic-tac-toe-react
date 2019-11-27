function calcWhoWin(component) {
  const { xWins, oWins, xCells, oCells } = component.state;
  const possibleWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  let xWon = false;
  let oWon = false;
  possibleWins.forEach(possibleWin => {
    if (
      xCells.includes(possibleWin[0]) &&
      xCells.includes(possibleWin[1]) &&
      xCells.includes(possibleWin[2])
    ) {
      xWon = true;
    }
    if (
      oCells.includes(possibleWin[0]) &&
      oCells.includes(possibleWin[1]) &&
      oCells.includes(possibleWin[2])
    ) {
      oWon = true;
    }
  });
  //
  component.setState(state => ({
    ...state,
    xWins: xWon ? xWins + 1 : xWins,
    oWins: oWon ? oWins + 1 : oWins,
    finished: xWon || oWon ? true : false
  }));
}

export function restart(component) {
  component.setState(state => ({
    ...state,
    restart: true,
    finished: false,
    xCells: [],
    oCells: []
  }));
}

export function restartScoreboard(component) {
  component.setState(state => ({
    ...state,
    restart: true,
    finished: false,
    xCells: [],
    oCells: [],
    xWins: 0,
    oWins: 0
  }));
}

export function onClick(component, id, piece) {
  const { whoPlay, xCells, oCells, finished } = component.state;

  if (finished || piece != null) {
    return null;
  }

  if (whoPlay === "X") {
    xCells.push(id);
  } else {
    oCells.push(id);
  }

  component.setState(state => ({
    ...state,
    whoPlay: whoPlay === "X" ? "O" : "X",
    xCells,
    oCells,
    restart: false
  }));

  calcWhoWin(component);
  return whoPlay;
}

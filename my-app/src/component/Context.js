import React, { useState } from 'react';
import ButtonForXorO from './game/field/lineForFueld/ButtonForXorO';
import Won from './game/field/lineForFueld/Won';
import DataCells from '../DataCells';
import PlayerCpu from './PlayerCpu';

export const Context = React.createContext({
  selectedFirst: "X",
  setSelectedFirst:() => {},
  cellList: null,
  setCellList: () => {},
  nextOorX: null,
  setNextOorX: () => {},
  scoreList: null,
  setScoreList:()=>{},
  newGame: null,
  setNewGame: ()=>{},
  playerVs: null,
  setNewGame: ()=>{},
  playerNumber: 1,
  setPlayerNumber: ()=> {}

});

export const ContextProvider = ({ children }) => {
  let cells = DataCells;
  let scores = {X: 0, O: 0, deadHeat: 0}
  if (localStorage?.CellList) {
  } else {
    localStorage.CellList = JSON.stringify(cells);
  }
  if (localStorage?.NextOorX) {
  } else {
    localStorage.setItem('NextOorX', 'X');
  }
  if (localStorage?.Scores) {
} else {
  localStorage.Scores = JSON.stringify(scores);
}
if (localStorage?.NewGame) {
} else {
  localStorage.setItem('NewGame', 'true');
}
if (localStorage?.PlayerVs) {
} else {
  localStorage.setItem('PlayerVs', 'player');
}
if (localStorage?.PlayerNumber) {
} else {
  localStorage.setItem('PlayerNumber', 1);
}

  const [selectedFirst, setSelectedFirst] = useState("X")
  const [cellList, setCellList] = useState(cells);
  const [nextOorX, setNextOorX] = useState(selectedFirst);
  const [scoreList, setScoreList] = useState(scores);
  const [newGame, setNewGame] = useState(true);
  const [playerVs, setPlayerVs] = useState(null)
  const [playerNumber, setPlayerNumber] = useState(1)

  // setNextOorX(selectedFirst)


  localStorage.Scores = JSON.stringify(scoreList);
  localStorage.PlayerVs = playerVs;
  localStorage.NextOorX = nextOorX;
  localStorage.PlayerNumber = playerNumber;
  localStorage.NewGame = newGame;

function updateCellList(cellsList){
localStorage.CellList=JSON.stringify(cellsList)
setCellList(cellsList);
}


// PlayerCpu(cellList, playerNumber, playerVs, newGame)

// tapOnCell(PlayerCpu(cellList, playerNumber, playerVs, newGame))


  function tapOnCell(id) {
    let updatedCellList
    updatedCellList = ButtonForXorO(id, cellList, nextOorX, setNextOorX, playerNumber, setPlayerNumber, newGame)
    updateCellList(updatedCellList);
    Won(updatedCellList, scoreList, setScoreList, newGame, setNewGame)
    if(playerVs==="cpu" && newGame===true){
      PlayerCpu(updatedCellList)
    // updateCellList(updatedCellList);
    // Won(updatedCellList, scoreList, setScoreList, newGame, setNewGame)
  
      }
  }

  localStorage.setItem('NextOorX', nextOorX);

  return (
    <Context.Provider
      value={{
        cellList,
        setCellList,
        nextOorX,
        setNextOorX,
        tapOnCell,
        scoreList,
        updateCellList,
        setNewGame,
        selectedFirst,
        setSelectedFirst,
        setPlayerVs,
        playerNumber,
        setPlayerNumber
      }}
    >
      {children}
    </Context.Provider>
  );
};

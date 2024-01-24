import React, { useState } from 'react';
import ButtonForXorO from './game/field/lineForFueld/ButtonForXorO';
import Won from './game/field/lineForFueld/Won';
import DataCells from '../DataCells';
// import Score from './field/lineForFueld.js/Score';
// import { v4 as uuidv4 } from 'uuid';

export const Context = React.createContext({
  cellList: null,
  setCellList: () => {},
  nextOorX: 'X',
  setNextOorX: () => {},
  scoreList: null,
  setScoreList:()=>{},
  newGame: null,
  setNewGame: ()=>{},
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

  const [cellList, setCellList] = useState(cells);
  const [nextOorX, setNextOorX] = useState('X');
  const [scoreList, setScoreList] = useState(scores);
  const [newGame, setNewGame] = useState(true);

  localStorage.Scores = JSON.stringify(scoreList);
  localStorage.NewGame = newGame;

function updateCellList(cellsList){
localStorage.CellList=JSON.stringify(cellsList)
setCellList(cellsList);
}




  function tapOnCell(id) {
    let updatedCellList = ButtonForXorO(id, cellList, nextOorX, setNextOorX, newGame)
    updateCellList(updatedCellList);

    Won(updatedCellList, scoreList, setScoreList, newGame, setNewGame)
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
        setNewGame
      }}
    >
      {children}
    </Context.Provider>
  );
};

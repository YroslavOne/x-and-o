import React, { useState } from 'react';
import ButtonForXorO from './field/lineForFueld/ButtonForXorO';
import Won from './field/lineForFueld/Won';
// import Score from './field/lineForFueld.js/Score';
// import { v4 as uuidv4 } from 'uuid';

export const Context = React.createContext({
  cellList: null,
  setCellList: () => {},
  nextOorX: 'X',
  setNextOorX: () => {},
  scoreList: null,
  setScoreList:()=>{},
});

export const ContextProvider = ({ children }) => {
  let cells = [
    {
      id: 1,
      value: null,
      filled: false,
    },
    {
      id: 2,
      value: null,
      filled: false,
    },
    {
      id: 3,
      value: null,
      filled: false,
    },
    {
      id: 4,
      value: null,
      filled: false,
    },
    {
      id: 5,
      value: null,
      filled: false,
    },
    {
      id: 6,
      value: null,
      filled: false,
    },
    {
      id: 7,
      value: null,
      filled: false,
    },
    {
      id: 8,
      value: null,
      filled: false,
    },
    {
      id: 9,
      value: null,
      filled: false,
    },
  ];
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

  const [cellList, setCellList] = useState(cells);
  const [nextOorX, setNextOorX] = useState('X');
  const [scoreList, setScoreList] = useState(scores);

function updateCellList(cellsList){
localStorage.CellList=JSON.stringify(cellsList)
setCellList(cellsList);
}




  function tapOnCell(id) {
    let updatedCellList = ButtonForXorO(id, cellList, nextOorX, setNextOorX)
    updateCellList(updatedCellList);
    Won(JSON.parse(localStorage.CellList))
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
        updateCellList
      }}
    >
      {children}
    </Context.Provider>
  );
};

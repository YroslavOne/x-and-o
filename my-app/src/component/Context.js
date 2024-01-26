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
  const [nextOorX, setNextOorX] = useState("X");
  const [scoreList, setScoreList] = useState(scores);
  const [newGame, setNewGame] = useState(true);
  const [playerVs, setPlayerVs] = useState(null)
  const [playerNumber, setPlayerNumber] = useState(1)
  const [vBot, setVBot] = useState(1)
  // setNextOorX(selectedFirst)


  localStorage.Scores = JSON.stringify(scoreList);
  localStorage.PlayerVs = playerVs;
  localStorage.NextOorX = nextOorX;
  localStorage.PlayerNumber = playerNumber;
  localStorage.NewGame = newGame;
localStorage.CellList=JSON.stringify(cellList)


// function updateCellList(cellsList){
//   console.log(cellsList)
// localStorage.CellList=JSON.stringify(cellsList)
// setCellList(cellsList);
// }


function changeOandX(valueOorX){
  let valueXandO
  if(valueOorX==="X"){
    valueXandO ="O" 
    setNextOorX(valueXandO)
  
    
} else {
    valueXandO ="X"
    setNextOorX(valueXandO)
    
}
return valueXandO
}
function changePlayNumber(){
  if(playerNumber===1){
    setPlayerNumber(2)
} else {
    setPlayerNumber(1)
}
}

if (selectedFirst==="O"){
  setVBot(2)
  console.log(vBot)
}


  function tapOnCell(id) {
    let updatedCellList
    let thisNewGame
    if(newGame===true){
    updatedCellList = ButtonForXorO(id, cellList, nextOorX, newGame)
    changePlayNumber()
    let nextSumbolForCell = changeOandX(nextOorX)
    if(updatedCellList!==null){
      setCellList(updatedCellList)
      thisNewGame = Won(updatedCellList, scoreList, setScoreList, newGame, setNewGame)
    }
    
    if(playerVs==="cpu" && thisNewGame===true && updatedCellList!==null){
      setTimeout(setCellList(PlayerCpu(updatedCellList, nextSumbolForCell)), 1000)
      thisNewGame = Won(updatedCellList, scoreList, setScoreList, newGame, setNewGame)
    

    changeOandX(nextSumbolForCell)
      }
}}

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

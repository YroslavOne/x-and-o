import React, { useState } from 'react';
import ButtonForXorO from './game/field/lineForFueld/ButtonForXorO';
import Won from './game/field/lineForFueld/Won';
import DataCells from '../DataCells';
import PlayerCpu from './PlayerCpu';

export const Context = React.createContext({
  selectedFirst: 'X',
  setSelectedFirst: () => {},
  cellList: null,
  setCellList: () => {},
  nextOorX: null,
  setNextOorX: () => {},
  scoreList: null,
  setScoreList: () => {},
  newGame: null,
  setNewGame: () => {},
  playerVs: null,
  setPlayerVs: () => {},
  playerNumber: 1,
  setPlayerNumber: () => {},
  whoPlaysBot: null,
  setWhoPlaysBot: () => {},
});

export const ContextProvider = ({ children }) => {
  let cells = DataCells;
  let scores = { X: 0, O: 0, deadHeat: 0 };
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

  const [selectedFirst, setSelectedFirst] = useState('X');
  const [cellList, setCellList] = useState(cells);
  const [nextOorX, setNextOorX] = useState('X');
  const [scoreList, setScoreList] = useState(scores);
  const [newGame, setNewGame] = useState(true);
  const [playerVs, setPlayerVs] = useState(null);
  const [whoPlaysBot, setWhoPlaysBot] = useState(null);

  localStorage.setItem('WhoPlaysBot', whoPlaysBot);
  localStorage.Scores = JSON.stringify(scoreList);
  localStorage.PlayerVs = playerVs;
  localStorage.NextOorX = nextOorX;
  localStorage.NewGame = newGame;
  localStorage.CellList = JSON.stringify(cellList);

  function playAgain(cellsList) {
    if (whoPlaysBot === 'X') {
      console.log('whoPlaysBot');
      botGoesFirst(cellsList);
      setNextOorX('O');
      setNewGame(true);
    } else {
      console.log(whoPlaysBot);

      setNextOorX('X');
      setNewGame(true);
    }
  }

  function botGoesFirst(cellsList) {
    setCellList(PlayerCpu(cellsList, 'X', 'X'));
  }

  function tapOnCell(id) {
    let updatedCellList;
    let thisNewGame;
    if (newGame === true) {
      updatedCellList = ButtonForXorO(
        id,
        cellList,
        nextOorX,
        setNextOorX,
        newGame,
        playerVs
      );
      if (updatedCellList !== null) {
        setCellList(updatedCellList);
        console.log(
          Won(
            updatedCellList,
            scoreList,
            setScoreList,
            newGame,
            setNewGame,
            setCellList
          )
        );
        thisNewGame = Won(
          updatedCellList,
          scoreList,
          setScoreList,
          newGame,
          setNewGame,
          setCellList
        );
      }
      console.log(thisNewGame);

      if (
        playerVs === 'cpu' &&
        thisNewGame === true &&
        updatedCellList !== null
      ) {
        updatedCellList = PlayerCpu(updatedCellList, whoPlaysBot);
        setCellList(updatedCellList);
        console.log(
          Won(updatedCellList, scoreList, setScoreList, newGame, setNewGame)
        );
        thisNewGame = Won(
          updatedCellList,
          scoreList,
          setScoreList,
          newGame,
          setNewGame
        );
      }
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
        setNewGame,
        selectedFirst,
        setSelectedFirst,
        setPlayerVs,
        playerVs,
        whoPlaysBot,
        setWhoPlaysBot,
        botGoesFirst,
        playAgain,
      }}
    >
      {children}
    </Context.Provider>
  );
};

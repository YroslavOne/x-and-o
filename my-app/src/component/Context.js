import React, { useState } from "react";
import ButtonForXorO from "./game/field/lineForFueld/ButtonForXorO";
import Won from "./game/field/lineForFueld/Won";
import DataCells from "../DataCells";
import { v4 as uuidv4 } from 'uuid';

import PlayerCpu from "./PlayerCpu";

export const Context = React.createContext({
  selectedFirst: "X",
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
  
  const cells = DataCells.slice()
  // [
  //   {
  //     id: 1,
  //     value: null,
  //     filled: false,
  //     key: uuidv4(),
  //     background: 'rgb(31,53,64)',
  //   },
  //   {
  //     id: 2,
  //     value: null,
  //     filled: false,
  //     key: uuidv4(),
  //     background: 'rgb(31,53,64)',
  //   },
  //   {
  //     id: 3,
  //     value: null,
  //     filled: false,
  //     key: uuidv4(),
  //     background: 'rgb(31,53,64)',
  //   },
  //   {
  //     id: 4,
  //     value: null,
  //     filled: false,
  //     key: uuidv4(),
  //     background: 'rgb(31,53,64)',
  //   },
  //   {
  //     id: 5,
  //     value: null,
  //     filled: false,
  //     key: uuidv4(),
  //     background: 'rgb(31,53,64)',
  //   },
  //   {
  //     id: 6,
  //     value: null,
  //     filled: false,
  //     key: uuidv4(),
  //     background: 'rgb(31,53,64)',
  //   },
  //   {
  //     id: 7,
  //     value: null,
  //     filled: false,
  //     key: uuidv4(),
  //     background: 'rgb(31,53,64)',
  //   },
  //   {
  //     id: 8,
  //     value: null,
  //     filled: false,
  //     key: uuidv4(),
  //     background: 'rgb(31,53,64)',
  //   },
  //   {
  //     id: 9,
  //     value: null,
  //     filled: false,
  //     key: uuidv4(),
  //     background: 'rgb(31,53,64)',
  //   },
  // ];
  let scores = { X: 0, O: 0, deadHeat: 0 };
  if (localStorage?.CellList) {
  } else {
    localStorage.CellList = JSON.stringify(cells);
  }
  if (localStorage?.NextOorX) {
  } else {
    localStorage.setItem("NextOorX", "X");
  }
  if (localStorage?.Scores) {
  } else {
    localStorage.Scores = JSON.stringify(scores);
  }
  if (localStorage?.NewGame) {
  } else {
    localStorage.setItem("NewGame", "true");
  }
  if (localStorage?.PlayerVs) {
  } else {
    localStorage.setItem("PlayerVs", "player");
  }

  const [selectedFirst, setSelectedFirst] = useState("X");
  const [cellList, setCellList] = useState(cells);
  const [nextOorX, setNextOorX] = useState("X");
  const [scoreList, setScoreList] = useState(scores);
  const [newGame, setNewGame] = useState(true);
  const [playerVs, setPlayerVs] = useState(null);
  const [whoPlaysBot, setWhoPlaysBot] = useState(null);

  localStorage.setItem("WhoPlaysBot", whoPlaysBot);
  localStorage.Scores = JSON.stringify(scoreList);
  localStorage.PlayerVs = playerVs;
  localStorage.NextOorX = nextOorX;
  localStorage.NewGame = newGame;
  localStorage.CellList = JSON.stringify(cellList);

  function playAgain(cellsList) {
    if (whoPlaysBot === "X") {
      console.log(DataCells)
      botGoesFirst(cellsList);
      setNextOorX("O");
      setNewGame(true);
    } else {
      console.log(whoPlaysBot);
      console.log(DataCells)
      setNextOorX("X");
      setNewGame(true);
    }
  }

  function botGoesFirst(cellsList) {
    setCellList(PlayerCpu(cellsList, "X", setCellList));
  }

  function tapOnCell(id) {
    let updatedCellList;
    let thisNewGame;
    if (newGame === true) {
      updatedCellList = (ButtonForXorO(
        id,
        cellList,
        nextOorX,
        setNextOorX,
        newGame,
        playerVs
      )).slice(0);
      if (updatedCellList !== null) {
        setCellList(updatedCellList);
        thisNewGame = Won(updatedCellList, scoreList, setScoreList);
        setNewGame(thisNewGame);
      }

      if (
        playerVs === "cpu" &&
        thisNewGame === true &&
        updatedCellList !== null
      ) {
        setCellList (PlayerCpu(
          updatedCellList,
          whoPlaysBot,
          setCellList
        ));
        // setCellList(updatedCellList);
        thisNewGame = Won(updatedCellList, scoreList, setScoreList, newGame);
        setNewGame(thisNewGame);
      }
    }
  }

  localStorage.setItem("NextOorX", nextOorX);

  return (
    <Context.Provider
      value={{
        tapOnCell,
        nextOorX,
        playAgain,
        setCellList,
        scoreList,
        whoPlaysBot,
        playerVs,
        cellList,
        selectedFirst,
        setSelectedFirst,
        setWhoPlaysBot,
        botGoesFirst,
        setNextOorX,
        setPlayerVs,
      }}
    >
      {children}
    </Context.Provider>
  );
};

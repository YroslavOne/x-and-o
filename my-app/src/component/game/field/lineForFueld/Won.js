import WinningData from '../../../../WinningData';

function Won(
  cellList,
  scoreList,
  setScoreList,
  newGame,
  setNewGame,
  setCellList
) {
  let filterCellListFilledFalse = cellList.filter(
    (filterFilledFalse) => filterFilledFalse.filled === false
  );

  let thisNewGame = true;
  let indexWin = [];
  let emptyObject = [];

  function victoryLine(idWinner) {
    let updateCellList = cellList;
    updateCellList[idWinner[0] - 1].background = 'rgb(179,21,27)';
    updateCellList[idWinner[1] - 1].background = 'rgb(179,21,27)';
    updateCellList[idWinner[2] - 1].background = 'rgb(179,21,27)';
  }
  function score(winner) {
    if (newGame === true) {
      if (winner === 'X') {
        let valueX = scoreList.X + 1;
        setScoreList({
          X: valueX,
          O: scoreList.O,
          deadHeat: scoreList.deadHeat,
        });
        thisNewGame = false;
        setNewGame(false);
      } else {
        if (winner === 'O') {
          let valueO = scoreList.O + 1;
          setScoreList({
            X: scoreList.X,
            O: valueO,
            deadHeat: scoreList.deadHeat,
          });
          thisNewGame = false;
          setNewGame(false);
        } else {
          let valueDeadHeat = scoreList.deadHeat + 1;
          setScoreList({
            X: scoreList.X,
            O: scoreList.O,
            deadHeat: valueDeadHeat,
          });

          thisNewGame = false;
          setNewGame(false);
        }
      }
    }
  }

  let indexForOutput = 0;
  let winnerValue;
  let protectionTriggered = false;
  WinningData.forEach((objWinningData) => {
    let coincidencesForX = 0;
    let coincidencesForO = 0;
    objWinningData.forEach((idWinningData) => {
      let matchChecking = false;

      cellList.forEach((objCellList) => {
        if (objCellList.id === idWinningData) {
          if (objCellList.value === 'X') {
            coincidencesForX = coincidencesForX + 1;
            matchChecking = true;
            winnerValue = 'X';
          } else {
            if (objCellList.value === 'O') {
              coincidencesForO = coincidencesForO + 1;
              matchChecking = true;
              winnerValue = 'O';
            }
          }
        }
      });

      if (matchChecking === true) {
        indexForOutput = idWinningData - 1;
      }
    });

    if (
      (coincidencesForO === 3 || coincidencesForX === 3) &&
      protectionTriggered === false
    ) {
      victoryLine(objWinningData);
      score(winnerValue);
      protectionTriggered = true;
    }
  });

  if (
    protectionTriggered === false &&
    filterCellListFilledFalse[0] === undefined
  ) {
    score('deadHeat');
    protectionTriggered = true;
  }
  return thisNewGame;
}
export default Won;

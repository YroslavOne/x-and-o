import WinningData from "../../../../WinningData";

function Won(cellList, scoreList, setScoreList, setNewGame) {
  let filterCellListFilledFalse = cellList.filter(
    (filterFilledFalse) => filterFilledFalse.filled === false
  );

  let thisNewGame = true;

  function victoryLine(idWinner) {
    let updateCellList = Array.from(cellList);
    updateCellList[idWinner[0] - 1].background = "rgb(179,21,27)";
    updateCellList[idWinner[1] - 1].background = "rgb(179,21,27)";
    updateCellList[idWinner[2] - 1].background = "rgb(179,21,27)";
  }

  function score(winner) {
    const newScoreList = { ...scoreList };

    newScoreList[winner]++;
    console.log(newScoreList);
    setScoreList(newScoreList);

    thisNewGame = false;
  }

  let winnerValue;
  let protectionTriggered = false;
  WinningData.forEach((objWinningData) => {
    let coincidencesForX = 0;
    let coincidencesForO = 0;
    objWinningData.forEach((idWinningData) => {
      cellList.forEach((objCellList) => {
        if (objCellList.id === idWinningData) {
          if (objCellList.value === "X") {
            coincidencesForX = coincidencesForX + 1;
            winnerValue = "X";
          } else if (objCellList.value === "O") {
            coincidencesForO = coincidencesForO + 1;
            winnerValue = "O";
          }
        }
      });
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
    score("deadHeat");
    protectionTriggered = true;
  }
  return thisNewGame;
}
export default Won;

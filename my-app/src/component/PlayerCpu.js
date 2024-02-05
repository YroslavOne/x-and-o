import WinningData from "./../WinningData";
import { v4 as uuidv4 } from "uuid";

function PlayerCpu(cellListForCpu, whoPlaysBot) {
  let villain = whoPlaysBot === "O" ? "X" : "O";
  let goodSoul = whoPlaysBot;
  let updatedCellList = [];

  let filterCellsList = cellListForCpu.filter(
    (filterCellList) => filterCellList.value !== null
  );
  let filterOnlyGoodSoul = cellListForCpu.filter(
    (filterCellList) => filterCellList.value === goodSoul
  );
  let filterOnlyVillain = cellListForCpu.filter(
    (filterCellList) => filterCellList.value === villain
  );

  if (filterCellsList.length !== 0) {
    if (filterCellsList.length === 1) {
      if (filterCellsList[0].id !== 5) {
        updateCellList(4);
      } else {
        updateCellList(8);
      }
    } else if (filterCellsList.length >= 2) {
      choiceOfOption();
    }
  } else {
    updateCellList(4);
  }

  function choiceOfOption() {
    let protectionTriggered = false;
    protectionTriggered = forwardToVictory();
    if (protectionTriggered === false) {
      protectionTriggered = defendsHimself();
      if (protectionTriggered === false) {
        protectionTriggered = attack();
        if (protectionTriggered === false) {
          protectionTriggered = justMove();
        }
      }
    }
  }

  function forwardToVictory() {
    let indexForOutput = 0;
    let protectionTriggered = false;

    WinningData.forEach((objWinningData) => {
      let coincidencesForX = 0;
      let coincidencesForO = 0;

      objWinningData.forEach((idWinningData) => {
        let matchChecking = false;

        filterOnlyVillain.forEach((objFilterOnlyVillain) => {
          if (idWinningData === objFilterOnlyVillain.id) {
            coincidencesForX = coincidencesForX + 1;
          }
        });

        filterOnlyGoodSoul.forEach((objFilterOnlyGoodSoul) => {
          if (idWinningData === objFilterOnlyGoodSoul.id) {
            coincidencesForO = coincidencesForO + 1;
            matchChecking = true;
          }
        });

        if (matchChecking === false) {
          indexForOutput = idWinningData - 1;
        }
      });

      if (
        coincidencesForO === 2 &&
        coincidencesForX === 0 &&
        protectionTriggered === false
      ) {
        updateCellList(indexForOutput);
        protectionTriggered = true;
        return protectionTriggered;
      }
    });
    return protectionTriggered;
  }

  function defendsHimself() {
    let indexForOutput = 0;
    let protectionTriggered = false;

    WinningData.forEach((objWinningData) => {
      let coincidencesForX = 0;
      let coincidencesForO = 0;

      objWinningData.forEach((idWinningData) => {
        let matchChecking = false;

        filterOnlyVillain.forEach((objFilterOnlyVillain) => {
          if (idWinningData === objFilterOnlyVillain.id) {
            coincidencesForX = coincidencesForX + 1;
            matchChecking = true;
          }
        });

        filterOnlyGoodSoul.forEach((objFilterOnlyGoodSoul) => {
          if (idWinningData === objFilterOnlyGoodSoul.id) {
            coincidencesForO = coincidencesForO + 1;
          }
        });

        if (matchChecking === false) {
          indexForOutput = idWinningData - 1;
        }
      });

      if (
        coincidencesForO !== 1 &&
        coincidencesForX === 2 &&
        protectionTriggered === false
      ) {
        updateCellList(indexForOutput);
        protectionTriggered = true;
        return protectionTriggered;
      }
    });
    return protectionTriggered;
  }

  function attack() {
    let protectionTriggered = false;
    let indexForOutput = 0;

    WinningData.forEach((objWinningData) => {
      let coincidencesForX = 0;
      let coincidencesForO = 0;

      objWinningData.forEach((idWinningData) => {
        let matchChecking = false;

        filterOnlyGoodSoul.forEach((objFilterOnlyGoodSoul) => {
          if (idWinningData === objFilterOnlyGoodSoul.id) {
            coincidencesForO = coincidencesForO + 1;
            matchChecking = true;
          }
        });

        filterOnlyVillain.forEach((objFilterOnlyVillain) => {
          if (idWinningData === objFilterOnlyVillain.id) {
            coincidencesForX = coincidencesForX + 1;
          }
        });

        if (matchChecking === false) {
          indexForOutput = idWinningData - 1;
        }
      });

      if (
        coincidencesForX === 0 &&
        coincidencesForO >= 1 &&
        protectionTriggered !== true
      ) {
        updateCellList(indexForOutput);
        protectionTriggered = true;
        return protectionTriggered;
      }
    });
    return protectionTriggered;
  }

  function justMove() {
    let protectionTriggered = false;

    cellListForCpu.map((objCellList) => {
      if (objCellList.filled === false && protectionTriggered === false) {
        updateCellList(objCellList.id - 1);
        protectionTriggered = true;
      }
    });

    return protectionTriggered;
  }

  function updateCellList(index) {
    cellListForCpu.forEach((objAllCell) => {
      if (objAllCell.id === Number(index + 1)) {
        updatedCellList.push({
          id: objAllCell.id,
          value: whoPlaysBot,
          filled: true,
          background: "rgb(31,53,64)",
          key: uuidv4(),
        });
      } else {
        updatedCellList.push(objAllCell);
      }
    });
  }

  return updatedCellList;
}
export default PlayerCpu;

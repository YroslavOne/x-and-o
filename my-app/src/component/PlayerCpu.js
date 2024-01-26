import WinningData from './../WinningData';
import { v4 as uuidv4 } from 'uuid';

// import { useContext } from "react"
// import { Context } from "./Context"
function PlayerCpu(cellList, nextOorX) {
    let villain = "X"
    let goodSoul = "O"
  let filterCellsList = cellList.filter(
    (filterCellList) => filterCellList.value !== null
  );
  let updatedCellList;
  let filterOnlyGoodSoul = cellList.filter(
    (filterCellList) => filterCellList.value === goodSoul
  );
  let filterOnlyVillain = cellList.filter(
    (filterCellList) => filterCellList.value === villain
  );

  function updateCellList(index) {
    updatedCellList = cellList;


    updatedCellList[index].filled = true;
    updatedCellList[index].value = nextOorX;
    updatedCellList[index].key=uuidv4()
  }

  if (filterCellsList.length <= 1) {
    if (filterCellsList[0].id !== 5) {
      updateCellList(4);
    } else {
      updateCellList(8);
    }
  } else {
    if (filterCellsList.length <= 3) {
      // console.log("3 клетка")
      choiceOfOption();
    } else {
      if (filterCellsList.length >= 4) {
        choiceOfOption()
        // console.log('5 клетка');
      } 
    }
  }

  function choiceOfOption() {
    let protectionTriggered = false
    protectionTriggered = forwardToVictory()
    if(protectionTriggered===false){
    protectionTriggered = defendsHimself()
    if(protectionTriggered===false){
        console.log(protectionTriggered)
        protectionTriggered = attack()
    }
    } 
    // console.log(protectionTriggered)


    
  }



  function defendsHimself(){
    let indexForOutput = 0;
    let protectionTriggered = false
    WinningData.map((objWinningData) => {
        let coincidencesForX = 0;
        let coincidencesForO = 0;
        objWinningData.map((idWinningData) => {
          let matchChecking = false;
  
          filterOnlyVillain.map((objFilterOnlyVillain) => {
            if (idWinningData === objFilterOnlyVillain.id) {
              coincidencesForX = coincidencesForX + 1;
              matchChecking = true;
            }
          });
          filterOnlyGoodSoul.map((objFilterOnlyGoodSoul) => {
            if (idWinningData === objFilterOnlyGoodSoul.id) {
              coincidencesForO = +1;
            }
          });
  
          if (matchChecking === false) {
            indexForOutput = idWinningData - 1;
          }
        });
        if (coincidencesForO !== 1 && coincidencesForX === 2 && protectionTriggered===false) {
            updateCellList(indexForOutput)
            protectionTriggered=true
          return  protectionTriggered;

        }
      });
    //   console.log("hi")
    // protectionTriggered=true
      return protectionTriggered;
  }


  function attack(){
    let protectionTriggered = false
    let indexForOutput = 0;
    WinningData.map((objWinningData) =>{
        let coincidencesForX = 0;
        let coincidencesForO = 0;
  objWinningData.map((idWinningData) => {
    let matchChecking = false;

    filterOnlyGoodSoul.map((objFilterOnlyGoodSoul) => {
        if (idWinningData === objFilterOnlyGoodSoul.id) {
          coincidencesForO = +1;
          matchChecking = true;
        }
      });
    filterOnlyVillain.map((objFilterOnlyVillain) => {
        if (idWinningData === objFilterOnlyVillain.id) {
          coincidencesForX = coincidencesForX + 1;
        }
        });
        if (matchChecking === false) {
            indexForOutput = idWinningData - 1;
          }
      });
      if (coincidencesForX === 0 && coincidencesForO >= 1 && protectionTriggered!==true) {
        updateCellList(indexForOutput)
        console.log("chekinattack")
        protectionTriggered = true
        return protectionTriggered;
      }
    })
    return protectionTriggered;
  }
  // if(filterOnliO[0].id===5){
  
  function forwardToVictory(){
    let indexForOutput = 0;
    let protectionTriggered = false
    WinningData.map((objWinningData) => {
        let coincidencesForX = 0;
        let coincidencesForO = 0;
        objWinningData.map((idWinningData) => {
          let matchChecking = false;
  
          filterOnlyVillain.map((objFilterOnlyVillain) => {
            if (idWinningData === objFilterOnlyVillain.id) {
              coincidencesForX = coincidencesForX + 1;
            }
          });
          filterOnlyGoodSoul.map((objFilterOnlyGoodSoul) => {
            if (idWinningData === objFilterOnlyGoodSoul.id) {
              coincidencesForO = +1;
              matchChecking = true;

            }
          });
  
          if (matchChecking === false) {
            indexForOutput = idWinningData - 1;
          }
        });
        if (coincidencesForO === 2 && coincidencesForX === 0 && protectionTriggered===false) {
            updateCellList(indexForOutput)
            protectionTriggered=true
            console.log("you?")
          return  protectionTriggered;

        }
      });
      return protectionTriggered;
  }

  

  return updatedCellList;
}
export default PlayerCpu;

import WinningData from './../WinningData';
// import { useContext } from "react"
// import { Context } from "./Context"
function PlayerCpu(cellList, nextOorX) {
  let filterCellsList = cellList.filter(
    (filterCellList) => filterCellList.value !== null
  );
  let updatedCellList;
  let filterOnlyO = cellList.filter(
    (filterCellList) => filterCellList.value === 'O'
  );
  let filterOnlyX = cellList.filter(
    (filterCellList) => filterCellList.value === 'X'
  );

  function updateCellList(index) {
    updatedCellList = cellList;

    updatedCellList[index].value = nextOorX;
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
      defend();
    } else {
      if (filterCellsList.length <= 5) {
        console.log('5 клетка');
      } else {
        if (filterCellsList.length <= 5) {
          console.log('7 клетка');
        }
      }
    }
  }

  function defend() {
    let indexForOutput = -1;
    WinningData.map((objWinningData) => {
      let coincidencesForX = 0;
      let coincidencesForO = 0;
      objWinningData.map((idWinningData) => {
        let matchChecking = false;

        filterOnlyX.map((objFilterOnlyX) => {
          if (idWinningData === objFilterOnlyX.id) {
            coincidencesForX = coincidencesForX + 1;
            console.log(objFilterOnlyX.id);
            matchChecking = true;
          }
        });
        filterOnlyO.map((objFilterOnlyO) => {
          if (idWinningData === objFilterOnlyO.id) {
            coincidencesForO = +1;
            console.log(objFilterOnlyO.id);
          }
        });

        if (matchChecking === false) {
          indexForOutput = idWinningData - 1;
        }
      });
      if (coincidencesForO !== 1 && coincidencesForX === 2) {
        return updateCellList(indexForOutput);
        console.log('chek');
      } else {
        if (coincidencesForO === 1 && coincidencesForX === 2) {
          return updateCellList(8);
        }
      }
      // objWinningData.map((idWinningData) => {
      //   if (coincidencesForX === 2) {
      //     filterOnlyO.map((objFilterOnlyO) => {
      //       if (objFilterOnlyO.id === idWinningData) {
      //         coincidencesForO = 1;
      //         coincidencesForX = 0;
      //       }
      //     });
      //     if (coincidencesForO === 0) {
      //       updateCellList(indexForOutput);
      //       // console.log(indexForOutput)
      //       coincidencesForX = 0;
      //     }
      //   } else {
      //     if (coincidencesForX === 3) {
      //       console.log('All 3x');
      //     }
      //   }
      // });
      // if (coincidencesForX === 1) {
      //   console.log('нету победных комбинаций, переходим в нападение');
      // }
    });

    // if (indexForOutput === -1) {
    //   console.log('help');
    //   updateCellList(0);
    // } else {
    //   updateCellList(indexForOutput);
    // }
  }

  // if(filterOnliO[0].id===5){
  //     if(filterOnliX[0].id===1){

  //     }
  // }

  // if (filterCellsList[0].id===1){

  // } else (filterCellsList[0].id===1 && filterCellsList[1].id===3){

  // } else

  return updatedCellList;
}
export default PlayerCpu;

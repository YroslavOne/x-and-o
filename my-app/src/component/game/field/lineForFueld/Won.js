import WinningData from "../../../../WinningData"

function Won(cellList, scoreList, setScoreList, newGame, setNewGame, setCellList){
    let thisNewGame = true
    let indexWin = []
   function score(winner, idWinner){
    let updateCellList = cellList
    console.log(winner)
    updateCellList[(idWinner[0]-1)].background = "rgb(179,21,27)"
    updateCellList[(idWinner[1]-1)].background = "rgb(179,21,27)"
    updateCellList[(idWinner[2]-1)].background = "rgb(179,21,27)"
    // setCellList(updateCellList)

    if(newGame===true){
    if(winner==="X"){
        let valueX = scoreList.X +1
        setScoreList({X: valueX, O: scoreList.O, deadHeat: scoreList.deadHeat})
        thisNewGame = false
        setNewGame(false)
    } else {
        if(winner==="O"){
            let valueO = scoreList.O +1
            setScoreList({X: scoreList.X, O: valueO, deadHeat: scoreList.deadHeat})
            thisNewGame = false
        setNewGame(false)
        } else {
            let valueDeadHeat = scoreList.deadHeat +1
            setScoreList({X: scoreList.X, O: scoreList.O, deadHeat: valueDeadHeat})
            thisNewGame = false
            setNewGame(false)

        }
    }
}
}



//    if(cellList[0].value!==null && cellList[0].value === cellList[1].value && cellList[1].value === cellList[2].value){
//     score(cellList[0].value)
//     forwardToVictory()
//    } else {
//     if((cellList[3].value!==null && cellList[3].value === cellList[4].value && cellList[4].value === cellList[5].value)){
//         score(cellList[3].value)

//     } else {
//         if((cellList[6].value!==null && cellList[6].value === cellList[7].value && cellList[7].value === cellList[8].value)){
//             score(cellList[6].value)

//         } else {
//             if((cellList[0].value!==null && cellList[0].value === cellList[4].value && cellList[4].value === cellList[8].value)){
//                 score(cellList[0].value)
//         } else {
//             if((cellList[0].value!==null && cellList[0].value === cellList[3].value && cellList[3].value === cellList[6].value)){
//                 score(cellList[0].value)
//         } else {
//             if((cellList[1].value!==null && cellList[1].value === cellList[4].value && cellList[4].value === cellList[7].value)){
//                 score(cellList[1].value)
//         } else {
//             if((cellList[2].value!==null && cellList[2].value === cellList[5].value && cellList[5].value === cellList[8].value)){
//                 score(cellList[2].value)
//         } else {
//             if((cellList[6].value!==null && cellList[6].value === cellList[4].value && cellList[4].value === cellList[2].value)){
//                 score(cellList[2].value)
//         } else{
//             let filterCellList = cellList.filter((filterCell)=> filterCell.filled===false)
//             if(filterCellList.length===0){
//                 score("draw")
//             }
//         }
//     }
// }
// }
//     }
// }
//     }
// }
let filterOnlyX = cellList.filter(
    (filterCellList) => filterCellList.value === "X"
  );

  let filterOnlyO = cellList.filter(
    (filterCellList) => filterCellList.value === "O"
  );



    let indexForOutput = 0;
    let winnerValue
    let protectionTriggered = false
    WinningData.map((objWinningData) => {
        let coincidencesForX = 0;
        let coincidencesForO = 0;
        objWinningData.map((idWinningData) => {
          let matchChecking = false;

          cellList.map((objCellList)=>{
            if(objCellList.id === idWinningData){
            if(objCellList.value==="X"){
                coincidencesForX = coincidencesForX+1
                matchChecking = true
                winnerValue = "X"
              } else {
                if(objCellList.value==="O"){
                    coincidencesForO = coincidencesForO+1
                    matchChecking = true
                    winnerValue = "O"
                }
              }
            }
          })
  
          if (matchChecking === true) {
            indexForOutput = idWinningData - 1;

          }
        });

        if ((coincidencesForO === 3 || coincidencesForX===3) && protectionTriggered===false) {
            
            score(winnerValue, objWinningData)
            protectionTriggered=true

        }
      });



return thisNewGame
}
export default Won
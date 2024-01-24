function Won(cellList, scoreList, setScoreList, newGame, setNewGame){

   function score(winner){
    if(newGame===true){
    if(winner==="X"){
        let valueX = scoreList.X +1
        setScoreList({X: valueX, O: scoreList.O, deadHeat: scoreList.deadHeat})
        setNewGame(false)
    } else {
        if(winner==="O"){
            let valueO = scoreList.O +1
            setScoreList({X: scoreList.X, O: valueO, deadHeat: scoreList.deadHeat})
            setNewGame(false)
        } else {
            let valueDeadHeat = scoreList.deadHeat +1
            setScoreList({X: scoreList.X, O: scoreList.O, deadHeat: valueDeadHeat})
            setNewGame(false)

        }
    }
}}



   if(cellList[0].value!==null && cellList[0].value === cellList[1].value && cellList[1].value === cellList[2].value){
    score(cellList[0].value)
   } else {
    if((cellList[3].value!==null && cellList[3].value === cellList[4].value && cellList[4].value === cellList[5].value)){
        score(cellList[3].value)

    } else {
        if((cellList[6].value!==null && cellList[6].value === cellList[7].value && cellList[7].value === cellList[8].value)){
            score(cellList[6].value)

        } else {
            if((cellList[0].value!==null && cellList[0].value === cellList[4].value && cellList[4].value === cellList[8].value)){
                score(cellList[0].value)
        } else {
            if((cellList[0].value!==null && cellList[0].value === cellList[3].value && cellList[3].value === cellList[6].value)){
                score(cellList[0].value)
        } else {
            if((cellList[1].value!==null && cellList[1].value === cellList[4].value && cellList[4].value === cellList[7].value)){
                score(cellList[1].value)
        } else {
            if((cellList[2].value!==null && cellList[2].value === cellList[5].value && cellList[5].value === cellList[8].value)){
                score(cellList[2].value)
        } else {
            if((cellList[6].value!==null && cellList[6].value === cellList[4].value && cellList[4].value === cellList[2].value)){
                score(cellList[2].value)
        } else{
            let filterCellList = cellList.filter((filterCell)=> filterCell.filled===false)
            if(filterCellList.length===0){
                score("draw")
            }
        }
    }
}
}
    }
}
    }
}
}
export default Won
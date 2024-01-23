function Score(winner, scoreList, setScoreList){


    if(winner==="X"){
        let valueX = scoreList.X +1

        // console.log({X: valueX, O: scoreList.O, deadHeat: scoreList.deadHeat})
console.log("winner X")
    } else {
        if(winner==="O"){
            let valueO = scoreList.O +1
            setScoreList({X: scoreList.X, O: valueO, deadHeat: scoreList.deadHeat})
            console.log("winner O")
        } else {
            let valueDeadHeat = scoreList.deadHeat +1
            setScoreList({X: scoreList.X, O: scoreList.O, deadHeat: valueDeadHeat})
        }
    }
    return(
        <div>
        </div>
    )
}


export default Score
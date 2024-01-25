import { Context } from "../../Context";
import { useContext } from "react";
import DataCells from "../../../DataCells";

function PlayAgain(){

const {setPlayerNumber, setCellList, setNextOorX, setNewGame} = useContext(Context)

let cellList = DataCells;


function clickPlayAgain(){
    console.log(DataCells)
    

    setNextOorX("X")
    setNewGame(true)
    setPlayerNumber(1)
    setCellList(DataCells)
}

return(
    <div>
        <button onClick={(e) =>{clickPlayAgain()}}>Play again</button>
    </div>
)
}
export default PlayAgain
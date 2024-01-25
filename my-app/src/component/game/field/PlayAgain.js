import { Context } from "../../Context";
import { useContext } from "react";
import DataCells from "../../../DataCells";

function PlayAgain(){

const {setPlayerNumber, updateCellList, setNextOorX, setNewGame} = useContext(Context)

let cellList = DataCells;


function clickPlayAgain(){
    updateCellList(cellList)
    setNextOorX("X")
    setNewGame(true)
    setPlayerNumber(1)
}

return(
    <div>
        <button onClick={(e) =>{clickPlayAgain()}}>Play again</button>
    </div>
)
}
export default PlayAgain
import { Context } from "../../Context";
import { useContext } from "react";
import DataCells from "../../../DataCells";

function PlayAgain(){

const {updateCellList, setNextOorX, setNewGame} = useContext(Context)

let cellList = DataCells;


function clickPlayAgain(){
    updateCellList(cellList)
    setNextOorX("X")
    setNewGame(true)
}

return(
    <div>
        <button onClick={(e) =>{clickPlayAgain()}}>Play again</button>
    </div>
)
}
export default PlayAgain
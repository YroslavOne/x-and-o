import { Context } from "../../Context";
import { useContext } from "react";
import DataCells from "../../../DataCells";
import { v4 as uuidv4 } from 'uuid';


function PlayAgain(){

const {setPlayerNumber, setCellList, setNextOorX, setNewGame, botGoesFirst } = useContext(Context)

let cellList = [
    {
      id: 1,
      value: null,
      filled: false,
      key: uuidv4(),
      background: "A9A9A9",
    },
    {
      id: 2,
      value: null,
      filled: false,
      key: uuidv4(),
      background: "A9A9A9",
    },
    {
      id: 3,
      value: null,
      filled: false,
      key: uuidv4(),
      background: "A9A9A9",
    },
    {
      id: 4,
      value: null,
      filled: false,
      key: uuidv4(),
      background: "A9A9A9",
    },
    {
      id: 5,
      value: null,
      filled: false,
      key: uuidv4(),
      background: "A9A9A9",
    },
    {
      id: 6,
      value: null,
      filled: false,
      key: uuidv4(),
      background: "A9A9A9",
    },
    {
      id: 7,
      value: null,
      filled: false,
      key: uuidv4(),
      background: "A9A9A9",
    },
    {
      id: 8,
      value: null,
      filled: false,
      key: uuidv4(),
      background: "A9A9A9",
    },
    {
      id: 9,
      value: null,
      filled: false,
      key: uuidv4(),
      background: "A9A9A9",
    },];


function clickPlayAgain(){
    
    

    setNextOorX("X")
    setNewGame(true)
    setPlayerNumber(1)
    botGoesFirst(cellList)
    setCellList(cellList)
}

return(
    <div>
        <button onClick={(e) =>{clickPlayAgain()}}>Play again</button>
    </div>
)
}
export default PlayAgain
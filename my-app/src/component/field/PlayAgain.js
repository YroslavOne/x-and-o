import { Context } from "../Context";
import { useContext } from "react";

function PlayAgain(){

const {updateCellList, setNextOorX} = useContext(Context)

let cellList = [
  {
    id: 1,
    value: null,
    filled: false,
  },
  {
    id: 2,
    value: null,
    filled: false,
  },
  {
    id: 3,
    value: null,
    filled: false,
  },
  {
    id: 4,
    value: null,
    filled: false,
  },
  {
    id: 5,
    value: null,
    filled: false,
  },
  {
    id: 6,
    value: null,
    filled: false,
  },
  {
    id: 7,
    value: null,
    filled: false,
  },
  {
    id: 8,
    value: null,
    filled: false,
  },
  {
    id: 9,
    value: null,
    filled: false,
  },
]


function clickPlayAgain(){
    updateCellList(cellList)
    setNextOorX("X")
}

return(
    <div>
        <button onClick={(e) =>{clickPlayAgain()}}>Play again</button>
    </div>
)
}
export default PlayAgain
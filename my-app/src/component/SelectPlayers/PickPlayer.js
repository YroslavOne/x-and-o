import { Context } from "../Context"
import { useContext } from "react"

function PickPlayer(){
const {selectedFirst, setSelectedFirst, setNextOorX} = useContext(Context)

function selectFirst(value){
    setSelectedFirst(value)
    setNextOorX(value)
}

    return(
<div className="block-pick-player">
    <h3>pick player 1's mark</h3>
    <div className="choice-o-or-x">
        <button onClick={(e)=>selectFirst("X")} className="button-choice-o-or-x">X</button>
        <button onClick={(e)=>selectFirst("O")} className="button-choice-o-or-x">O</button>
    </div>
    <h3>remember: {selectedFirst} goes first</h3>

</div>
    )
}

export default PickPlayer
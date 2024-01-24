import { useContext } from "react"
import PickPlayer from "./SelectPlayers/PickPlayer"
import { Context } from "./Context"





function SelectPlayers(props){

const { setPlayerVs } = useContext(Context)

function chooseWithWhom(value){
setPlayerVs(value)
props.setOpenGame(true)
props.setOpenSelectPlayers(false)
}


    


return(
<div>
    <PickPlayer/>
    <div className="block-cpu-or-player">
        <button onClick={(e)=>chooseWithWhom(e.target.value)} value={"cpu"} className="button-cpu-or-player">New Game (Vs CPU)</button>
        <button onClick={(e)=>chooseWithWhom(e.target.value)} value={"player"} className="button-cpu-or-player">New Game (Vs Player)</button>
    </div>

</div>
)
}
export default SelectPlayers
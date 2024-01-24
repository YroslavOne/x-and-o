import SelectPlayers from "./SelectPlayers"
import { useState } from "react"
import Game from "./Game"



function Main(){
const [openGame, setopenGame] = useState(true)
const [onSelectPlayers, setOnSelectPlayers] = useState(true)

return(
  <div>
 <div> 
  <Game/>
     
      </div>
      {/* {onSelectPlayers &&(<SelectPlayers onSelectPlayers={onSelectPlayers} setValueSelectPlayers={setValueSelectPlayers} setOnSelectPlayers={setOnSelectPlayers}/>)}  */}
    </div>
)
}

export default Main
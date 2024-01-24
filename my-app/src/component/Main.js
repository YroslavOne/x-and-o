import SelectPlayers from "./SelectPlayers"
import { useState } from "react"
import NextMove from "./game/field/NextMove"
import Feild from "./game/Field"
import PlayAgain from "./game/field/PlayAgain"
import Score from "./game/field/Score"


function Main(){
const [openGame, setopenGame] = useState(true)
const [onSelectPlayers, setOnSelectPlayers] = useState(true)

return(
  <div>
 <div> 
     <NextMove/>
      <Feild/>
      <PlayAgain/>
      <Score/>
      </div>
      {/* {onSelectPlayers &&(<SelectPlayers onSelectPlayers={onSelectPlayers} setValueSelectPlayers={setValueSelectPlayers} setOnSelectPlayers={setOnSelectPlayers}/>)}  */}
    </div>
)
}

export default Main
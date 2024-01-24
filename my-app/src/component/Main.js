import SelectPlayers from "./SelectPlayers"
import { useState } from "react"
import Game from "./Game"



function Main(){
const [openGame, setOpenGame] = useState(false)
const [openSelectPlayers, setOpenSelectPlayers] = useState(true)
// const [onSelectPlayers, setOnSelectPlayers] = useState(true)

return(
  <div>
 <div> 
  {/* <Game/> */}
     {openGame && (<Game/>)}
      </div>
      {openSelectPlayers &&(<SelectPlayers setOpenGame={setOpenGame} setOpenSelectPlayers={setOpenSelectPlayers}/>)} 
    </div>
)
}

export default Main
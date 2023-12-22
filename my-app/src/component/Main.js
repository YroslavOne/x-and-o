import SelectPlayers from "./SelectPlayers"
import { useState } from "react"

function Main(){
const [valueSelectPlayers, setValueSelectPlayers] = useState('')
const [onSelectPlayers, setOnSelectPlayers] = useState(true)

return(
    <div>
      {onSelectPlayers &&(<SelectPlayers onSelectPlayers={onSelectPlayers} setValueSelectPlayers={setValueSelectPlayers} setOnSelectPlayers={setOnSelectPlayers}/>)} 
    </div>
)
}
export default Main
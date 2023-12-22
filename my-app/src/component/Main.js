import SelectPlayers from "./SelectPlayers"
import { useState } from "react"

function Main(){
const [valueSelectPlayers, setValueSelectPlayers] = useState('')

return(
    <div>
       <SelectPlayers setValueSelectPlayers={setValueSelectPlayers}/>
    </div>
)
}
export default Main
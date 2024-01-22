import LineForField from "./field/LineForField"
import { useContext } from "react"
import { Context } from "./Context"
import './field.css'

function Feild(){

   const { cell }= useContext(Context)
   console.log(cell)

return(
    <div className="field">
        <ul className="field-cell">
        {cell.map((objCell)=>(
          <LineForField id={objCell.id} value={objCell.value} /> ))}
        </ul>
        </div>
)



}
export default Feild
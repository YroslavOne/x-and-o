import LineForField from "./field/LineForField"
import { useContext } from "react"
import { Context } from "../Context"
import './field.css'

function Feild(){

   const { cellList }= useContext(Context)
//    console.log(cell)

return(
    <div className="field">
        <ul className="field-cell">
        {cellList.map((objCell)=>(
          <LineForField id={objCell.id} value={objCell.value} background={objCell.background} /> ))}
        </ul>
        </div>
)



}
export default Feild
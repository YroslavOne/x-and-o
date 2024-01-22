import { useContext } from "react"
import { Context } from "../Context"
import "./lineForField.css"

function LineForField(props){
const {tapOnCell, cell} = useContext(Context)

// console.log(cell)
    function tap(id){
        tapOnCell(id)
    }
return(
<li className="call" id={props.id} onClick={(e)=>tap(e.target.id)}>{props.value}</li>
)
}
export default LineForField
import { Context } from "../../Context"
import { useContext } from "react"

function Score(){
    const {scoreList} = useContext(Context)
   
    return(
        <div>
            <h2>X - {scoreList.X}</h2> 
            <h2>dead Heat - {scoreList.deadHeat}</h2> 
            <h2>O - {scoreList.O}</h2> 
        </div>
    )
}


export default Score
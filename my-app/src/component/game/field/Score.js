import { Context } from "../../Context"
import { useContext } from "react"

function Score(){
    const {scoreList} = useContext(Context)
   
    return(
        <div className="block-score">
            <h2 className="text-block-score">X - {scoreList.X}</h2> 
            <h2 className="text-block-score">dead Heat - {scoreList.deadHeat}</h2> 
            <h2 className="text-block-score">O - {scoreList.O}</h2> 
        </div>
    )
}


export default Score
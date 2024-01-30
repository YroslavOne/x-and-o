import { Context } from "../../Context"
import { useContext } from "react"
import "./score.css"

function Score(){
    const {scoreList} = useContext(Context)
   
    return(
        <div className="block-score">
            <div className="block-score-border thisx"> 
                <h2 className="text-block-score">X (you)</h2>
                <h1 className="texth1-block-score">{scoreList.X}</h1>
                </div>
                <div className="block-score-border this-dead-heat"> 
                <h2 className="text-block-score">ties</h2>
                <h1 className="texth1-block-score">{scoreList.deadHeat}</h1>
                </div>
                <div className="block-score-border thiso"> 
                <h2 className="text-block-score">O (CPU)</h2>
                <h1 className="texth1-block-score">{scoreList.O}</h1>
                </div>
        </div>
    )
}


export default Score
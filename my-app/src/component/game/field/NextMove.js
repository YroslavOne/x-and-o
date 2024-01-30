import { Context } from "../../Context"
import { useContext } from "react"
import "./nextMove.css"

function NextMove(){

const {nextOorX}=useContext(Context)

    return(
        <div className="block-next-player">
            <h1 className="block-next-player-text">
            next: {nextOorX}
            </h1>
        </div>
    )
}
export default NextMove
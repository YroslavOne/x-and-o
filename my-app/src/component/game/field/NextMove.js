import { Context } from "../../Context"
import { useContext } from "react"

function NextMove(){

const {nextOorX}=useContext(Context)

    return(
        <div>
            <h1>
            The next one is walking {nextOorX}
            </h1>
        </div>
    )
}
export default NextMove
import NextMove from "./game/field/NextMove"
import Feild from "./game/Field"
import PlayAgain from "./game/field/PlayAgain"
import Score from "./game/field/Score"


function Game(){
return(
    <div>
        <NextMove/>
        <Feild/>
        <PlayAgain/>
        <Score/>
    </div>
)
}
export default Game
// import { Context } from "../../../Context"
import { v4 as uuidv4 } from 'uuid';
import PlayerCpu from "../../../PlayerCpu"
// import { useContext } from "react"


function ButtonForXorO(id, cellList, nextOorX, newGame){

    // const {playerVs} = useContext(Context)

// function changeOandX(){

    
// }

let clickedOnAnEmpty = false
let allCell = []
if (newGame===true){
    console.log(newGame)
cellList.map((objAllCell)=>{
    if(objAllCell.id ===Number(id)){
        if(objAllCell.value==="X" || objAllCell.value==="O" ){
            allCell.push(objAllCell)
            clickedOnAnEmpty = true
            alert(`"I can’t set the court value, it’s already" ${objAllCell.value}`)
        } else {
            allCell.push({
                id:objAllCell.id,
                value: nextOorX,
                filled: true,
                key: uuidv4()
            })
            // changeOandX()
        }
        

    } else{
        allCell.push(objAllCell)
    }
 
})
} else{
    allCell = cellList
}
if (clickedOnAnEmpty===true){
    allCell = null
}
return allCell
    
}
export default ButtonForXorO
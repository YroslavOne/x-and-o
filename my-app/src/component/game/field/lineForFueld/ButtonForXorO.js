// import { Context } from "../../../Context"
import PlayerCpu from "../../../PlayerCpu"
// import { useContext } from "react"


function ButtonForXorO(id, cellList, nextOorX, newGame){

    // const {playerVs} = useContext(Context)

// function changeOandX(){

    
// }


let allCell = []
if (newGame===true){
cellList.map((objAllCell)=>{
    if(objAllCell.id ===Number(id)){
        if(objAllCell.value==="X" ||objAllCell.value==="O" ){
            allCell.push(objAllCell)
            alert(`"I can’t set the court value, it’s already" ${objAllCell.value}`)
        } else {
            allCell.push({
                id:objAllCell.id,
                value: nextOorX,
                filled: true
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

return allCell
    
}
export default ButtonForXorO
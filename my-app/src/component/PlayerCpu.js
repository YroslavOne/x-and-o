// import { useContext } from "react"
// import { Context } from "./Context"
function PlayerCpu(cellList, nextOorX){

let filterCellsList = cellList.filter((filterCellList)=> filterCellList.value!==null)
let updatedCellList
let id = 4


function updateCellList(index){
    updatedCellList = cellList
    updatedCellList[index].value = nextOorX
    console.log(nextOorX)
}

if (filterCellsList.length<=1){
if (filterCellsList.id!==5){
    updateCellList(4)
} else {updateCellList(8)}
} else {
    if(filterCellsList.length<=3){
        console.log("3 клетка")
    } else {
        if(filterCellsList.length<=5){
            console.log("5 клетка")
        } else {
            if(filterCellsList.length<=5){
                console.log("7 клетка")
            }
        }
    }

}




}
export default PlayerCpu
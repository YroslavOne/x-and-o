import WinningData from "./../WinningData"
// import { useContext } from "react"
// import { Context } from "./Context"
function PlayerCpu(cellList, nextOorX){

let filterCellsList = cellList.filter((filterCellList)=> filterCellList.value!==null)
let updatedCellList
let filterOnliO = cellList.filter((filterCellList)=> filterCellList.value==="O")
let filterOnliX = cellList.filter((filterCellList)=> filterCellList.value==="X")


function updateCellList(index){
    updatedCellList = cellList
    
    updatedCellList[index].value = nextOorX
    // console.log(updatedCellList)
    // console.log(updatedCellList[index].value)
}

if (filterCellsList.length<=1){
if (filterCellsList[0].id!==5){
    updateCellList(4)
} else {updateCellList(8)}
} else {
    if(filterCellsList.length<=3){
        console.log("3 клетка")
        defend()
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


function defend(){

WinningData.map((objWinningData)=>{
    let coincidencesForX = 0
    let coincidencesForO = 0
    let indexForOutput
    objWinningData.map((idWinningData)=>{
    let matchChecking = false
        filterOnliX.map((objFilterOnliX)=>{
            
            if(idWinningData===objFilterOnliX.id){
                coincidencesForX = coincidencesForX+1
                console.log(objFilterOnliX.id)
                matchChecking = true
            }
        })
        if (matchChecking===false){
            console.log(idWinningData)
            indexForOutput=idWinningData-1
        }
        
    })
    objWinningData.map((idWinningData)=>{
    if(coincidencesForX===2){
        filterOnliO.map((objFilterOnliO)=>{
            if(objFilterOnliO.id===idWinningData){
                coincidencesForO=1
                coincidencesForX=0
            }
        })
        if(coincidencesForO===0){

            updateCellList(indexForOutput)
            console.log(indexForOutput)
            coincidencesForX=0


        }
    } else {
        if(coincidencesForX===3){
            console.log("All 3x")
        }
    }
})
})
}


// if(filterOnliO[0].id===5){
//     if(filterOnliX[0].id===1){

//     }
// }

// if (filterCellsList[0].id===1){

// } else (filterCellsList[0].id===1 && filterCellsList[1].id===3){

// } else



return updatedCellList
}
export default PlayerCpu
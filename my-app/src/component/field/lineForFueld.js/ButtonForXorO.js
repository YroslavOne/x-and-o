// import { Context } from "../../Context"
// import { useContext } from "react"

function ButtonForXorO(id, cell, nextOorX, setNextOorX){

// const { changeOandX } = useContext(Context)
function changeOandX(){
    if(nextOorX==="X"){
        
        setNextOorX("O")
        
    } else {
        // localStorage.setItem("NextOorX", "X")
    
        setNextOorX("X")
    }
}


let allCell = []
cell.map((objAllCell)=>{
    // console.log(objAllCell.id)
    // console.log(Number(id))

    if(objAllCell.id ===Number(id)){
        // console.log("ok")
        if(objAllCell.value==="X" ||objAllCell.value==="O" ){
            allCell.push(objAllCell)
            alert(`"I can’t set the court value, it’s already" ${objAllCell.value}`)

        } else {
            allCell.push({
                id:objAllCell.id,
                value: nextOorX
            })
            changeOandX()
        }
        

    } else{
        // console.log("neok")
        allCell.push(objAllCell)
    }
 
})

return allCell
    
}
export default ButtonForXorO
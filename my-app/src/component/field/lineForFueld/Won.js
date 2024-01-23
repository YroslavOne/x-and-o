import { Context } from "../../Context"
import { useContext } from "react"
// import Score from "./Score"


function Won(cellList){

// const {ifWinBe}=useContext(Context)
   function youWin(who){
    alert(`"you win" ${who}`)
   }


   if(cellList[0].value!==null && cellList[0].value === cellList[1].value && cellList[1].value === cellList[2].value){
    // ifWinBe(cellList[0].value)
    youWin(cellList[0].value)
   } else {
    if((cellList[3].value!==null && cellList[3].value === cellList[4].value && cellList[4].value === cellList[5].value)){
        youWin(cellList[3].value)

    } else {
        if((cellList[6].value!==null && cellList[6].value === cellList[7].value && cellList[7].value === cellList[8].value)){
            youWin(cellList[6].value)

        } else {
            if((cellList[0].value!==null && cellList[0].value === cellList[4].value && cellList[4].value === cellList[8].value)){
                youWin(cellList[0].value)
        } else {
            if((cellList[0].value!==null && cellList[0].value === cellList[3].value && cellList[3].value === cellList[6].value)){
                youWin(cellList[0].value)
        } else {
            if((cellList[1].value!==null && cellList[1].value === cellList[4].value && cellList[4].value === cellList[7].value)){
                youWin(cellList[1].value)
        } else {
            if((cellList[2].value!==null && cellList[2].value === cellList[5].value && cellList[5].value === cellList[8].value)){
                youWin(cellList[2].value)
        } else {
            if((cellList[6].value!==null && cellList[6].value === cellList[4].value && cellList[4].value === cellList[2].value)){
                youWin(cellList[2].value)
        } else{

        }
    }
}
}
    }
}
    }
}
}
export default Won
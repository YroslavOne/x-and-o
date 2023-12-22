import {useState} from "react"



function SelectPlayers(props){

    const [valueSelect, setValueSelect] = useState("")
// let valueSelectThis = valueSelect


const  handlerSelectPlayers = ()=>{
// props.setValueSelectPlayers(valueSelectThis)
// props.setOnSelectPlayers(true)
// console.log(valueSelectThis)
console.log(false)
}

    


return(
    <div className="how-many-players">
    <h1>Here you can select the number players</h1>
    <div className="button-select-players">
        <div>
<input type="radio" id="people" name="vs" onClick={(e)=>setValueSelect(e.target.value)} value="people" />
<label for="people" >People vs People</label>
</div>
<div>
<input type="radio" id="robot" name="vs" onClick={(e)=>setValueSelect(e.target.value)} value="robot"  />
<label for="robot" >People vs Robot</label>
</div>
    </div>
    <div>
    <button className="tap-how-many-players" onClick={handlerSelectPlayers()}>Select</button>
    </div>
</div>
)
}
export default SelectPlayers
import {useState} from "react"



function SelectPlayers(props){

    const [valueSelect, setValueSelect] = useState("people")
    props.setValueSelectPlayers(valueSelect)
    


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
</div>
)
}
export default SelectPlayers
function Feild(){

    function tap(e){
        console.log(e.target)
    }
let i=0
return(
    <div>
        
        <button onClick={(e)=>tap(e)}>{i}</button>
        <button onClick={(e)=>tap(e)}>{i}</button>
        <button onClick={(e)=>tap(e)}>{i}</button>
        <button onClick={(e)=>tap(e)}>{i}</button>
        <button onClick={(e)=>tap(e)}>{i}</button>
        <button onClick={(e)=>tap(e)}>{i}</button>
        <button onClick={(e)=>tap(e)}>{i}</button>
        <button onClick={(e)=>tap(e)}>{i}</button>
        <button onClick={(e)=>tap(e)}>{i}</button>
        </div>
)



}
export default Feild
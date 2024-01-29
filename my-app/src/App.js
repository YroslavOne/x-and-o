import './App.css';
import Main from "./component/Main"
// import Field from "./component/Field"
import { Context, ContextProvider } from './component/Context';
// import { useContext } from 'react';
// import NextMove from "./component/field/NextMove"
// import PlayAgain from './component/field/PlayAgain';
// import Score from './component/field/lineForFueld/Score';

function App() {
  // localStorage.clear()
  return(
    <div className='app-main'>
    <ContextProvider>
<Main/>
    </ContextProvider>
    </div>
  )
    
}

export default App;

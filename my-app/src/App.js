import './App.css';
import Main from "./component/Main"
import Field from "./component/Field"
import { Context, ContextProvider } from './component/Context';
import { useContext } from 'react';
import NextMove from "./component/field/NextMove"
import PlayAgain from './component/field/PlayAgain';
// import Score from './component/field/lineForFueld.js/Score';

function App() {
  localStorage.clear()
  return(
    <ContextProvider>
<NextMove/>
    <Field/>
    <PlayAgain/>

    </ContextProvider>
  )
    
}

export default App;

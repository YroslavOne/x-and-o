import './App.css';
import Main from "./component/Main"
import Field from "./component/Field"
import { Context, ContextProvider } from './component/Context';
import { useContext } from 'react';

function App() {
  // localStorage.clear()
  return(
    <ContextProvider>
    <Field/>
    </ContextProvider>
  )
    
}

export default App;

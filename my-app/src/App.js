import './App.css';
import Main from './component/Main';
import { ContextProvider } from './component/Context';
function App() {
  return (
    <div className="app-main">
      <ContextProvider>
        <Main />
      </ContextProvider>
    </div>
  );
}

export default App;

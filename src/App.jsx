
//import './App.css';
import ConnectWorkbench from './Pages/ConnectWorkbench.jsx';
import Home from './Pages/Home.jsx'
import Projeto from './Pages/Projeto.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path='/Projeto' Component={Projeto} />
        <Route path='/ConnectWorkbench' Component={ConnectWorkbench}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

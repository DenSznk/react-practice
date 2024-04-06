import ResultBlock from './components/ResultBlock';
import Finish from './components/Finish';
import './App.css';
import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
      <>      
        <header className='App-header'>

        <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : undefined}>
              Home
          </NavLink>
          <NavLink 
            to="/finish"
            className={({ isActive }) => isActive ? 'active-link' : undefined}>Finish
            </NavLink>

        </header>     
        
        <div className='App-body'>
        <h1>Main part</h1>
          <Routes>            
            <Route path={'/'} element={<ResultBlock />} />
            <Route path={'/finish'} element={<Finish />} />
          </Routes>
        </div>
      </>
  );
}

export default App;
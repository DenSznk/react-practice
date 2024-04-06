import ResultBlock from './components/ResultBlock';
import Finish from './components/Finish';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
      <>
        <header className='App-header'>
          <Link to="/">Home</Link>
          <Link to="/finish">Finish</Link>
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
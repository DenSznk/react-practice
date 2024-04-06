import ResultBlock from './components/ResultBlock';
import Finish from './components/Finish';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<ResultBlock />} />
        <Route path={'/finish'} element={<Finish />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
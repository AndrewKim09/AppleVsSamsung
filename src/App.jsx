
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Components/HomePage';
import { ComparePage } from './Components/ComparePage';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/compare" element={<ComparePage/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;

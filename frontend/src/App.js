// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Pengci from "./component/Pengci.js";
import Scores from "./component/Scores.js";
import Instructions from "./component/Instructions.js"
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Pengci />} />
          <Route path='/pengci/all_scores' element ={<Scores/>} />
          <Route path='/pengci/instructions' element={<Instructions />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
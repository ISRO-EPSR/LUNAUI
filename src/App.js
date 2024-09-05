import './App.css';
import {
  BrowserRouter as Router, Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Home from './pages/home';
import Enahnce from './pages/Enhance';
import Team from './pages/Team';
import Menu from './pages/Menu';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/team' element={<Team/> }/>
        <Route path='/enhance' element={<Enahnce/> }/>
      </Routes>
    </Router>
  );
}

export default App;

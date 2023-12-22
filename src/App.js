import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Login from './screens/Login';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navbar/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
        </Routes>
      
      
      </div>
    </Router>
    
  );
}

export default App;

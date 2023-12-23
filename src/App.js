import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route exact path='/login' element={<Login/>}></Route>
        </Routes>
        <Home/>

      
      
      </div>
    </Router>
    
  );
}

export default App;

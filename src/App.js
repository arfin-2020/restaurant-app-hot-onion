import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header.js/Header";
import Homepage from './components/Home/Homepage';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
      
function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

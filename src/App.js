import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import DeliveryProvider from "./components/context/DeliveryProvider";
import OrderProvider from "./components/context/OrderProvider";
import FoodDetail from "./components/FoodDetail/FoodDetail";
import Header from "./components/Header.js/Header";
import Homepage from './components/Home/Homepage';
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import OrderSuccessfull from "./components/Orders/OrderSuccessfull";
import Register from "./components/Register/Register";


      
function App() {
  return (
    <div className="App">
    <Router>
    <OrderProvider>
    <DeliveryProvider>
    <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/order" element={<FoodDetail/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/orderSuccessfull" element={<OrderSuccessfull/>}/>
        <Route path="/order/:title" element={<FoodDetail/>}/>
      </Routes>
      </DeliveryProvider>
      </OrderProvider>
    </Router>
    </div>
  );
}

export default App;

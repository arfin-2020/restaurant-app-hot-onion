import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './App.css';
import AuthProvider from "./components/context/AuthProvider";
import DeliveryProvider from "./components/context/DeliveryProvider";
import OrderProvider from "./components/context/OrderProvider";
import FoodDetail from "./components/FoodDetail/FoodDetail";
import Header from "./components/Header.js/Header";
import Homepage from './components/Home/Homepage';
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import OrderSuccessfull from "./components/Orders/OrderSuccessfull";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register/Register";


      
function App() {
  return (
    <div className="App">
    <Router>
    <AuthProvider>
    <OrderProvider>
    <DeliveryProvider>
    <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='*'  element={<PrivateRoute/>}>
            <Route path="order/:title" element={<FoodDetail/>}/>
            <Route path="order" element={<FoodDetail/>}/>
            <Route path="orders" element={<Orders/>}/>
            <Route path="orderSuccessfull" element={<OrderSuccessfull/>}/>
        </Route>
      </Routes>
      </DeliveryProvider>
      </OrderProvider>
      </AuthProvider>
      <ToastContainer />
    </Router>
    </div>
  );
}

export default App;

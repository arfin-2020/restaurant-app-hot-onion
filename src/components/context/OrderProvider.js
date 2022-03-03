import React, { createContext, useContext, useState } from "react";


 export const OrderContext = createContext();

export const useOrder = () =>{
    return useContext(OrderContext)
}


const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  // add to cart function
  const addToCart = (food) => {
    setOrder(prevValue => {
      return [...prevValue, food];
    });
  };

  //Remove from the cart

  const removeFromCart = id => {
    setOrder((prevOrder) => {
      return prevOrder.filter(item => {
        return item.id !== id
      });
    });
  };

  const value = {
    addToCart,
    setOrder,
    order,
    removeFromCart,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export default OrderProvider;

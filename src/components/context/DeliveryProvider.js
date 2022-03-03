import React, { createContext, useContext, useState } from 'react';


 export const DeliveryContext = createContext();

export const useDelivery = () =>{
    return useContext(DeliveryContext)
}


const DeliveryProvider = ({children}) => {
    const [input, setInput] = useState({});
    const [disable, setDisabled] = useState(true);

    const value = {
        input,
        setInput,
        disable,
        setDisabled,
        
    }
    return (
    <DeliveryContext.Provider value={value}>{children}</DeliveryContext.Provider>
    )
};

export default DeliveryProvider;
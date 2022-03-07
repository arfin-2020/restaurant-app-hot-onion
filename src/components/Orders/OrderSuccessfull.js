import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react';
import { MdVerified } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import orderSuccessfull from '../../assets/ordersuccess.png';
const OrderSuccessfull = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])


    return (
        <div className=" h-screen banner2 overflow-hidden">
            <div className="max-w-screen-xl py-20 mx-auto px-6">
                {loading ? (
                    <div className="flex flex-col items-center justify-center h-3/4 pt-24">
                        
                        <CircularProgress color="success" />
                        
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col items-center justify-center h-3/4 pt-24">
                            <h1 className="text-3xl text-center text-primary font-semibold poppins flex space-x-6 items-center ">
                                <MdVerified className="text-primary green-500 text-3xl" /> {" "}
                                Order Successful!!!</h1>
                            <img className="w-96 object-contain" src={orderSuccessfull} alt="orderSuccessful" />

                            <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105" onClick={() => navigate('/')}>Go back to home</button>
                        </div>
                    </>
                )}

            </div >
        </div>
    );
};

export default OrderSuccessfull;


import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useOrder } from '../context/OrderProvider';
const OrderCard = ({image, type,title, quantity, id, price}) => {
    const {removeFromCart} = useOrder();
    return (
        <div className='rounded-lg p-4 flex space-x-3   '>
            <div className='flex'>
                <img className='w-24 object-contain' src={image} alt=''/>
            </div>
            <div className='flex flex-col space-y-3 flex-grow'>
                <h5 className='text-base poppins text-gray-700'>{title}</h5>
                <h1 className="font-semibold text-lg text-primary poppins">${price.toFixed(2)}</h1>
                <p className="text-sm poppins text-gray-400">{type}</p>
            </div>
            <div className="flex items-center px-4 py-2 space-x-3">
                <span className="text-lg text-gray-700 poppins select-none">{quantity} items</span>
            </div>
            {/* remove button  */}
            <div className="flex flex-col items-center justify-center">
                <AiOutlineDelete className="w-6 h-6 text-gray-600 transform transition hover:scale-105 duration-500 cursor-pointer" onClick={() => removeFromCart(id)} />
            </div>
        </div>
    );
};

export default OrderCard;
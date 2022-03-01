import { useEffect, useState } from 'react';

const UseFetch = () => {
    const [foods, setFoods] = useState([]);
    useEffect(()=>{
        fetch(`./foods.json`)
        .then(res =>res.json())
        .then(data =>setFoods(data))
    },[])
    return [foods]
};



export default UseFetch;
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthProvider';

const Login = () => {
    const {signInWithGoogle} = useAuth();
    const location = useLocation();
    const navigate =  useNavigate();
    const redirect_url = location.state?.from?.pathname || "/";
                         
    console.log('from login----------',redirect_url);

    
    const handleSignInWithGoogle = async() =>{
        try{
            await signInWithGoogle();
            navigate(`${redirect_url}`, { replace: true });
            toast.success("Welcome you are logged in Successfully,", {
                theme: "colored"
              })
        }catch(err){
            console.log(err.message)
        }
    }
    return (
        <div>
            <h1 style={{fontSize: '50px'}}>This is login page</h1>
            <button onClick={handleSignInWithGoogle}>LogInWith Google</button>
        </div>
    );
};

export default Login;
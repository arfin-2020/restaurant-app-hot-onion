import { Button } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthProvider";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const redirect_url = location.state?.from?.pathname || "/";

  // console.log('from login----------',redirect_url);

  

  
  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate(`${redirect_url}`, { replace: true });
      toast.success("Welcome you are logged in Successfully,", {
        theme: "colored",
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
    <h1 className="text-center text-5xl text-primary poppins mb-5">Please login with google Account</h1>
      <Button onClick={handleSignInWithGoogle} variant="contained">
        LogIn With Google
      </Button>
    </div>
  );
};

export default Login;

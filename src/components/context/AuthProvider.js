import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../Firebase/Firebase';


const googleProvider = new GoogleAuthProvider();
const AuthContext = createContext();

export const useAuth = () =>{
    return useContext(AuthContext);
}
const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [isLoading, setLoading] = useState(true);
    const auth = getAuth();
    const navigate = useNavigate()


     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            setUser(user)
        })
        setLoading(false);
        return unsubscribe;
    },[auth]);


    const signInWithGoogle = async() =>{
        setLoading(true)
       return await signInWithPopup(auth,googleProvider)
        .then((result)=>{
            console.log(result.user)
            setUser(result.user)
            setLoading(false)
            
            
        })
        
    }

    const logOut = () =>{
        setLoading(true)
        signOut(auth)
        .then(()=>{
            setLoading(false)
            // console.log('signOut successfull');
            setUser('');
            navigate('/')
            toast.info("You are successfully Logout", {
                theme: "colored"
              })
        })
    }

    const value = {
        user,
        signInWithGoogle,
        logOut,
        isLoading 
    }
    return <AuthContext.Provider  value={value}>{children}</AuthContext.Provider>
};

export default AuthProvider;
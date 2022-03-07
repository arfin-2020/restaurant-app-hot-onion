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
    const [currentUser, setCurrentUser] = useState({});
    const [isLoading, setLoading] = useState(true);
    const auth = getAuth();
    const navigate = useNavigate()


     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            setCurrentUser(user)
        })
        setLoading(false);
        return unsubscribe;
    },[auth]);


    const signInWithGoogle = async() =>{
        setLoading(true)
        await signInWithPopup(auth,googleProvider)
        .then((result)=>{
            // console.log(result.user)
            
              setCurrentUser(result.user)
            setLoading(false)
        })
        .finally(()=>setLoading(false));
        
    }


    // const signUpWithEmailPassword = async (username, email, password) => {
    //     setLoading(true)
    //     await createUserWithEmailAndPassword(auth, email, password);
    //     const loggedInUser = {
    //       name: username,
    //       email: email,
    //     };
    //     setLoading(false)
    //     setCurrentUser(loggedInUser);
        
    //   };
    //     // VerifyEmail
    //     const emailVerification = () =>{
    //         sendEmailVerification(auth.currentUser)
    //     .then(() => {
    //         console.log('Email verification sent!')
            
    //     });
    //     }
    //     // Reset Password
    //     const resetPassword = async(email) =>{
    //     await sendPasswordResetEmail(auth, email)
    //         .then(() => {
    //         console.log("Password reset email sent!");
    //         })
            
    //     }

    //     const logInWithEmailPassword = async(email, password) =>{
    //         setLoading(true)
    //         return signInWithEmailAndPassword(auth, email, password)
    //          .then((userCredential) => {
    //             setLoading(false)
    //            const {displayName, email} = userCredential.user;
    //            const loggedInUser ={
    //              name: displayName,
    //              email:email
    //            }
    //            setCurrentUser({...loggedInUser})
    //            setLoading(false)
    //          })
             
    //        }
    const logOut = () =>{
        setLoading(true)
        signOut(auth)
        .then(()=>{
            setLoading(false)
            // console.log('signOut successfull');
            setCurrentUser('');
            navigate('/')
            toast.info("You are successfully Logout", {
                theme: "colored"
              })
        })
        .finally(()=>setLoading(false));
    }

    const value = {
        currentUser,
        signInWithGoogle,
        logOut,
        isLoading,
        // signUpWithEmailPassword,
        // emailVerification,
        // logInWithEmailPassword,
        // resetPassword

    }
    return <AuthContext.Provider  value={value}>{children}</AuthContext.Provider>
};

export default AuthProvider;



import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from "../Firebase.config";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] =useState(true)
    const providerLogin = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

   



    
    const signIn = (email, password)=>{
        setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('inside auth state change', currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const createUser = (email, password) =>{
        
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = { user,loading, createUser, signIn, providerLogin,logOut }
    return (
        <AuthContext.Provider
            value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
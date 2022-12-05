import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.init'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
export const UserContext=createContext();
const auth=getAuth(app);

const AuthContext = ({children}) => {

    const [user,setUser]=useState(null);
    const [loader,setLoader]=useState(true);

    const logIn=(email,password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);

    }
    const handleRegister=(email, password)=>{
       return createUserWithEmailAndPassword(auth,email,password);

    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoader(false);
        })
        return ()=>unSubscribe();
    },[])
    const googleLogIn=(provider)=>{
        setLoader(true);
        return signInWithPopup(auth,provider);

    }

    const logOut=()=>{
        return signOut(auth);
    }


const userInfo={user,handleRegister,logIn,logOut,googleLogIn,loader};

    return (
        <UserContext.Provider value={userInfo}>
 {
                    children
                }
        </UserContext.Provider>
       
               
       
    );
};

export default AuthContext;
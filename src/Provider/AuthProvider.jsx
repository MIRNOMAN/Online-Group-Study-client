import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);
    const googleLogin = new GoogleAuthProvider()

    const googleSignIn = (value) => {
        setLoading(true)
        return signInWithPopup(auth, googleLogin);
      }
    
      const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      }
    
      const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }
    
      const logOut = () => {
        setLoading(true)
        return signOut(auth)
      }
    
      useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
          setLoading(false)
        })
        return () => {
          unSubscribe();
        }
      }, [])
    
    
    
    
      const authInfo = { user, createUser, logOut, signIn, googleSignIn, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
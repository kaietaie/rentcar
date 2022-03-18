import { auth } from '../firebase';
import React, { useContext, useState, useEffect } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    useEffect( () => {
        const unsubscribe = auth.onAuthStateChange(user => {
            setCurrentUser(user)
        })
        
        return unsubscribe;
    }, [])
    
    const value = {
        currentUser,
        signup
    }
  return (
   <AuthContext.AuthProvider value={value}>
       {children}
   </AuthContext.AuthProvider>
  )
}

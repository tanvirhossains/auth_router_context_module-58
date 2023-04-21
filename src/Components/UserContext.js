import { EmailAuthCredential, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase';

export const AuthContext = createContext()

const UserContext = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)




    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            alert("sign Out Successfully !!")
        }).catch((error) => {
            // An error happened.

        });
    }

    // onAuthStateChanged(auth, (existingUser) => {
    //     if (existingUser) {
    //         // existingUser is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/firebase.existingUser
    //         const uid = existingUser.uid;
    //         // ...
    //     } else {
    //         // existingUser is signed out
    //         // ...
    //     }
    // });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
            const uid = currentUser.uid;
            console.log(uid)
            console.log(currentUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])
    console.log(user)


    const authInfo = { user, loading, signIn, signUp, logOut }
    console.log(authInfo)
    console.log(user?.displayName)

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
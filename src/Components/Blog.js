import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import app from '../firebase';
import { Navigate, redirect, useNavigate } from 'react-router-dom';

// const auth = getAuth(app);
const Blog = () => {

    // const [emailUser, setUser] = useState(null)

    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/firebase.User
    //         const uid = user.uid;
    //         console.log(user)
    //         setUser(user)
    //         // ...
    //     } else {
    //         // User is signed out
    //         // ...
    //         console.log(user)
    //     }
    // });

    // const navigate = useNavigate()
    // console.log(emailUser)
    // if (!emailUser) {
    //     return <Navigate to="/login" replace />;
    // }

    // useEffect(() => {
    //     if (emailUser) {
    //         // fake.logout();
    //         return navigate("/blog")
    //     } else {
    //         return navigate("/login");
    //     }
    // }, [emailUser])



    // if (!user) {
    //     return redirect("/login");
    // }


    return (
        <div>
            <h1>blod Page</h1>
        </div>
    );
};

export default Blog;
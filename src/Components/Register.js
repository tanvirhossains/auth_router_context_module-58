import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import app from '../firebase';
import { AuthContext } from './UserContext';

const Register = () => {
    const { signUp } = useContext(AuthContext)
    const auth = getAuth(app)
    const [massage, setMassage] = useState('')
    const [newUser, setUser] = useState()
    const [errMsg, setErrMsg] = useState('')
    const [userName, setUserName] = useState('')


    const handleRegisterBtn = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        setUserName(name)

        console.log(name, email, password)
        signUp(email, password  )
            // createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const addedUser = userCredential.user;
                // ...
                setUser(addedUser)
                setMassage('Added Successfully!')
                // console.log(addedUser)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrMsg(errorCode)
                console.log(errorCode, "errorMessage : ", errorMessage)
                // ..
            });
    }


    updateProfile(auth.currentUser, {
        displayName: userName, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
        // Profile updated!
        // ...
    }).catch((error) => {
        // An error occurred
        console.log(error.code)
        // ...
    });
    console.log(userName);




    // const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;

        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;
    }
    console.log(newUser)
    console.log(user)


    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col ">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Register now!</h1>
                        {/* <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    </div>
                    <div class="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <Form onSubmit={handleRegisterBtn} class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <h1 className={`${massage ? "text-success" : "text-error"}`}>{massage ? massage : errMsg}</h1>
                                </label>
                                <label class="label">
                                    <Link to="/login" class="label-text-alt link link-hover">Have an account?</Link>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button type='submit' class="btn btn-primary">Register</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
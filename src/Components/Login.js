import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase';
import React, { useContext } from 'react';
import { Form, Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './UserContext';
import { ToastContainer, toast } from 'react-toastify';

// const auth = getAuth(app);
const Login = () => {
    const { signIn } = useContext(AuthContext)
    let navigation = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    console.log(from)
    const handleLogIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;


        // signInWithEmailAndPassword(auth, email, password)
        signIn(email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // ...

                console.log("succecfuly sign in")
                if (userCredential) {
                    navigation(from, { replace: true })
                    console.log("inside the login")
                }
                // navigate(from, { replace: true });
                toast.success("🐔 Log in Successfully !!")
                toast('🐔 Log in Successfully !!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const showToast = () => {
        console.log('toast goin')
        toast('shwing the toast')
        console.log('showed toast')
    }
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="  ">
                    <div class="text-center mb-5 ">
                        <h1 class="text-5xl font-bold">Login now!</h1>
                        {/* <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    </div>
                    <div class=" w-full  shadow-2xl bg-base-100">
                        <Form class="card-body " onSubmit={handleLogIn}>
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
                                <input name="password" type="password" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <Link to="/register" class="label-text-alt link link-hover">Are You New?</Link>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Log in</button>
                            </div>
                        </Form>
                        <button onClick={showToast}>Show toast</button>
                    </div>
                </div>
            </div>
            <ToastContainer

            />


        </div>
    );
};

export default Login;
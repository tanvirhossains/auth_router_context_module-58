import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import app from '../firebase';
import { AuthContext } from './UserContext';

const Header = () => {
    const [displayName, setDisplayNm] = useState(null)
    const { user , logOut } = useContext(AuthContext)
    // const auth = getAuth(app);

    // onAuthStateChanged(auth, (currentUs) => {
    //     if (currentUs) {
    //         // currentUs is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/firebase.currentUs
    //         const uid = currentUs.uid;
    //         console.log(currentUs)
    //         setDisplayNm(currentUs.email)
    //         // ...
    //     } else {
    //         // User is signed out
    //         // ...
    //     }
    // });

    console.log(user?.email)
    var name = user?.email;
    var lastname = "Sandler";
    name = "komla"

    if (user) {

        var emailOwner = name.charAt(0) + "" + lastname.charAt(0);
        console.log(emailOwner)
    }



    const handleLogOut = () => {
        console.log('first')
        logOut()
       

    }
    // useEffect(()=>{
    //     onAuthStateChanged(auth , user=>{

    //     })
    // },[])
    return (
        <div className=''>
            <div class="navbar bg-red-900  fixed top-0 left-0 right-0 z-30 ">
                <div class="flex-1">
                    <Link to='/' class="btn btn-ghost normal-case text-xl">AUth Router</Link>
                    {user ? <h1>{user?.email}</h1> : ""}

                </div>

                <div class="flex-none">
                    <ul class="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='login'>Login</Link></li>
                        <li><Link to='register'>Register</Link></li>
                        <li><Link to='blog'>blog</Link></li>


                    </ul>
                </div>
                <div class="flex-none">
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle">
                            <div class="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span class="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div class="card-body">
                                <span class="font-bold text-lg">8 Items</span>
                                <span class="text-info">Subtotal: $999</span>
                                <div class="card-actions">
                                    <button class="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* -------user info */}
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-success btn-circle avatar">
                            <div class="w-10 rounded-full">
                                {emailOwner ? <h1 className='text-2xl ali'>{emailOwner}</h1> : <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />}
                            </div>
                        </label>

                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><button onClick={handleLogOut}>Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-20 z-10'>
                <Outlet />
            </div>
        </div>
    );
};

export default Header;
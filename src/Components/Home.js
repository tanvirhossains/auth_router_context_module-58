import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
    const showToast = () => {
        console.log("toast showing")
        toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        console.log("toast showed ")
    }
    return (
        <div>
            <h2>Home page </h2>
            <h2>this is page</h2>
            <button onClick={showToast}>Show the toast</button>
            <ToastContainer />
        </div>
    );
};

export default Home;
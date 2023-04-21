import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Blog from './Components/Blog';
import PrivateRoute from './Components/PrivateRoute';
import { ToastContainer } from 'react-toastify';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,

        },
        {
          path: "blog",
          element: <PrivateRoute> <Blog /></PrivateRoute>,

        },
      ],
    },
  ]);
  return (
    <div className="App">

      <RouterProvider router={router}>
        {/* <ToastContainer /> */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </RouterProvider>
    </div>
  );
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from '../App'
import Login from "../pages/Login";

const routes =  createBrowserRouter([
    {
        path:'/',
        element: <App/>
    },
    {
        path:'/home',
        element: <Home/>
    },
    {
        path:'/login',
        element: <Login/>
    },
]);

export default routes;
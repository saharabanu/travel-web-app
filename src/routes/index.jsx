import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import DestinationDetails from "../pages/DestinationDetails";

import Modal1 from "../components/Modal1";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/destination/:id",
        element: <DestinationDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/modal",
        element: <Modal1 />,
      },
      {
        path: "/register",
        element: <Register />,
      }
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
  
]);

export default routes;

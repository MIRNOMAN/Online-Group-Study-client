import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AssignmentPage from "../Pages/AssignmentPage/AssignmentPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout> ,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
           path: '/',
            element: <Home></Home>,
        },
        {
            path: '/assignment',
            element: <AssignmentPage></AssignmentPage>,
        },
      ]
    },
    {
        path: '/login',
        element: <Login></Login>,
    },
    {
        path: '/register',
        element: <Register></Register>,
    }
  ]);

export default router;
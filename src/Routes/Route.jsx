import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AssignmentPage from "../Pages/AssignmentPage/AssignmentPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MainLayout from "../Layout/MainLayout";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";

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
        {
          path: '/createAsgmt',
          element: <CreateAssignment></CreateAssignment>
        }
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
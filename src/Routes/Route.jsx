import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AssignmentPage from "../Pages/AssignmentPage/AssignmentPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MainLayout from "../Layout/MainLayout";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateAssignment from "../Component/UpdateAssignment/UpdateAssignment";
import AssignmentDetails from "../Pages/AssignmentDetails/AssignmentDetails";
import SubmissionAssgnment from "../Component/SubmissionAssgnment/SubmissionAssgnment";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/assignment',
        element: <AssignmentPage></AssignmentPage>,
        loader: () => fetch('http://localhost:5000/assignments')
      },
      {
        path: '/createAsgmt',
        element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
      },
      {
        path: '/updates/:_id',
        element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/updates/${params._id}`)
      },
      {
        path: "/details/:_id",
        element: <PrivateRoute><AssignmentDetails></AssignmentDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/details/${params._id}`)
      },
      {
        path: "/submission/:_id",
        element: <PrivateRoute><SubmissionAssgnment></SubmissionAssgnment></PrivateRoute>,
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
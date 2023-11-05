import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user , loading} = useAuth();
    
    if(loading){
        return <div className="flex justify-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if (!loading && !user?.email){
     return <Navigate to='/login'></Navigate>
    
    }
     


    return children;
};

export default PrivateRoute;
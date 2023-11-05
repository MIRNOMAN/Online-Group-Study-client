import  { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useAuth = () => {
    const authUtilis = useContext(AuthContext);

    return authUtilis;
};

export default useAuth;
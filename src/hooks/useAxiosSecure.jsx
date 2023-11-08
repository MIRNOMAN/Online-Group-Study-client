import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://online-group-study-server-iota.vercel.app',
    withCredentials: true,

})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logout the user');
                logOut()
                    .then(() => {
                        console.log('Sign out')
                        navigate('/login')
                    })
                    .then(err => {
                        console.log(err)
                    })
            }
        })
    }, [])


    return axiosSecure;
};

export default useAxiosSecure;
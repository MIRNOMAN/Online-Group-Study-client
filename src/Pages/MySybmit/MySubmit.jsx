import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import MySubmitCard from "./MySubmitCard";



const MySubmit = () => {
    const { user } = useAuth();
    const [values, setValues] = useState([])
    const [myAsgmt, setMyAsgmt] = useState([]);

    useEffect(() => {
        axios.get(`https://online-group-study-server-iota.vercel.app/mySubmittedAssignment?email=${user?.email}`)
            .then(res => setValues(res.data))

    }, [user])
    useEffect(() => {
        const validUser = values.filter(item => item.email === user.email)
        setMyAsgmt(validUser)
    }, [values, user.email])

    console.log(myAsgmt)
    return (
        values.length > 0 ? <div>
            <div className="grid grid-cols-1  mt-12 mb-20 lg:grid-cols-1 gap-6 max-w-[1200px] mx-auto">
                {
                    myAsgmt?.map(value => <MySubmitCard key={value._id} value={value}></MySubmitCard>)
                }
            </div>
        </div> : <div className="text-4xl  font-semibold flex justify-center items-center h-screen">No data found</div>
    );
};

export default MySubmit;
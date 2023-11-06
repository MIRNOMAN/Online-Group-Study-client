import axios from "axios";
import { useEffect, useState } from "react";
import SubmittedCard from "./SubmittedCard";
import useAuth from "../../hooks/useAuth";


const SubmittedAssignment = () => {
    const [getAssignment, setGetAssignment] = useState([])
    const [newuserId, setNewUserId] = useState([])
    const { user } = useAuth();

    useEffect(() => {
        axios.get('http://localhost:5000/submittedAssignment')
            .then((response) => {
                setGetAssignment(response.data);
            })
    }, [])

    useEffect(() => {
        const validUser = getAssignment.filter(product => product.email === user.email)
        setNewUserId(validUser)
    }, [getAssignment, user.email])

    console.log(newuserId)


    return (
        <div>

            {getAssignment.length > 0 ?

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    
                                </th>
                                <th>Name</th>
                                <th>Submition</th>
                                <th>Examinee</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    getAssignment.map(cardValue => <SubmittedCard key={cardValue._id} getAssignment={getAssignment} setGetAssignment={setGetAssignment} cardValue={cardValue}></SubmittedCard>)
                                }
                        </tbody>
                    </table>
                </div>

                : <div className="text-4xl font-semibold flex justify-center items-center h-screen">No data found</div>}

        </div>
    );
};

export default SubmittedAssignment;
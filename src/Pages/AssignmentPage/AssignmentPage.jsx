import AssignmentCard from "./AssignmentCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";

const categories = [
    'easy',
    'medium',
    'hard',
]


const AssignmentPage = () => {
    const [level, setLevels] = useState('')
    const [page, setPage] = useState(1)
    const axiosSecure = useAxiosSecure();

    const limit = 5;

    const getServices = async () => {
        const res = await axiosSecure.get(`/assignments?level=${level}&page=${page}&limit=${limit}`);
        return res;
    }

    const {
        data: allAssignments,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ['service', level, page],
        queryFn: getServices,
    })

    const handlePrivious =() =>{
        if(page > 1){
            setPage(page - 1);
        }
    }

    const handleNext =() =>{
        if(page < totallPage){
            setPage(page + 1);
        }
    }

    const totallPage = Math.ceil(allAssignments?.data?.total / limit);

    if (isLoading) {
        return <p>Loading...</p>
    }
    if (isError) {
        return <p>something wrong : {error}</p>
    }
    console.log(allAssignments)
    return (
        <div className="mt-3 mb-16">
            <div className="">
                <div>
                    <select onChange={(e) => setLevels(e.target.value)} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="level" id="">
                        <option disabled selected>Choose one</option>
                        {categories.map((item) => (
                            <option key={item} value={item}> {item}</option>
                        ))}

                    </select>
                </div>
                <div>
                    <h1 className="text-5xl font-bold text-green-500 text-center mb-7">All Assignment</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    isLoading ? <p>Loading...</p> : allAssignments?.data?.result?.map(allAssignment => <AssignmentCard key={allAssignment._id} allAssignment={allAssignment}></AssignmentCard>)
                }
            </div>
            <div className="mb-20 flex justify-center mt-20">
                { isLoading ? <p>Loading...</p> :
                 <div className="join border-2 border-primary">
                 <button onClick={handlePrivious} className="join-item btn btn-ghost">prev</button>
                { Array(totallPage).fill(0).map((item, index) => 
                {
                     const pageNumber = index + 1;
                 return (
                     <button key={pageNumber} onClick={() => setPage(pageNumber)} className={`${pageNumber === page  ? 'join-item btn btn-primary' : 'join-item btn btn-ghost'}`}>{pageNumber}</button>
                 )
                 }
                )}
                 <button onClick={handleNext} className="join-item btn btn-ghost">next</button>
             </div>
                }
            </div>
        </div>
    );
};

export default AssignmentPage;
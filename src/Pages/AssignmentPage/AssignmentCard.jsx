import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";



const AssignmentCard = ({ allAssignment }) => {
    const queryClient = useQueryClient();
    const { user } = useAuth();
    const { _id, level, email, marks, photo, title } = allAssignment;

    const {mutate} = useMutation({
        mutationFn: async (_id) =>{
          axios.delete(`https://online-group-study-server-iota.vercel.app/assignments/${_id}?userEmail=${user.email}&productEmail=${email}`)
          .then(res => {
            console.log(res.data);
            const value = res.data;
            
            if (value.deletedCount > 0) {
                Swal.fire(
                    'Deleted!',
                    'Your card has been deleted.',
                    'success'
                )
                
            }

          })
        },
        onSuccess: () =>{
            queryClient.invalidateQueries({ queryKey: ['service'] })
        }
    })


    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
       
                mutate(_id)

                
            }
        })
    }
    return (
        <div>
            <div className="w-full max-w-sm bg-white border border-gray-200 transition duration-300 ease-in-out hover:scale-110 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className=" h-[250px] w-full bg-cover rounded-t-lg" src={photo} alt="product image" />
                </a>
                <div className="px-3 pb-5">
                    <a href="#">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-3">{title}</h5>
                    </a>
                    <div className="py-3">
                        <h3 className="text-xl font-medium">Assignment difficulty level : {level}</h3>
                        <h3 className="text-lg font-medium">Marks : {marks}</h3>
                    </div>
                    <div className="flex items-center justify-between">
                        <Link to={`/details/${_id}`}><button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View Assignment</button></Link>
                        <Link to={`/updates/${_id}`}> <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Update Assignment</button></Link>
                        {user?.email === email &&
                            <Link><button onClick={() => handleDelete(_id)} type="button" className="text-white pr-3 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete Assignment</button></Link>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AssignmentCard;
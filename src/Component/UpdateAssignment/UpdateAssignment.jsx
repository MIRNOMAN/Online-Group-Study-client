import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());

    const alldata = useLoaderData();
    const { _id, level, marks, photo, description, date, title } = alldata;


    const handleAssignmentUpdate =(e) =>{
        e.preventDefault();
      const form = e.target;
      const title = form.title.value;
      const level = form.level.value;
      const marks = form.marks.value;
      const date = form.date.value;
      const description = form.description.value;
      const photo = form.photo.value;

      const updateUser = { title, level, marks, date, description, photo }
     console.log(updateUser)
     

      fetch(`http://localhost:5000/updates/${_id}`,  {
         method: 'PUT',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(updateUser)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
               Swal.fire({
                  title: 'success',
                  text: 'Assignment update successfully',
                  icon: 'success',
                  confirmButtonText: 'Done'
               })
            }
         })
    }
    return (
        <div>
             <div className=" bg-[#F4F3F0] mt-4 px-16 py-10">
                <h1 className="text-4xl font-semibold text-center rancho">Update Assignment </h1>
                <p className="text-xl font-normal raleway text-center mt-4">Please provide me with the specific topic or subject of the assignment, and any additional details you'd like to include, and I'll generate a concise description for you.</p>


                <div className="mt-9">
                    <form onSubmit={handleAssignmentUpdate} >
                        <div className="md:flex mt-4">
                            <div className="lg:w-1/2 ">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input type="text" name="title" defaultValue={title} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title " required />
                            </div>

                            <div className="lg:w-1/2 lg:ml-4 w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Assignment difficulty level</label>
                                <select defaultValue={level}  className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="level" id="">
                                    <option value="easy">easy</option>
                                    <option value="medium">medium</option>
                                    <option value="hard">hard</option>
                                </select>
                            </div>
                        </div>
                        <div className="md:flex mt-4">
                            <div className="lg:w-1/2 ">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marks</label>
                                <input type="number" defaultValue={marks} name="marks" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Marks " required />
                            </div>

                            <div className="lg:w-1/2 lg:ml-4">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                                <DatePicker name="date" defaultValue={date} className="bg-gray-50 border   border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" selected={startDate}  onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                        <div className="md:flex mt-4">
                            <div className="lg:w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Description</label>
                                <input type="text" name="description" defaultValue={description} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short description " required />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                            <input type="text" name="photo" defaultValue={photo} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Photo URL" required />
                        </div>

                        <input type="submit" value='Update assignment' className="text-white w-full mt-3 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" />

                    </form>

                </div>

            </div>
        </div>
    );
};

export default UpdateAssignment;
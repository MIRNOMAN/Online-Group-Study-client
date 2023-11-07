import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";




const GiveMark = () => {
    const {link,name, message,email ,title,level,marks,photo} = useLoaderData();

    const handleMarkAssignment = (e) =>{
        e.preventDefault();
        const form = e.target;
        const giveMark = form.giveMark.value;
        const feedback = form.feedback.value;
        const status = 'complete';
        
        const totalluser = {link,name, message,email,status,giveMark,feedback,title,level,marks,photo};
         
        fetch('http://localhost:5000/submittedAssignment',{
            method: 'PATCH',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(totalluser)
        })
        .then(res => res.json())
         .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
               Swal.fire({
                  title: 'success',
                  text: 'Assignment Marks successfully',
                  icon: 'success',
                  confirmButtonText: 'Done'
               })
            }
         })
    }

   
    return (
        <div>
            <div className="bg-[#F9F9F9] md:h-[700px] md:px-28  mx-auto mb-20 rounded-xl shadow-lg">
           <form onSubmit={handleMarkAssignment}>
           <h1 className="text-5xl font-bold pt-12 text-center"> Assignment Mark</h1>
           <h1 className="mt-5 text-xl">PDF : {link}</h1>
           <h1 className="mt-5 text-xl">Note : {message}</h1>

            <div className="mt-6">
                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Give marks</label>
                <input type="text" name="giveMark"  className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Marks" required />
            </div>
            <div className="mt-6">
                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Feedback</label>
                <textarea id="message" name="feedback" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Feedback here..."></textarea>
            </div>

            <button type="submit" className="text-white mt-5 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-xl px-5 w-full py-2.5 text-center mr-2 mb-2">Submitted assignment</button>
           </form>
        </div>
        </div>
    );
};

export default GiveMark;
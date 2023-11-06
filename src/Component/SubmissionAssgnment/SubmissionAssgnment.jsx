import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";



const SubmissionAssgnment = () => {
    const {user} = useAuth();
 
    const handleSubmitAssignment = (e) => {
        e.preventDefault();
      const form = e.target;
      const link = form.link.value;
      const message = form.message.value;
      const email = user.email;
      const status = 'pending';
    

      const submitted = {link, message,email,status }
      
        fetch('http://localhost:5000/submittedAssignment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitted)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Take Assignment successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }
    return (
        <div className="bg-[#F9F9F9] md:h-[550px] md:px-28  mx-auto mb-20 rounded-xl shadow-lg">
           <form onSubmit={handleSubmitAssignment}>
           <h1 className="text-5xl font-bold pt-12 text-center"> Assignment Submission Form</h1>
            <div className="mt-10">
                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Assignment PDF link</label>
                <input type="text" name="link" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="PDF link " required />
            </div>
            <div className="mt-6">
                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Assignment quick note</label>
                <textarea id="message" name="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            </div>

            <button  type="submit" className="text-white mt-5 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-xl px-5 w-full py-2.5 text-center mr-2 mb-2">Submitted assignment</button>
           </form>
        </div>
    );
};

export default SubmissionAssgnment;
import { Link, useLoaderData } from "react-router-dom";


const AssignmentDetails = () => {
    const data = useLoaderData();

    const { _id, level, marks, photo, description, date, title } = data;

    return (
        <div className="bg-[#F9F9F9] md:h-[550px] p-4 md:flex justify-around mx-auto mb-20 rounded-xl shadow-lg">
            <div className="md:w-1/2 md:pl-[120px] md:pt-[70px]">
                <img className="md:h-[350px] md:w-[350px] transition duration-300 ease-in-out hover:scale-110  rounded-lg shadow-md" src={photo} alt="" />
            </div>
            <div className="md:h-2/3 w-0 border-2 mt-20 border-gray-500"></div>
            <div className="md:w-1/2">
                <div className="md:pl-[60px] md:pr-[60px] md:pt-[60px]">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <hr className="w-full h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-6 dark:bg-gray-700"></hr>
                    <p className="text-xl text-[#3D3D4E] font-medium">{description}</p>
                    <div className="text-[#3D3D4E] space-y-3 mt-3 font-semibold text-lg">
                        <h1>Date : {date}</h1>
                        <h1>Marks : {marks}</h1>
                    </div>
                    <p className="text-[#3D3D4E] mt-3 font-semibold text-lg">Assignment difficulty level :   <span className=" font-medium ml-3">{level}</span></p>
                    <hr className="w-full h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-6 dark:bg-gray-700"></hr>
                    <Link to={`/submission/${_id}`}>
                        <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-xl px-5 w-full py-2.5 text-center mr-2 mb-2">Take assignment</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;
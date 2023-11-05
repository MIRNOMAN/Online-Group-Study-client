

const AssignmentCard = ({ allAssignment }) => {
    const { _id, level, marks, photo, title } = allAssignment;
    return (
        <div>
            <div className="w-full max-w-sm bg-white border border-gray-200 transition duration-300 ease-in-out hover:scale-110 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className=" h-[250px] w-full bg-cover rounded-t-lg" src={photo} alt="product image" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-3">{title}</h5>
                    </a>
                   <div className="py-3">
                    <h3 className="text-xl font-medium">Assignment difficulty level : {level}</h3>
                    <h3 className="text-lg font-medium">Marks : {marks}</h3>
                   </div>
                    <div className="flex items-center justify-between"> 
                        <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View Assignment</button>
                        <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Update Assignment</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AssignmentCard;
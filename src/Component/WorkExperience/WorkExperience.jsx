import work1 from "../../assets/images/work1.png"
import work2 from "../../assets/images/work2.png"
import work3 from "../../assets/images/work3.png"
import work4 from "../../assets/images/work4.png"

const WorkExperience = () => {
    return (
        <div className="mt-10">
            <div className="text-center text-white">
                <h3 className="font-bold text-[#70B641]">WEB-BASED EXPERIENCE</h3>
                <h1 className="text-3xl font-extrabold mt-2">How it Works</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-4/6 mx-auto mt-16 gap-6 mb-24 ">
                <div className="text-white text-start mt-10">
                    <img className="h-[60px] w-[60px]" src={work1} alt="" />

                    <h1 className="text-2xl font-extrabold mt-2">Create classes</h1>
                    <p className="mt-2">Manage your students by section or subject, whatever makes sense for you.</p>

                </div>
                <div className="text-white text-start mb-5">
                    <img className="h-[110px] w-[110px]" src={work2} alt="" />

                    <h1 className="text-2xl mt-2 font-extrabold">Share your class token</h1>
                    <p className="mt-2">Students gain access to your classroom via a unique token.</p>

                </div>
                <div className="text-white text-start">
                    <img className="h-[60px] w-[60px]" src={work3} alt="" />

                    <h1 className="text-2xl mt-2 font-extrabold">Assign lessons</h1>
                    <p className="mt-2">Customize what your students will learn with our fully customizable classroom manager.</p>

                </div>
                <div className="text-white text-start">
                    <img className="h-[50px] w-[50px]" src={work4} alt="" />

                    <h1 className="text-2xl mt-2 font-extrabold">Review and grade</h1>
                    <p className="mt-2">Our backend classroom manager includes innovative fuctions to help you manage student progress and success.</p>

                </div>
            </div>
        </div>
    );
};

export default WorkExperience;
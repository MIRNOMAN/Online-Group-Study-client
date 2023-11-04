

const FaqQuestion = () => {
    return (
        <div className="bg-gray-950 h-[700px] text-center pt-10 mt-20">
            <div>
                <h2 className="text-2xl font-bold text-[#70B641]">HAVE A QUESTION?</h2>
                <h1 className="text-5xl font-extrabold mt-3 text-white">Frequently Asked Questions</h1>
            </div>
            <div className="w-5/6 mx-auto space-y-2 mt-9">
                <div className="collapse bg-gray-900 py-4 text-white">
                    <input type="radio" name="my-accordion-1" checked="checked" />
                    <div className="collapse-title text-xl text-start  font-medium">
                    Can I register if I am not a teacher?
                    </div>
                    <div className="collapse-content">
                        <p className="text-start">Only educators can access the teacher application. If you are interested in a preview or have a specific  request for use, please contact us at <span className="text-[#70B641]">classroom.support@switchon.org.</span></p>
                    </div>
                </div>
                <div className="collapse bg-gray-900 text-white">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl text-start font-medium">
                    I am a parent and would like to use Classroom? How do I register and sign up my child(ren)?
                    </div>
                    <div className="collapse-content">
                    <p className="text-start">Please contact us at <span className="text-[#70B641]">classroom.support@switchon.org.</span> to request a special login. </p>
                    </div>
                </div>
                <div className="collapse bg-gray-900 text-white">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl text-start font-medium">
                    Can I preview the student experience?
                    </div>
                    <div className="collapse-content">
                    <p className="text-start">Yes. To see how a student sees the lessons, click the “preview” button above the activity title in each lesson. If you register as a student using the same email address as your educator account, you will also be able to see the student platform experience on the main menu after you have logged in. </p>
                    </div>
                </div>
                <div className="collapse bg-gray-900 text-white">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl text-start font-medium">
                    How do students enroll in a class?
                    </div>
                    <div className="collapse-content">
                    <p className="text-start">Students can sign up on the <span className="text-[#70B641]">student registration</span>  page. To access class assignments, they will enter a unique token provided by an educator. Lessons must be assigned. </p>
                    </div>
                </div>
                <div className="collapse bg-gray-900 text-white">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl text-start font-medium">
                    Do students have to login in order to use Switch Classroom?
                    </div>
                    <div className="collapse-content">
                    <p className="text-start">Please contact us at <span className="text-[#70B641]">classroom.support@switchon.org.</span> to request a special login. </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FaqQuestion;
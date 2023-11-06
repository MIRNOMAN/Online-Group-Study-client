import feature1 from "../../assets/images/feature1.svg"
import feature2 from "../../assets/images/feature2.svg"
import feature3 from "../../assets/images/feature3.svg"
import feature4 from "../../assets/images/feature4.svg"
import feature5 from "../../assets/images/feature5.svg"
import feature6 from "../../assets/images/feature6.svg"

const CardFeature = () => {
    return (
        <div className="mt-20">
            <div>
                <h1 className="text-5xl font-bold text-center mt-6">Discover Study Together</h1>

                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20">
                        {/* first card */}
                        <div className="card w-full  shadow-xl">
                            <figure><img className="h-[200px] transition duration-300 ease-in-out hover:scale-110 " src={feature1} alt="Shoes" /></figure>
                            <div className="card-body flex-1" data-aos="zoom-in">
                                <h2 className="card-title text-3xl font-bold">Own Study Universe</h2>
                                <p className="text-xl ">Create your very own study room with atmospheric <span className="font-bold">backgrounds, personal timers, and goals.</span></p>
                            </div>
                        </div>
                         {/* 2nd card */}
                         <div className="card w-full  shadow-xl">
                            <figure><img className="h-[200px] transition duration-300 ease-in-out hover:scale-110 " src={feature2} alt="Shoes" /></figure>
                            <div className="card-body flex-1" data-aos="zoom-in">
                                <h2 className="card-title text-3xl font-bold">Group Study Rooms</h2>
                                <p className="text-xl ">Join <span className="font-bold">motivated students</span>from all over the world to boost your <span className="font-bold"> productivity</span> and find your study flow.</p>
                            </div>
                        </div>
                         {/* 3rd card */}
                         <div className="card w-full  shadow-xl">
                            <figure><img className="h-[200px] transition duration-300 ease-in-out hover:scale-110 " src={feature3} alt="Shoes" /></figure>
                            <div className="card-body flex-1" data-aos="zoom-in">
                                <h2 className="card-title text-3xl font-bold">Free Tutor Help!</h2>
                                <p className="text-xl ">Feeling stuck? Just raise your hand and one of our <span className="font-bold">expert community tutors</span>will jump in and help.</p>
                            </div>
                        </div>
                         {/* 4th card */}
                         <div className="card w-full  shadow-xl">
                            <figure><img className="h-[200px] transition duration-300 ease-in-out hover:scale-110 " src={feature6} alt="Shoes" /></figure>
                            <div className="card-body flex-1" data-aos="zoom-in">
                                <h2 className="card-title text-3xl font-bold">Mindfulness</h2>
                                <p className="text-xl ">Balance is crucial – check out our <span className="font-bold">mindfulness exercises</span>to give your mind a breather.</p>
                            </div>
                        </div>
                         {/* 5th card */}
                         <div className="card w-full  shadow-xl">
                            <figure><img className="h-[200px] transition duration-300 ease-in-out hover:scale-110 " src={feature4} alt="Shoes" /></figure>
                            <div className="card-body flex-1" data-aos="zoom-in">
                                <h2 className="card-title text-3xl font-bold">Own Study Universe</h2>
                                <p className="text-xl ">Create your very own study room with atmospheric <span className="font-bold">backgrounds, personal timers, and goals.</span></p>
                            </div>
                        </div>
                         {/* 7th card */}
                         <div className="card w-full  shadow-xl">
                            <figure><img className="h-[200px] transition duration-300 ease-in-out hover:scale-110 " src={feature5} alt="Shoes" /></figure>
                            <div className="card-body flex-1" data-aos="zoom-in">
                                <h2 className="card-title text-3xl font-bold">Study Stats</h2>
                                <p className="text-xl ">See your <span className="font-bold">progress </span>every day in your Stats and on the <span className="font-bold">community leaderboard. </span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardFeature;
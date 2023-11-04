import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from "../../assets/images/onlineClass1.png"
import banner2 from "../../assets/images/onlineClass2.png"
import banner3 from "../../assets/images/onlineClass3.png"
import banner4 from "../../assets/images/onlineClass4.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Banner = () => {

    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className='lg:flex justify-center items-center space-x-5 bg-base-300 h-[500px]'>
                        <div className='lg:w-1/2  ml-16'>
                            <h1 className='text-6xl tracking-widest font-bold text-blue-400'>Online Group Study </h1>
                            <p className='text-xl mt-4'>Boost your productivity and learning with our Online Group Study Sessions. Join us for structured study, interactive discussions, and peer support. Let's excel together!</p>
                            <button type="button" className="text-white mt-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">READ MORE</button>
                        </div>
                        <div className='lg:w-1/2'>
                            <img src={banner1} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:flex justify-center items-center space-x-5 bg-base-300 h-[500px]'>
                        <div className='lg:w-1/2  ml-16'>
                            <h1 className='text-6xl tracking-widest font-bold text-blue-400'>Online Group Study </h1>
                            <p className='text-xl mt-4'>Boost your productivity and learning with our Online Group Study Sessions. Join us for structured study, interactive discussions, and peer support. Let's excel together!</p>
                            <button type="button" className="text-white mt-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">READ MORE</button>
                        </div>
                        <div className='lg:w-1/2'>
                            <img src={banner2} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:flex justify-center items-center space-x-5 bg-base-300 h-[500px]'>
                        <div className='lg:w-1/2  ml-16'>
                            <h1 className='text-6xl tracking-widest font-bold text-blue-400'>Online Group Study </h1>
                            <p className='text-xl mt-4'>Boost your productivity and learning with our Online Group Study Sessions. Join us for structured study, interactive discussions, and peer support. Let's excel together!</p>
                            <button type="button" className="text-white mt-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">READ MORE</button>
                        </div>
                        <div className='lg:w-1/2'>
                            <img src={banner3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:flex justify-center items-center space-x-5 bg-base-300 h-[500px]'>
                        <div className='lg:w-1/2  ml-16'>
                            <h1 className='text-6xl tracking-widest font-bold text-blue-400'>Online Group Study </h1>
                            <p className='text-xl mt-4'>Boost your productivity and learning with our Online Group Study Sessions. Join us for structured study, interactive discussions, and peer support. Let's excel together!</p>
                            <button type="button" className="text-white mt-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">READ MORE</button>
                        </div>
                        <div className='lg:w-1/2'>
                            <img src={banner4} alt="" />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;
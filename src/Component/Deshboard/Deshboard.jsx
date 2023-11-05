import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Deshboard = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <div className="mt-20">
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="text-4xl font-normal text-center ">
                <h1  >Our <span className="text-[#FF6F61] font-bold" >student community</span> is <span className="text-[#FF6F61] font-bold"> more than one million</span> strong</h1>
                <h1>(and this is just the beginning)</h1>
            </div>
            <div className="lg:flex  justify-between mt-14">
                <div className="text-[#9656A1] text-center">
                    <h1 className="text-6xl font-extrabold">+{ counterOn && <CountUp start={0} end={400} duration={2} delay={0}></CountUp>}K</h1>
                    <p>community members</p>
                </div>
                <div className="text-[#9656A1] text-center">
                    <h1 className="text-6xl font-extrabold">+{ counterOn && <CountUp start={0} end={100} duration={2} delay={0}></CountUp>}K</h1>
                    <p>study sessions</p>
                </div>
                <div className="text-[#9656A1] text-center">
                    <h1 className="text-6xl font-extrabold">+{ counterOn && <CountUp start={0} end={300} duration={2} delay={0}></CountUp>}K</h1>
                    <p>study goals reached</p>
                </div>
                <div className="text-[#9656A1] text-center">
                    <h1 className="text-6xl font-extrabold">+{ counterOn && <CountUp start={0} end={150} duration={2} delay={0}></CountUp>}</h1>
                    <p>countries</p>
                </div>
                <div className="text-[#9656A1] text-center">
                    <h1 className="text-6xl font-extrabold">{ counterOn && <CountUp start={0} end={4} duration={5} delay={0}></CountUp>}/5</h1>
                    <p>positive reviews</p>
                </div>
            </div>
          
            </ScrollTrigger>
           
        </div>
    );
};

export default Deshboard;
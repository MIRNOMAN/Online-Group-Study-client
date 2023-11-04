import Lottie from "lottie-react";
import errorAnimation from "../../assets/errorAnimation.json"

const ErrorPage = () => {
    return (
        <div>
            <Lottie className="h-screen" animationData={errorAnimation}></Lottie>
        </div>
    );
};

export default ErrorPage;
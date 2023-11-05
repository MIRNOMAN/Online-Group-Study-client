import Banner from "../../Component/Banner/Banner";
import CardFeature from "../../Component/CardFeature/CardFeature";
import Deshboard from "../../Component/Deshboard/Deshboard";
import FaqQuestion from "../../Component/FaqQuestion/FaqQuestion";


const Home = () => {
    return (
        <div className="mt-5 pb-12 ">
          <Banner></Banner>
          <CardFeature></CardFeature>
          <Deshboard></Deshboard>
          <FaqQuestion></FaqQuestion>
        </div>
    );
};

export default Home;
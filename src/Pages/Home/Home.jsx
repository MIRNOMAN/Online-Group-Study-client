import Banner from "../../Component/Banner/Banner";
import CardFeature from "../../Component/CardFeature/CardFeature";
import FaqQuestion from "../../Component/FaqQuestion/FaqQuestion";


const Home = () => {
    return (
        <div className="mt-5 pb-12">
          <Banner></Banner>
          <CardFeature></CardFeature>
          <FaqQuestion></FaqQuestion>
        </div>
    );
};

export default Home;

import Banner from "../components/shared/ui/Banner";
import Destination from "../components/shared/ui/Destination";
import Picking from "../components/shared/ui/Picking";
import TopDestination from "../components/shared/ui/TopDestination";
import TripPlan from "../components/shared/ui/TripPlan";


const Home = () => {
  return (
    <div>
      <Banner/>
      <Picking/>

      <Destination/>
      <TripPlan/>
      <TopDestination/>
      
    </div>
  );
};

export default Home;

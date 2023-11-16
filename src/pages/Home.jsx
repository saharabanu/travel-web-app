import Footer from "../components/shared/Footer";
import Banner from "../components/shared/ui/Banner";
import Destination from "../components/shared/ui/Destination";
import Searchbar from "../components/shared/ui/Searchbar";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Searchbar/>
      <Destination/>
      <Footer/>
    </div>
  );
};

export default Home;

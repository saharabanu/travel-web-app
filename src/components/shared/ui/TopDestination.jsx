import { Link } from "react-router-dom";
import uk from "../../../assets/images/uk.jpg";
import turkey from "../../../assets/images/turkey.jpg";
import thailand from "../../../assets/images/thailand.jpg";
import france from "../../../assets/images/france.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TopDestination = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="px-16 py-10">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold py-4">Top Destinations</h2>
          <Link to="/" className="text-right hover:text-blue-900 font-bold">
            See All{" "}
          </Link>
        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-8">
          <div className="">
            <div data-aos="fade-up" data-aos-duration="3000">
              <div className="">
                <img src={turkey} alt="" className="h-64" />
              </div>
            </div>
            <div>
              <h2 className="font-bold text-xs py-1">Turkey</h2>
              <p className="text-sm text-gray-400">546 Travelers</p>
            </div>
          </div>
          <div className="">
            <div data-aos="fade-up" data-aos-duration="3000">
              <div className="">
                <img src={thailand} alt="" className="h-64"  />
              </div>
            </div>
            <div>
              <h2 className="font-bold text-xs py-1">Thailand</h2>
              <p className="text-sm text-gray-400">546 Travelers</p>
            </div>
          </div>
          <div className="">
            <div data-aos="fade-up" data-aos-duration="3000">
              <div className="">
                <img src={france} alt="" className="h-64" />
              </div>
            </div>
            <div>
              <h2 className="font-bold text-xs py-1">France</h2>
              <p className="text-sm text-gray-400">546 Travelers</p>
            </div>
          </div>
          <div className="">
            <div data-aos="fade-up" data-aos-duration="3000">
              <div className="">
                <img src={uk} alt="" className="h-64" />
              </div>
            </div>
            <div>
              <h2 className="font-bold text-xs py-1">United Kingdom</h2>
              <p className="text-sm text-gray-400">546 Travelers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestination;

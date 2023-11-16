import { Link } from "react-router-dom";
import uk from "../../../assets/images/uk.jpg";
import turkey from "../../../assets/images/turkey.jpg";
import thailand from "../../../assets/images/thailand.jpg";
import france from "../../../assets/images/france.jpg";

const TopDestination = () => {
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
            <div className="">
              <img src={turkey} alt="" />
            </div>
            <div>
              <h2 className="font-bold text-xs py-1">Turkey</h2>
              <p className="text-sm text-gray-400">546 Travelers</p>
            </div>
          </div>
          <div className="">
            <div className="">
              <img src={thailand} alt="" />
            </div>
            <div>
              <h2 className="font-bold text-xs py-1">Thailand</h2>
              <p className="text-sm text-gray-400">546 Travelers</p>
            </div>
          </div>
          <div className="">
            <div className="">
              <img src={france} alt="" />
            </div>
            <div>
              <h2 className="font-bold text-xs py-1">France</h2>
              <p className="text-sm text-gray-400">546 Travelers</p>
            </div>
          </div>
          <div className="">
            <div className="">
              <img src={uk} alt="" />
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

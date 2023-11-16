import bannerImg1 from '../../../assets/images/banner-1.jpg';
import bannerImg2 from '../../../assets/images/banner-2.jpg';

const Banner = () => {
  return (
    <div className="bg-blue-900 pb-36">
      <div className="container flex flex-col md:flex-row justify-between items-center px-6 md:px-20 pt-10 ">
        <div className="md:pr-10 md:w-1/2 space-y-3">
          <h4 className="text-yellow-400 font-semibold italic">Explore The</h4>
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
            Travel & <br />Adventures
          </h1>
          <p className="text-white text-sm pb-20">Find awesome hotels, tours, cars, and activities in London</p>
        </div>

        <div className="md:w-1/2  flex flex-col md:flex-row justify-center items-center mt-6 md:mt-0">
          <img src={bannerImg2} className="w-full md:w-72 pr-10 lg:mt-[-154px]" alt="" />
          <img src={bannerImg1} className="w-full md:w-80 z-1 " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
/* eslint-disable react/prop-types */
// import banner from "../assets/images/commonbanner.jpg";

const CommonBanner = () => {
    const currentPath = window.location.pathname;
  return (
    <div className="h-52 bg-banner-image bg-no-repeat bg-center bg-cover relative">
        <div className="absolute flex justify-center items-center max-w-6xl container m-auto pt-16">
                 <div className="">
                 <h2 className="text-white text-2xl"> About</h2>
                 <ul className="flex text-white">
      <li className={currentPath === '/' ? 'text-red-500' : ''}>
        <a href="/">Home / {' '}</a>
      </li>
      <li className={currentPath === '/about' ? 'text-red-500' : ''}>
        <a href="/about"> About Us</a>
      </li>
    </ul>
                 </div>
        </div>
    </div>
  );
};

export default CommonBanner;

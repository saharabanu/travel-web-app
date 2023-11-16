import { useState } from "react";
 import avatar from '../../assets/images/sahara-new-rounded.png'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.auth";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineTravelExplore } from "react-icons/md";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [user, loading] = useAuthState(auth);
  console.log(user);
  const navigate = useNavigate();
  if (loading) {
    // You can optionally render a loading indicator here
    return <div>Loading...</div>;
  }
  // console.log(user);
  const logout = () => {
    signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="w-full bg-white shadow sticky top-0 z-10">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <h2 className="text-2xl font-bold  flex items-center text-yellow-500">
                <span className="text-yellow-500 pr-1">
                  <MdOutlineTravelExplore />
                </span>{" "}
                Trisog
              </h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-white bg-blue-900 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-black hover:text-red-500">
                <Link to="/">Home</Link>
              </li>
              <li className="text-black hover:text-red-500">
                <Link to="/about">About</Link>
              </li>
              <li className="text-black hover:text-red-500">
                <Link to="/">Tours</Link>
              </li>
              <li className="text-black hover:text-red-500">
                <Link to="/">Destination</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block ">
          {user ? (
            <div className="flex items-center">
              <p className="pr-5">{user?.displayName}</p>
              <img src={avatar} alt="avatar" className="w-16 pr-5" />
              <button onClick={logout} className="border bg-yellow-500 px-2 py-1 rounded">
                Log out
              </button>
            </div>
          ) : (
            <Link to="/login" className="px-4 py-2 text-black   ">
              Log in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;

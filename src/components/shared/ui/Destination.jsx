import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";



const breakpoints = {
  640: {
    slidesPerView: 1,
    spaceBetween: 30,
    
  },
  // 576: {
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  // },
  786: {
    slidesPerView: 2,
    spaceBetween: 30,
    
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 30,
    
  },
};

const Destination = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);

  // for fecthing data

  // const [items,setItems] = useState([])
  // useEffect(()=>{
  //     fetch('/data.json')
  //     .then(res=>res.json())
  //     .then(data=>setItems(data))
  // },[]);

  // for searching destination

  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);
  const navigate = useNavigate();

  // const handleSearch = () => {

  //   setSearching(true);

  //   setTimeout(() => {

  //     const filteredItems = items.filter(item =>
  //       item.location.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setItems(filteredItems);

  //     setSearching(false);
  //   }, 1000);
  // };

  useEffect(() => {
    
    const searchItems = async () => {
      
      setSearching(true);

    
      const response = await fetch("/data.json");
      const data = await response.json();

      // Filter items based on the search term
      const filteredItems = data.filter((item) =>
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setItems(filteredItems);

      // Set searching back to false once the search is complete
      setSearching(false);
    };

    
    searchItems();
  }, [searchTerm]);

  const handleBooking = (id) => {
    if (!user) {
      navigate("/login");
      return;
    }

    // Display your animation here (you can use a modal or a dropdown)
    const userName = prompt("Enter your name:");
    const userEmail = prompt("Enter your email:");
    const userPhone = prompt("Enter your phone:");
    const desiredDate = prompt("Enter desired date:");

    // Save booking details to local storage
    const bookingData = {
      userName,
      userEmail,
      userPhone,
      desiredDate,
    };
    localStorage.setItem(`booking_${id}`, JSON.stringify(bookingData));

    toast.success("Booking successful!");

    navigate("/");
  };

  

  return (
    <>
      <div className="bg-blue-900 mb-10 py-14">


        <div className="px-16  ">
          <div>
            <h2 className="font-bold text-white ">Destination</h2>

            {/*  input for searching  */}

            <div className="flex mt-4">
              <input
                type="text"
                placeholder="Search by location"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                className="px-4 py-2 border rounded mr-2 mb-5"
              />
            </div>

            {searching && <p className="mt-4 text-gray-500">Searching...</p>}
          </div>

          <div className="">
            <Swiper
            
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={breakpoints}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {items?.map((item) => (
                <SwiperSlide key={item?.id}>
                  <div className=" rounded-lg shadow-lg">
                    <a href={`/destination/${item?.id}`}>
                      <img src={item?.img} className="h-36 w-full" alt="img" />
                    </a>
                    <div className="bg-white px-3 py-5">
                      <p className="text-sm text-gray-400">{item?.location}</p>
                      <h4 className="font-semibold text-yellow-500 py-2">{item?.title}</h4>
                      <hr />
                      <div className="flex justify-between items-center py-2 ">
                        <p className="text-sm text-gray-400">Starting From</p>
                        <p className="font-semibold text-yellow-500">${item?.price}</p>
                      </div>
                      <button
                        onClick={() => handleBooking(item?.id)}
                        className="bg-blue-900 text-white px-2 py-1 rounded"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;

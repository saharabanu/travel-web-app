import { useEffect, useState } from "react";
// import banner from "../../../assets/images/banner-1.jpg";

// const data = [
//     { 
//         id: 1 ,
//         img:banner,
//         title:"fgg",
//         location:"Greater London, UK",
//         desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, blanditiis itaque esse assumenda eveniet fugiat harum possimus maiores labore dolore perspiciatis rerum, amet obcaecati quae nam asperiores veritatis pariatur fugit.",
//         price:45,

//     },
//     { 
//         id: 2 ,
//         img:banner,
//         title:"fgg",
//         location:"Greater London, UK",
//         desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, blanditiis itaque esse assumenda eveniet fugiat harum possimus maiores labore dolore perspiciatis rerum, amet obcaecati quae nam asperiores veritatis pariatur fugit.",
//         price:34,

//     },
//     { 
//         id: 3 ,
//         img:banner,
//         title:"fgg",
//         location:"Greater London, UK",
//         desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, blanditiis itaque esse assumenda eveniet fugiat harum possimus maiores labore dolore perspiciatis rerum, amet obcaecati quae nam asperiores veritatis pariatur fugit.",
//         price:100,

//     },
//     { 
//         id: 4 ,
//         img:banner,
//         title:"fgg",
//         location:"Greater London, UK",
//         desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, blanditiis itaque esse assumenda eveniet fugiat harum possimus maiores labore dolore perspiciatis rerum, amet obcaecati quae nam asperiores veritatis pariatur fugit.",
//         price:78,

//     }
// ];

const Destination = () => {

    const [items,setItems] = useState([])
    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
  return (
    <>
      <div className="px-6 mt-16 ">
        <div>
          <h2 className="font-bold">Destination</h2>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3">
          {items?.map((item) =>(<a key={item?.id} href={`/destination/${item?.id}`}>
            <div className="border">
              <img src={item?.img} className="h-36 w-full" alt="img" />
              <div className="bg-white px-3 py-5">
                <p className="text-sm text-gray-400">{item?.location}</p>
                <h4 className="font-semibold">{item?.title}</h4>
                <hr />
                <div className="flex justify-between items-center py-2 ">
                  <p className="text-sm text-gray-400">Starting From</p>
                  <p className="font-semibold">${item?.price}</p>
                </div>
              </div>
            </div>
          </a>))}
          
        </div>
      </div>
    </>
  );
};

export default Destination;

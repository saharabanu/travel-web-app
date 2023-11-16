

const Searchbar = () => {
  return (
    <div className="bg-white  m-auto lg:max-w-5xl  container lg:mt-[-150px] sm:mt-[-290px]  p-10 rounded-lg z-20 sm:space-y-3 sm:max-w-8xl">
       
       <div className=" lg:flex md:flex-row justify-between items-center  sm:space-y-3">
       <div>
        <label >Destination</label>
        <input type="text" placeholder="Where to go" className=" border rounded text-black outline-none px-2 py-1"/>
       </div>
       <div>
        <label >Type</label>
        <input type="text" placeholder="Activity" className=" border rounded text-black outline-none px-2 py-1"/>
       </div>
       <div>
        <label >Where</label>
        <input type="date" placeholder="Date" className=" border rounded text-black outline-none px-2 py-1"/>
       </div>
       <div>
        <label >Guests</label>
        <input type="number" className=" border rounded text-black outline-none px-2 py-1" placeholder="0"/>
       </div>
       <div>
       
        <input type="submit" className="bg-yellow-500 px-3 py-1 mt-5 border rounded" value="Search"/>
       </div>
          
       </div>
    </div>
  )
}

export default Searchbar
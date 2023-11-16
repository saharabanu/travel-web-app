import { GiModernCity } from "react-icons/gi";

const Picking = () => {
  return (
    <div className="px-16">
        <div>
        <h5 className="text-2xl pt-5 text-blue-500 text-center" style={{ fontFamily: "Dancing Script" }}>
           Browse By Category
          </h5>
            <h2 className="text-2xl font-semibold text-center py-2">Pick A Tour Type</h2>

            <div className="grid lg:grid-cols-6 sm:grid-cols-3 md:grid-cols-3 gap-10 py-10">
                   <div className="bg-white shadow-lg text-center py-3">
                    <div className=" bg-yellow-400 rounded-full  w-14 h-14 text-center m-auto">
                   <span className=" flex justify-center items-center text-center pt-3 text-2xl text-black ">
                   <GiModernCity />
                   </span>  
                    </div>
                   <div className="space-y-1">
                   <h6 className="text-xs font-bold pt-2">City Tours</h6>
                    <p className="text-sm text-slate-400">10 Tours+</p>
                   </div>
                   </div>
                   <div className="bg-white shadow-lg text-center py-3">
                    <div className=" bg-yellow-400 rounded-full  w-14 h-14 text-center m-auto">
                   <span className=" flex justify-center items-center text-center pt-3 text-2xl text-black ">
                   <GiModernCity />
                   </span>  
                    </div>
                   <div className="space-y-1">
                   <h6 className="text-xs font-bold pt-2">Beaches</h6>
                    <p className="text-sm text-slate-400">10 Tours+</p>
                   </div>
                   </div>
                   <div className="bg-white shadow-lg text-center py-3">
                    <div className=" bg-yellow-400 rounded-full  w-14 h-14 text-center m-auto">
                   <span className=" flex justify-center items-center text-center pt-3 text-2xl text-black ">
                   <GiModernCity />
                   </span>  
                    </div>
                   <div className="space-y-1">
                   <h6 className="text-xs font-bold pt-2">Boat Tours</h6>
                    <p className="text-sm text-slate-400">10 Tours+</p>
                   </div>
                   </div>
                   <div className="bg-white shadow-lg text-center py-3">
                    <div className=" bg-yellow-400 rounded-full  w-14 h-14 text-center m-auto">
                   <span className=" flex justify-center items-center text-center pt-3 text-2xl text-black ">
                   <GiModernCity />
                   </span>  
                    </div>
                   <div className="space-y-1">
                   <h6 className="text-xs font-bold pt-2">Adventure</h6>
                    <p className="text-sm text-slate-400">10 Tours+</p>
                   </div>
                   </div>
                   <div className="bg-white shadow-lg text-center py-3">
                    <div className=" bg-yellow-400 rounded-full  w-14 h-14 text-center m-auto">
                   <span className=" flex justify-center items-center text-center pt-3 text-2xl text-black ">
                   <GiModernCity />
                   </span>  
                    </div>
                   <div className="space-y-1">
                   <h6 className="text-xs font-bold pt-2">Food</h6>
                    <p className="text-sm text-slate-400">10 Tours+</p>
                   </div>
                   </div>
                   <div className="bg-white shadow-lg text-center py-3">
                    <div className=" bg-yellow-400 rounded-full  w-14 h-14 text-center m-auto">
                   <span className=" flex justify-center items-center text-center pt-3 text-2xl text-black ">
                   <GiModernCity />
                   </span>  
                    </div>
                   <div className="space-y-1">
                   <h6 className="text-xs font-bold pt-2">Hiking</h6>
                    <p className="text-sm text-slate-400">10 Tours+</p>
                   </div>
                   </div>
            </div>
        </div>
    </div>
  )
}

export default Picking
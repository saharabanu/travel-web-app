

const BasicInfo = () => {
  return (
    <div className="mt-5">
        <h2 className="font-bold text-xl">Basic Information</h2>
        <div className="bg-gray-100 rounded mt-5">
            <div className="py-5 space-y-2">
            <div className="flex justify-between items-center px-5">
            <p>Country</p>
            <p className="text-start">Turkey</p>
           </div>
            <div className="flex justify-between items-center px-5">
            <p>Language</p>
            <p>Turkish</p>
           </div>
            <div className="flex justify-between items-center px-5">
            <p>Currency</p>
            <p>Turkish Lira</p>
           </div>
            <div className="flex justify-between items-center px-5">
            <p>Area</p>
            <p>2,036 Square Miles</p>
           </div>
            <div className="flex justify-between items-center px-5">
            <p>Population</p>
            <p>15M</p>
           </div>
            <div className="flex justify-between items-center px-5">
            <p>Time to Travel</p>
            <p>May, June, July, August</p>
           </div>

            </div>
        </div>
    </div>
  )
}

export default BasicInfo
import man from '../../../assets/images/man-camera.jpg'

const TripPlan = () => {
  return (
    <div className='px-16 py-10'>

        <div className="grid lg:grid-cols-2 gap-10">
            <div className='bg-blue-900 relative h-62 '>
                <div className='absolute right-1 bg-yellow-300'>
                    <img src={man}alt="" className='h-72 bg-yellow-300'/>
                    <h5 className='px-2'><span className='font-bold text-2xl'>10+</span> years of Experience</h5>
                </div>
                <h2 className='text-white  ml-5 py-36 text-6xl '>Happy <br />  <span className='text-yellow-500'>Traveling!!</span></h2>
                
            </div>
            <div>
                <div>
                <h5 className="text-2xl pt-5 text-blue-900 " style={{ fontFamily: "Dancing Script" }}>
            WHy Choose Us
          </h5>
          <h2 className='text-xl font-bold py-4'>Plan Your Trip <br /> with Trisog</h2>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea sit repellat laudantium itaque incidunt libero veniam quisquam commodi? Voluptates aut consequatur expedita pariatur voluptatum.</p>

           <div>
            <ul className='py-5'>
                <div className='flex items-center'>
                <li>✔ Travel Plan</li>
                <li className='pl-24'>✔ Cheap Rates</li>
                </div>
                <div className='flex items-center'>
                <li>✔ Hand-picked Tour</li>
                <li className='pl-10'>✔ Private Guides</li>
                </div>
            </ul>

            <button className='border bg-transparent px-3 py-2 rounded hover:bg-blue-900 hover:border-none hover:text-white transition-all'>Contact Us</button>
           </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TripPlan
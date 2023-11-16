/* eslint-disable react/no-unknown-property */


const Footer = () => {
  return (
    
   

<footer className="bg-black text-white">


  <div className="mx-auto max-w-6xl px-6 py-16 sm:px-6 lg:px-16 container">
    {/* <div className="lg:flex lg:items-start lg:gap-1"> */}
    

      <div
        className="mt-8 grid grid-cols-2 gap-8 lg:mt-0  lg:grid-cols-6 lg:gap-y-16"
      >
        <div className="col-span-2 ">
          <div className="space-y-4 ">
            <h2 className="text-2xl font-bold text-white">
              Trisog
            </h2>
            <br />
            <span>Need Any Help ?</span>
            <p className="font-bold text-white">Call Us :<span className="text-yellow-500">(000) 2341 4567</span></p>

            <p className="mt-4 text-white">
              Love Street, Muscat, Oman  <br /> <br />
              abcd@trisog.com
            </p>
          </div>
        </div>

       

        <div className="col-span-2 sm:col-span-1">
          <p className="font-medium text-white">Comapny</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                Contact Us
              </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                Travel Guides
              </a>
            </li>

            <li>
              <a href="#" className="ttext-white transition hover:opacity-75">
                Data Policy
              </a>
            </li>

            
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <p className="font-medium text-white">Top Destination</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                Las Vages
              </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                New York City
              </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                San Francisco
              </a>
            </li>
            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                Hawaii
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1 sm:col-span-1">
          <p className="font-medium text-white">Country</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                Tokyo
              </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                Sydney
              </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                Malbourne
              </a>
            </li>
            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                Dubai
              </a>
            </li>
          </ul>
        </div>

         <div className="col-span-3 sm:col-span-1">
          <p className="font-medium text-white">Stay Up Newsletter</p>
                    <input type="text" placeholder="Enter your email" className="px-2 py-3 rounded outline-none"/>
                    <input type="submit" value="Submit" className="bg-yellow-600 my-3 px-4 py-2 rounded"/>
                    <br />

                    <span className="text-sm font-light text-gray-400">@2023  Task AllRights Reserved</span>
         
        </div>

       
      </div>
    {/* </div> */}

   
  </div>

  
</footer>
  
  )
}

export default Footer
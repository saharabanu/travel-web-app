import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <div className='bg-blue-900 h-screen text-center text-white flex justify-center items-center'>
    <div className=''>

    <h2 className='text-3xl text-white font-bold'>OOOPs! Page Not Found</h2>
    <br /><br /> 
    <Link to="/" className=''><button
  type="button"
  className="inline-block rounded px-6 pb-2 pt-2.5  font-medium uppercase leading-normal text-white border hover:text-black" >
  Go Home
</button></Link>

    </div>

    </div>
  )
}

export default NotFound
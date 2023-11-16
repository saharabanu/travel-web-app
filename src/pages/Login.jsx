/* eslint-disable react/no-unescaped-entities */
import {  useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.auth';
import toast from "react-hot-toast";


const Login = () => {
  const navigate = useNavigate()

  const { register, handleSubmit} = useForm();
  const [
    signInWithEmailAndPassword,
    error,
  ] = useSignInWithEmailAndPassword(auth);

 

  const onSubmit = async (data) => {
    try {
      
        // Sign in user
      const res = await signInWithEmailAndPassword(data.email, data.password);
      
     
if(res?.user?.accessToken){
  toast.success("User signed in successfully!");
  navigate("/");
}
else{
  toast.error("Your password or email doesn't match")
}
      // The user is now signed in
     
      
    } catch (error) {
      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        // Display a specific message for user-not-found or wrong-password errors
        toast.error("Email or password does not match");
      } else {
        // Display a general error message for other errors
        toast.error("Error signing in:", error.message);
      }
    }
  };




  return (
    <>
 <div className="container m-auto max-w-lg ">
        
        <div className="block max-w-lg rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  mt-10">
        <h2 className="text-center text-xl pb-5 font-bold">Please Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
           
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                {...register("email")}
                name="email"
                type="email"
                required
                className="peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black"
                id="exampleInput7"
                placeholder="Your Email"
              />
              
            </div>
           
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                {...register("password")}
                name="password"
                type="password"
                required
                className="peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black"
                id="exampleInput7"
                placeholder="Password"
              />
              
            </div>
  
            {error && <p className="text-red-500">{error.code === "auth/user-not-found" ? "User not found" : error.code === "auth/wrong-password" ? "Incorrect password" : error.message}</p>}

  
            <input
              type="submit"
              value="Login"
              className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-blue-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] cursor-pointer"
              data-te-ripple-init
              data-te-ripple-color="light"
            />
          </form>
          <br /><br />
          <p className="text-lg">Don't Have an Account ? Please <Link to="/register" className="text-blue-700">Register</Link></p>
        </div>
        </div>

    </>
  )
}

export default Login
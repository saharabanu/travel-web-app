// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../firebase/firebase.auth';
// import { Navigate, useLocation } from 'react-router-dom';



// const PrivateRoute = ({children}) => {
//     const {pathname} = useLocation()
    
//     const [user, loading, error] = useAuthState(auth);

//   if (loading) {
//     return <p>Loading....</p>;
//   }

//   if (!user?.email && !loading) {
//     return <Navigate to="/login" state={}/>;
//   }

//   return children;

// }

// export default PrivateRoute
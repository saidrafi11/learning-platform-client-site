import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Firebase/Context/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div>Loading...</div>
    }

    if(!user){
        return <Navigate to="/signin" state={{from: location}} replace
        ></Navigate>

    }return children;
};

export default PrivateRoute;
import { Children, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../AuthProvider.jsx/AuhtContext";

const PrivetRouts = ({ children }) => {
  const { User, loading } = useContext(AuthContext);
  const location = useLocation();

  // console.log("User:", User);

  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }

  return User ? (
    children
  ) : (
    <Navigate to={"/login"} state={location.pathname} replace></Navigate>
  );
};

export default PrivetRouts;

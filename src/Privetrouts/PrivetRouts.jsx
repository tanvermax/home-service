import { Children, useContext } from "react";
import AuhtContext from "../AuthProvider.jsx/AuhtContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouts = ({ children }) => {
  const { User, loading } = useContext(AuhtContext);
  const location = useLocation();

  console.log("User:", User);

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

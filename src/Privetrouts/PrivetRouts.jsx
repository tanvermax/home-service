import { useContext } from "react";
import AuhtContext from "../AuthProvider.jsx/AuhtContext";


const PrivetRouts = () => {
    const {User ,loading} = useContext(AuhtContext)


    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    return 
};

export default PrivetRouts;
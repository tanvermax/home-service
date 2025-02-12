import { Link } from "react-router-dom";


const Button = ({ to, text, day, className }) => {
  return (
    <Link
      to={to}
      data-aos="fade-up"
      className={`lg:mt-5 mt-2 w-full py-2 font-medium ${
        day ? "navlink2  text-white" : "navlink text-white"
      } `}
    >
      <span className="relative z-10 hover:text-yellow-400 p-3">{text}</span>
    </Link>
  );
};

export default Button;

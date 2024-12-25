import React, { useContext, useEffect } from "react";
import 'aos/dist/aos.css';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Aos from "aos";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";

const Login = () => {
  const { googlelogin,loginwihtpass } = useContext(AuthContext);
  useEffect(() => {
    Aos.init({
      duration: 1000, // Duration of animations in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  const navigate = useNavigate()
  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
 
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    loginwihtpass(email,password)
    .then(result=>{
      console.log(result.user);
      navigate('/')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  };

  return (
    <div>
       <Helmet>
        <title>Log in</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div data-aos="fade-up" className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div data-aos="fade-right" className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handlelogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="w-11/12 mx-auto p-5">
              <Link to={"/register"}>Dont't have account? Register</Link>
              <br />
              <p>or</p>
              <button onClick={googlelogin} className="flex items-center gap-2">
                login with <FcGoogle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

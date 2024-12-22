import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import AuhtContext from "../../AuthProvider.jsx/AuhtContext";

const Register = () => {
  const { registerwihtgmail,googlelogin,setUser } = useContext(AuhtContext);

  const handleregisteruser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password };
    console.log(user);
    registerwihtgmail(email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result.user.email);
        
        
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleregisteruser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">FUll Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Your name"
                  id=""
                />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            
            <div className="w-11/12 mx-auto p-5">
            <Link to={"/login"}>Already have an account ? login</Link>
              <br />
              <p>or</p>
              <button onClick={googlelogin} className="flex items-center gap-2">login with <FcGoogle /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

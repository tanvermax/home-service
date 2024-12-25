import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import Aos from "aos";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";

const Register = () => {
  const { registerwihtgmail, googlelogin, setUser, updateUser } =
    useContext(AuthContext);
    useEffect(() => {
      Aos.init({
        duration: 1000,
        once: true,
      });
    }, []);
  const navigate = useNavigate();
  const handleregisteruser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photourl.value;
    const user = { name, email, password, photoURL };
    console.log(user);
    registerwihtgmail(email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result.user.email);
        updateUser({ displayName: name, photoURL: photoURL });
        fetch("https://serverside-bay.vercel.app/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("inside the body", data);
            if (data.insertedId) {
              alert("Account created");
              navigate("/");
            }
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
       <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div data-aos="fade-right" className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div data-aos="fade-left" className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleregisteruser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">FUll Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered"
                  placeholder="Your name"
                  id=""
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image url</span>
                </label>
                <input
                  type="text"
                  name="photourl"
                  className="input input-bordered"
                  placeholder="Photourl"
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

export default Register;

import React, { useContext, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
      <div className="hero  min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            <div data-aos="fade-right" className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Register now!</h1>
              <p className="text-gray-600">
                Join us today and enjoy a seamless experience with personalized services, expert support, and the latest updates.
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="card  w-full max-w-sm p-6 shadow-lg rounded-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            >
              <form onSubmit={handleregisteruser} className="space-y-4">
                <div className="form-control">
                  <label className="label text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full rounded-md border-gray-300 focus:ring focus:ring-primary-200"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-control">
                  <label className="label text-sm font-semibold text-gray-700">
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="photourl"
                    className="input input-bordered w-full rounded-md border-gray-300 focus:ring focus:ring-primary-200"
                    placeholder="Photo URL"
                  />
                </div>
                <div className="form-control">
                  <label className="label text-sm font-semibold text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full rounded-md border-gray-300 focus:ring focus:ring-primary-200"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label text-sm font-semibold text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="input input-bordered w-full rounded-md border-gray-300 focus:ring focus:ring-primary-200"
                    required
                  />
                  <div className="text-right">
                    <a
                      href="#"
                      className="text-sm text-primary-600 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="form-control mt-4">
                  <button className="btn btn-primary w-full py-2 rounded-md font-semibold">
                    Register
                  </button>
                </div>
              </form>
              <div className="divider my-4">OR</div>
              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={googlelogin}
                  className="flex items-center justify-center gap-2 w-full py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
                >
                  <FcGoogle className="text-2xl" /> Register with Google
                </button>
                <Link
                  to="/login"
                  className="text-sm text-primary-600 hover:underline"
                >
                  Already have an account? Login here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

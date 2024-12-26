import React, { useContext, useEffect } from "react";
import 'aos/dist/aos.css';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Aos from "aos";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";

const Login = () => {
  const { googlelogin, loginwihtpass } = useContext(AuthContext);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const navigate = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginwihtpass(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <div className="hero  min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            <div data-aos="fade-up" className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Login now!</h1>
              <p className="text-gray-600">
                Access your account to enjoy personalized services, track your progress,
                and stay connected with the latest updates.
              </p>
            </div>
            <div
              data-aos="fade-right"
              className="card w-full max-w-sm p-6 shadow-lg rounded-lg border border-gray-200"
            >
              <form onSubmit={handlelogin} className="space-y-4">
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
                    Login
                  </button>
                </div>
              </form>
              <div className="divider my-4">OR</div>
              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={googlelogin}
                  className="flex items-center justify-center gap-2 w-full py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
                >
                  <FcGoogle className="text-2xl" /> Login with Google
                </button>
                <Link
                  to="/register"
                  className="text-sm text-primary-600 hover:underline"
                >
                  Don't have an account? Register here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

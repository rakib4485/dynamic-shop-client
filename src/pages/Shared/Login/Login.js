import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBg from "../../../assets/images/login/login.jpg";
import { AuthContexts } from "../../../contexts/AuthProvider/AuthProvider";

const Login = () => {
    const { loginUser, googleSingIn } = useContext(AuthContexts);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from , {replace: true});
      })
      .catch((err) => console.error(err));
  };

  const googleSignIn = () =>{
    googleSingIn()
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate(from , {replace: true});
    })
    .catch(err => console.error(err));
  }

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      <form onSubmit={handleLogin} className="hero-content">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 md:w-[500px] shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
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
              />
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control mt-6">
            <p>Don't have an account? <Link to ="/register" className="text-cyan-700"> Please Register</Link></p>
            </div>
            <div className="divider">OR</div>
            <div className="form-control">
              <button
                onClick={googleSignIn}
                variant="outline-success"
                type="submit px-5"
                className="w-full flex items-center justify-center mx-auto text-white btn btn-success"
              >
                <FaGoogle className="mr-2"></FaGoogle>
                Login With google
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

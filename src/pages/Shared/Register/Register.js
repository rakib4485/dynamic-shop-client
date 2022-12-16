import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import registerBg from '../../../assets/images/login/register.jpeg'
import { AuthContexts } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const {createUser, setUserName, googleSingIn} = useContext(AuthContexts) 
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        

        createUser(email, password)
        .then(result => {
          const user = result.user;
          setUserName(name)
        .then()
        .catch( err => console.error(err));
          console.log(user);
          navigate('/login');
        })
        .catch( err => console.error(err))

        
    }
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
        backgroundImage: `url(${registerBg})`,
      }}
    >
      <form onSubmit={handleSignUp} className="hero-content">
        <div className="text-center w-1/2 lg:text-left"></div>
        <div className="card flex-shrink-0 md:w-[500px] shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
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
                name='password'
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">sing up</button>
            </div>
            <div className="form-control mt-6">
            <p>Already have an account? <Link to ="/login" className="text-cyan-700"> Please Login</Link></p>
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

export default Register;
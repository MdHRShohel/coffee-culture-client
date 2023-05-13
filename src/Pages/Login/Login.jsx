import React, { useContext } from "react";
import img from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";


const Login = () => {
  const { singIn,signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

   const googleProvider = new GoogleAuthProvider();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name,photo,email,password)
    singIn(email, password)
      .then((result) => {
        const user = result.user;
        //console.log(user);
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };

    const handleGoogleSignIn = () => {
      signInWithGoogle(googleProvider)
        .then((result) => {
          if (result.user.uid) {
            Swal.fire({
              position: "middle",
              icon: "success",
              title: "Login Successful",
              showConfirmButton: false,
              timer: 1500,
            });
          navigate(from, { replace: true });
           }
    })};

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-24 w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-3">Login</h1>
            <form onSubmit={handleLogin}>
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
                {/* <label className="label">
                <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
              </label> */}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="form-control mt-6">
              <button onClick={handleGoogleSignIn} className="btn btn-outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-google"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />{" "}
                </svg>{" "}
                <span className=" ms-4">Sign In With Google</span>
              </button>
            </div>
            <p className="my-4 text-center">
              New to car doctor?{" "}
              <Link className="text-orange-600 font-bold ml-1" to="/signup">
                Sing Up!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="admin-signin-form bg-wite w-full h-screen flex">
        <div className="welcome w-1/2 h-full p-40 text-center ">
          <img
            className="logo w-20 h-20 mx-auto font-Montserrat "
            src="images/logo.png"
          />
          <h1 className="welcome-text mx-auto text-4xl text-center py-8">
            Welcome Back!!!
          </h1>
          <h1 className="welcome-login mx-auto text-center py-8">
            Please enter your credentials to log in
          </h1>
          <input
            className="username mx-auto w-96 h-16  border border-black rounded-lg p-4"
            type="text"
            placeholder="Username"
          />
          <input
            className="username mx-auto w-96 h-16  border border-black rounded-lg m-8 p-4"
            type="password"
            placeholder="Password"
          />
          <h1 className="forgot-psw m-8">Forgot password? </h1>
          <button className="signin bg-black text-white  w-96 h-16 rounded-3xl ">
            SIGN IN
          </button>
        </div>

        <div className="logo w-1/2 bg-black h-full rounded-l-3xl flex  flex-col items-center">
          <img
            className="logo w-full h-3/5 mx-auto font-Montserrat "
            src="images/logo-white.png"
          />
          <h1 className="signup text-white text-center ">
            New to our platform? Sign Up now.
          </h1>
          <button className="signup  text-white  w-96 h-16 rounded-3xl border border-white text-center m-16 ">
            SIGN UP
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

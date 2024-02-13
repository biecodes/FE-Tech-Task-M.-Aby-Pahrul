import React, { useState } from "react";
import { createBrowserHistory } from "history";
import Logo from "../assets/Logo.svg";
import Signilus from "../assets/Sign-ilus.svg";

const SignIn = () => {
  const history = createBrowserHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();
      setResponse(data);

      if (res.ok) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="flex h-screen">
      {/* Left Section */}
      <div className="static bg-thirdparty w-[680px] h-auto">
        <div className="p-4">
          <img src={Logo} alt="" className="ml-10 mt-5 mb-5 w-28  h-auto" />
        </div>
        <div className=" p-6 w-full h-auto items-center">
          <img src={Signilus} alt="" className="ml-5 mt-26 p-6" />
        </div>
        <div className="text-center items-center truncate-2">
          <h1 className="font-semibold text-lg">Services</h1>
          <p className="text-sm mt-2">
            An expert team help you to analyze your polticalt <br /> power.An
            expert team .
          </p>
          <p className="text-xs mt-20 mr-20">
            ©2020 All Rights Reserved. PT Indonesia Indicator
          </p>
        </div>
      </div>
      {/* Right Section */}
      <div className="w-full bg-white flex items-center justify-center">
        <div className="w-full max-w-sm">
          <div className="bg-white shadow-sm rounded ">
            <h1 className="text-xl font-bold mb-1">Welcome To Logo Ipsum</h1>
            <p className="mb-5">
              Don't have an account?
              <span className="ml-1 font-bold text-blue-600"> Sign Up</span>
            </p>

            <form className="mb-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username<span className="text-blue-500">*</span>
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password<span className="text-blue-500">*</span>
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-3 rounded focus:outline-none focus:shadow-outline"
                  type="submit" // Change type to "submit"
                >
                  Log In
                </button>
              </div>
              {response && (
                <div className="mt-4">
                  <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

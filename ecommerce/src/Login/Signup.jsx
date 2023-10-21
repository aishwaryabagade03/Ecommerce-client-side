import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

export default function Signup() {
  const navigate = useNavigate(); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [phonenumber, setPhonenumber] = useState("");

  const handleSignIn = () => {
    axios
    .post("http://localhost:3003/User/signup", {
      name,
      email,
      password,
      phonenumber,
    })
    .then((response) => {
      if (response.data.success) {
        navigate("/");
      } else {
        console.log("Signup failed.");
      }
    })
    .catch((error) => {
      console.error("Signup error:", error);
    });
  };

  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          M+ SIGN UP NOW
        </h2>
        <p className="font-medium text-center leading-9 tracking-tight">GET MORE AS A MEMBER</p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" method="POST" onSubmit={handleSignIn}>
        <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Name 
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                required
                className="block w-full border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Email 
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Contact
            </label>
            <div className="mt-2">
              <input
                id="phonenumber"
                name="phonenumber"
                type="phonenumber"
                autoComplete="phonenumber"
                required
                className="block w-full border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
          By creating an account, you agree to our Terms & Conditions as well as our Privacy Policy.
          <a href="#" className="font-semibold leading-6 text-gray-900 hover:text-gray-500 underline">
           Join Now!
          </a>
        </p>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              SIGN UP
            </button>
          </div>
        </form>

      
      </div>
    </div>
  </>
  );
}

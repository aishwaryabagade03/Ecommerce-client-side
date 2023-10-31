import React , {useEffect, useState}from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
  const handlelogin = (event) => {
    event.preventDefault();
    console.log({ Email: email, Password: password });
    fetch('http://localhost:3003/User/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Email: email,
        Password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success === true) {
          localStorage.setItem('token', data.token);
          navigate('/');
          const userDetails = data.data._id;
          localStorage.setItem('userDetails', userDetails);
        }
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            M+ WELCOME BACK
          </h2>
          <p className="font-medium text-center leading-9 tracking-tight">Login to your account</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handlelogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Email 
              </label>
              <div className="mt-2">
                <input
                  id="Email"
                  name="Email"
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
                <div className="text-sm">
                  <a href="#" className="font-semibold text-gray-900 hover:text-gray-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="Password"
                  name="Password"
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
              <button
                type="submit"
                className="flex w-full justify-center bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Log In
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member yet?{' '}
            <a href="#" className="font-semibold leading-6 text-gray-900 hover:text-gray-500 underline">
             Join Now!
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

import React, { useEffect, useState } from "react";
import SideLogin from "../assets/SideLogin.png";
import backgroundMask from "../assets/backgroundMask.png";
import { Link } from "react-router-dom";

function LoginPage() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [Book, setBook] = useState([]);
  const [Loading, setLoading] = useState("");

  const handleUsernameChange = (e) => {
    // console.log(e.target.value)
    setuserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //   const handlePublishYearChange = (e) => {
  //     setPublishYear(e.target.value);
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const loginData = { userName, password };
    console.log(loginData);

    // try {
    //   const response = await fetch('http://localhost:5555/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ userName, Password }),
    //   });
    //   if (!response.ok) {
    //     throw new Error('Failed to add book');
    //   }
    //   const loginData = { title, Password };
    //   console.log(loginData)
    //   setUserName('');
    //   setPassword('');

    // } catch (error) {
    //   console.error('Error:', error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="w-screen h-screen flex flex-row justify-center overflow-hidden ">
      <div className="w-7/12 bg-white ">
        <div class="relative  ">
          <img
            class="absolute top-0 left-0"
            src={backgroundMask}
            alt="Workplace"
            width="10700"
          />

          <img class=" absolute top-0 left-0" src={SideLogin} width="1060" />
        </div>
      </div>
      <div className="bg-white w-5/12 flex flex-col justify-center items-center   p-4">
        <div className="card w-full flex flex-col justify-center ">
          <div className="card-title flex flex-col w-4/5  ">
            <h2 className="font-bold text-2xl "> Welcome Back! </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="card-body space-y-4  flex flex-col justify-center ">
              {/* <div className="flex flex-col justify-center items-center"> */}

              {/* </div> */}

              <div className="space-y-4 justify-center w-4/5 ">
                <div className="flex flex-col items-start justify-between space-y-2 ">
                  <h2 className="ml-1 font-bold">Buisness ID</h2>
                  <input
                    type="text"
                    placeholder="6-15 characters. No spaces and Symbols "
                    className=" bg-white input input-bordered border-2 border-gray-200 w-full max-w-md"
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="flex flex-col items-start justify-between space-y-2">
                  <h2 className="ml-1  font-bold">Email</h2>
                  <input
                    type="text"
                    placeholder="Valid email adress"
                    className="bg-white input  input-bordered border-2 border-gray-200 w-full  max-w-md"
                    onChange={handleUsernameChange}
                  />
                </div>

                <div className="flex flex-col items-start justify-between space-y-2">
                  <h2 className="ml-1  font-bold">Password</h2>
                  <input
                    type="password"
                    placeholder="Minimum 8 characters without spaces"
                    className="bg-white input  input-bordered border-2 border-gray-200 w-full max-w-md"
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>
              <div className="card-actions justify-center w-4/5">
                <Link className="w-full" to={`/dashboard/super/home`}>
                  <button
                    className="btn btn-active w-full bg-indigo-700 rounded-xl max-w-md"
                    type="submit"
                  >
                    <span className="text-white"> Login </span>
                  </button>
                </Link>
                {/* <div className="w-full  flex flex-row justify-center items-center rounded-xl"> */}
                <Link className="w-full " to={`/dashboard/agent/aghome`}>
                  <button
                    className="btn btn-active w-full bg-black rounded-xl max-w-md"
                    type="submit"
                  >
                    <span className="text-white">Agent Login </span>
                  </button>
                </Link>
                <Link className="w-full " to={`/dashboard/`}>
                  <button
                    className="btn btn-active w-full bg-black rounded-xl max-w-md"
                    type="submit"
                  >
                    <span className="text-white">Tenant Login </span>
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

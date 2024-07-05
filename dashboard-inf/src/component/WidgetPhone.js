import React, { useEffect, useState } from "react";

function WidgetPhone() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  // const [publishYear, setPublishYear] = useState('');
  // const [Book, setBook] = useState([]);
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
  };

  return (
    <div>
      <div className="card-body ">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 ">
            <div className="flex flex-col justify-center items-center">
              <h2 className="card-title"> Call Center </h2>
            </div>

            <div className="space-y-4">
              <div className="flex flex-row items-center justify-evenly">
                <h2>Nama Lengkap</h2>
                <input
                  type="text"
                  className="input input-bordered w-full  max-w-xs"
                  onChange={handleUsernameChange}
                />
              </div>

              <div className="flex flex-row items-center justify-evenly">
                <h2>Email</h2>
                <input
                  type="text"
                  className="input input-bordered w-full  max-w-xs"
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            <div className="card-actions justify-center">
              <button
                className="btn btn-active w-full bg-green-400 rounded-xl"
                type="submit"
              >
                <span className="text-black">Submit</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WidgetPhone;

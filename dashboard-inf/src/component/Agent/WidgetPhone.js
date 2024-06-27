import React, { useEffect, useState } from "react";

function WidgetPhone() {
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
  };

  return (
    <div className="border-2 border-black w-96 rounded-xl bg-white ">
      <div className="card-body ">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 ">
            <div className="flex flex-col justify-center items-center">
              <h2 className="card-title"> Vonage Call </h2>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col space-y-2 items-start justify-evenly">
                <h2>Nama Lengkap</h2>
                <input
                  type="text"
                  required
                  className="input input-bordered border-black w-full  max-w-xs bg-white focus:bg-gray-300 hover:bg-gray-200 "
                  onChange={handleUsernameChange}
                />
              </div>

              <div className="flex flex-col space-y-2 items-start justify-evenly">
                <h2>Email</h2>
                <input
                  type="text"
                  required
                  className="input input-bordered border-black w-full  max-w-xs bg-white focus:bg-gray-300 hover:bg-gray-200 "
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-startjustify-evenly">
              <h2>No Handphone</h2>
              <input
                type="text"
                required
                className="input input-bordered w-full border-black max-w-xs bg-white focus:bg-gray-300 hover:bg-gray-200 "
                onChange={handleUsernameChange}
              />
            </div>

            <div className="card-actions justify-center">
              <button
                className="btn btn-active w-full bg-green-400 rounded-xl hover:bg-green-600"
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

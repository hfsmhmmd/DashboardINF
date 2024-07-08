import { useState, useEffect } from "react";
import SideLogin from "../assets/SideLogin.png";
import backgroundMask from "../assets/backgroundMask.png";

function CreateUserForm() {
  const [namaUser, setNamaUser] = useState("");
  const [codeKaryawan, setCodeKaryawan] = useState("");
  const [originOffice, setOriginOffice] = useState("");
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  const [nomorHandphone, setNomorHandphone] = useState("");

  const handleNamaUser = (e) => {
    setNamaUser(e.target.value);
  };
  const handleCodeKaryawan = (e) => {
    setCodeKaryawan(e.target.value);
  };

  const handleOriginOfficeChange = (e) => {
    setOriginOffice(e.target.value);
  };
  const handleAlamatChange = (e) => {
    setAlamat(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNomorHandphoneChange = (e) => {
    setNomorHandphone(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="w-4/5 flex flex-row justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="space-y-4">
          <div className="flex flex-col justify-center items-center">
            <h2 className="card-title"> Register Tenant </h2>
          </div>

          <div className="space-y-4 flex flex-col justify-center">
            <div className="flex flex-col space-y-2 items-start justify-evenly ">
              <h2 className="text-sm">Nama Lengkap</h2>
              <input
                type="text"
                required
                className="input input-bordered border-black w-full  max-w-md  bg-white focus:bg-gray-300 hover:bg-gray-200 input-sm shadow-md"
                onChange={handleNamaUser}
              />
            </div>
            <div className="flex flex-col space-y-2 items-start justify-evenly">
              <h2> Code Karyawan</h2>
              <input
                type="text"
                required
                className="input input-bordered w-full border-black max-w-md bg-white focus:bg-gray-300 hover:bg-gray-200 input-sm"
                onChange={handleCodeKaryawan}
              />
            </div>
            <div className="flex flex-col space-y-2 items-start justify-evenly">
              <h2>Email</h2>
              <input
                type="text"
                required
                className="input input-bordered border-black w-full  max-w-md bg-white focus:bg-gray-300 hover:bg-gray-200 input-sm "
                onChange={handleEmailChange}
              />
            </div>

            <div className="flex flex-col space-y-2 items-start justify-evenly w-full">
              <h2>No Handphone</h2>
              <input
                type="number"
                required
                className="input input-bordered w-full border-black max-w-md bg-white focus:bg-gray-300 hover:bg-gray-200 input-sm"
                onChange={handleNomorHandphoneChange}
              />
            </div>
            <div className="flex flex-col space-y-2 items-start justify-evenly">
              <h2>Alamat </h2>
              <textarea
                type="text"
                required
                className="input input-bordered w-full border-black max-w-md bg-white focus:bg-gray-300 hover:bg-gray-200 input-lg"
                onChange={handleAlamatChange}
              />
            </div>
            {/* <div className="flex flex-col space-y-2 items-start justify-evenly">
              <h2>No Handphone</h2>
              <input
                type="number"
                required
                className="input input-bordered w-full border-black max-w-md bg-white focus:bg-gray-300 hover:bg-gray-200 input-sm"
                onChange={handleNomorHandphoneChange}
              />
            </div> */}
            <div className="flex flex-col space-y-2 items-start justify-evenly">
              <h2> Company</h2>
              <input
                type="text"
                required
                className="input input-bordered w-full border-black max-w-md bg-white focus:bg-gray-300 hover:bg-gray-200 input-sm"
                onChange={handleOriginOfficeChange}
              />
            </div>
          </div>
          <div className="card-actions flex flex-col items-start justify-center ">
            <button
              className="btn  bg-violet-800 rounded-xl hover:bg-green-600 w-64"
              type="submit"
            >
              <p className="text-white ">Submit</p>
            </button>
          </div>
        </div>
      </form>
      <div className="w-2/4 relative p-2 h-screen w-full flex flex-col items-center justify-center ">
        <div className="">
          <img
            className="absolute top-0 left-0"
            src={backgroundMask}
            alt="Workplace"
            width=""
          />

          <img className=" absolute top-0 left-0" src={SideLogin} width="" />
        </div>
      </div>
    </div>
  );
}

export default CreateUserForm;

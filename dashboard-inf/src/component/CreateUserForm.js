import { useState, useEffect } from "react";

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
    <div className="w-4/5 flex flex-col justify-center items-center ">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="space-y-4">
          <div className="flex flex-col justify-center items-center">
            <h2 className="card-title"> Register Tenant </h2>
          </div>

          <div className="space-y-4 flex flex-col justify-center">
            <div className="flex flex-col space-y-2 items-start justify-evenly">
              <h2>Nama Lengkap</h2>
              <input
                type="text"
                required
                className="input input-bordered border-black w-full  max-w-xl  bg-white focus:bg-gray-300 hover:bg-gray-200 "
                onChange={handleNamaUser}
              />
            </div>

            <div className="flex flex-col space-y-2 items-start justify-evenly">
              <h2>Email</h2>
              <input
                type="text"
                required
                className="input input-bordered border-black w-full  max-w-xl bg-white focus:bg-gray-300 hover:bg-gray-200 "
                onChange={handleEmailChange}
              />
            </div>

            <div className="flex flex-col space-y-2 items-start justify-evenly w-full">
              <h2>No Handphone</h2>
              <input
                type="number"
                required
                className="input input-bordered w-full border-black max-w-xl bg-white focus:bg-gray-300 hover:bg-gray-200 "
                onChange={handleNomorHandphoneChange}
              />
            </div>
            <div className="flex flex-col space-y-2 items-start justify-evenly">
              <h2>Alamat </h2>
              <input
                type="text"
                required
                className="input input-bordered w-full border-black max-w-xl bg-white focus:bg-gray-300 hover:bg-gray-200 "
                onChange={handleAlamatChange}
              />
            </div>
            <div className="flex flex-col space-y-2 items-start justify-evenly">
              <h2>No Handphone</h2>
              <input
                type="number"
                required
                className="input input-bordered w-full border-black max-w-xl bg-white focus:bg-gray-300 hover:bg-gray-200 "
                onChange={handleNomorHandphoneChange}
              />
            </div>
            <div className="flex flex-col space-y-2 items-start justify-evenly">
              <h2> Origin Office</h2>
              <input
                type="text"
                required
                className="input input-bordered w-full border-black max-w-xl bg-white focus:bg-gray-300 hover:bg-gray-200 "
                onChange={handleOriginOfficeChange}
              />
            </div>
            <div className="flex flex-col space-y-2 items-start justify-evenly">
              <h2> Origin Office</h2>
              <input
                type="text"
                required
                className="input input-bordered w-full border-black max-w-xl bg-white focus:bg-gray-300 hover:bg-gray-200 "
                onChange={handleCodeKaryawan}
              />
            </div>
          </div>
          <div className="card-actions flex flex-col items-start justify-center">
            <button
              className="btn btn-active w-68 bg-green-400 rounded-xl hover:bg-green-600"
              type="submit"
            >
              <span className="text-black">Submit</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateUserForm;

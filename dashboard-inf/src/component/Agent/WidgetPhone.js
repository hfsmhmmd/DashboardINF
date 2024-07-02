import React, { useEffect, useState } from "react";

function WidgetPhone() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [isSubmited, setIsSubmited] = useState(false)
  const [Book, setBook] = useState([]);
  const [Loading, setLoading] = useState("");

  const handleUsernameChange = (e) => {
    // console.log(e.target.value)
    setuserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  //   const handlePublishYearChange = (e) => {
  //     setPublishYear(e.target.value);
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const registerInfo = { userName, password, phoneNumber };
    console.log(registerInfo);
    
    // hit an api 
    
    console.log(!isSubmited)
    setIsSubmited(!isSubmited)
    console.log(isSubmited)

  };

  return (  
    <div className="border-2 border-black w-80  rounded-xl bg-white ">
{
  isSubmited? <div className="card-body ">
  <form onSubmit={handleSubmit}>
    <div className="space-y-4 ">
      <div className="flex flex-col justify-center items-center">
        <h2 className="card-title"> Vonage Call </h2>
      </div>

      <div className="space-y-4">

   
      </div>
      <div className="flex flex-col space-y-2 items-startjustify-evenly">
        <h2>Nomor Tujuan</h2>
        <input
          type="number"
          required
          placeholder="021"
          className="input input-bordered w-full border-black max-w-xs bg-white focus:bg-gray-300 hover:bg-gray-200 "
          onChange={handlePhoneNumberChange}
        />
      </div>
      <div className="my-1 flex w-full justify-center gap-1">
        <div className="space-y-1.5">
          
        
        <div className="space-x-1.5">

 <button>
 <kbd className="kbd w-10 h-10">1</kbd>
  </button>
  <kbd className="kbd w-10 h-10">2</kbd>
  <kbd className="kbd w-10 h-10">3</kbd>
        </div>
        <div className="space-x-1.5">

<kbd className="kbd w-10 h-10">4</kbd>
<kbd className="kbd w-10 h-10">5</kbd>
<kbd className="kbd w-10 h-10">6</kbd>
      </div>   
      <div className="space-x-1.5">

<kbd className="kbd w-10 h-10">7</kbd>
<kbd className="kbd w-10 h-10">8</kbd>
<kbd className="kbd w-10 h-10">9</kbd>
      </div>
      <div className="flex flex-row justify-center">
      <kbd className="kbd w-10 h-10">0</kbd>
      </div>
      </div>    
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
</div> : 

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
                type="number"
                required
                className="input input-bordered w-full border-black max-w-xs bg-white focus:bg-gray-300 hover:bg-gray-200 "
                onChange={handlePhoneNumberChange}
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
      }
    </div>
  );
}

export default WidgetPhone;

import React, { useEffect, useState } from "react";
import Numpad from "./Numpad";
import OnGoingCallCard from "./OnGoingCallCard";

function WidgetPhone() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();

  const [destinationNumber, setDestinationNumber] = useState("");

  const [Loading, setLoading] = useState("");

  const [isSubmited, setIsSubmited] = useState(false);
  const [isCalling, setIsCalling] = useState(false);

  const handleEndCall = (e) => {
    setIsCalling(!isCalling);
    setDestinationNumber("");
  };

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
  const handleDestinationNumber = (e) => {
    setDestinationNumber(e.target.value);
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const registerInfo = { userName, password, phoneNumber };
    console.log(registerInfo);

    // hit an api

    console.log(!isSubmited);
    setIsSubmited(!isSubmited);
    console.log(isSubmited);
    setPassword("");
    setuserName("");
    setPhoneNumber(null);
  };

  // const handleSubmitCall = async (e) => {
  //   console.log("handlesubmitCall");
  //   e.preventDefault();
  //   setLoading(true);
  //   // const registerInfo = { userName, password, phoneNumber };
  //   // console.log(registerInfo);

  //   const initCallInfo = { destinationNumber };
  //   console.log("initCallInfo", initCallInfo);
  //   // console.log('destinationNumber', destinationNumber)

  //   console.log(!isSubmited);
  //   setIsSubmited(!isSubmited);
  //   console.log(isSubmited);
  // };

  // handle numpad
  const [inputValue, setInputValue] = useState("");

  const handleNumberSubmit = (event) => {
    // Handle the form submission
    // event.preventDefault();
    console.log("Submitted number:", inputValue);
    setIsCalling(!isCalling);
  };

  const handleNumberClick = (event, num) => {
    event.preventDefault();
    console.log("num", num);
    setDestinationNumber((prevValue) => prevValue + num.toString());
  };

  const handleClear = (event) => {
    event.preventDefault();
    setDestinationNumber("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNumberSubmit({ preventDefault: () => {} });
  };

  const rows = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];

  // renderComponent = () => {
  //   if (isCalling) {
  //     return OnGoingCallCard;
  //   } else if (isSubmited) {
  //     <submitedComponent />;
  //   } else {
  //   }
  // };

  return (
    <div className="border-2 border-black w-72 h-96  rounded-xl shadow-xl ">
      {isCalling ? (
        <div className="card-body flex flex-col justify-between items-center   w-72 h-full">
          <div className="h-2/4 ">
            <h1 className="font-bold text-xl "> {destinationNumber}</h1>
          </div>
          <OnGoingCallCard onHangUp={handleEndCall} />
        </div>
      ) : isSubmited ? (
        <div className="card-body ">
          <form onSubmit={handleNumberSubmit} name="submitCall">
            <input
              type="text"
              value={destinationNumber}
              // onChange={(e) => setInputValue(e.target.value)}
              onChange={(e) => setDestinationNumber(e.target.value)}
              required
              className="input input-bordered border-black w-full  max-w-xs bg-white focus:bg-gray-300 hover:bg-gray-200 "
              placeholder="Enter number"
            />
            <Numpad
              onNumberClick={handleNumberClick}
              onClear={handleClear}
              onSubmit={handleSubmit}
            />
          </form>
        </div>
      ) : (
        <div className="card-body  ">
          <form onSubmit={handleSubmitRegister}>
            <div className="space-y-2">
              <div className="flex flex-col justify-center items-center">
                <h2 className="card-title"> Vonage Call </h2>
              </div>

              <div className="space-y-2">
                <div className="flex flex-col space-y-1 items-start justify-evenly">
                  <h2>Nama Lengkap</h2>
                  <input
                    type="text"
                    required
                    className="input input-bordered border-black w-full  max-w-xs bg-white focus:bg-gray-300 hover:bg-gray-200 "
                    onChange={handleUsernameChange}
                  />
                </div>

                <div className="flex flex-col space-y-1 items-start justify-evenly">
                  <h2>Email</h2>
                  <input
                    type="text"
                    required
                    className="input input-bordered border-black w-full  max-w-xs bg-white focus:bg-gray-300 hover:bg-gray-200 "
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-1 items-startjustify-evenly">
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
      )}
    </div>
  );
}

export default WidgetPhone;

import React, { useEffect, useState } from "react";
import Numpad from "./Numpad";
import OnGoingCallCard from "./OnGoingCallCard";
// import VonageClient from "@vonage/client-sdk";
import VonageClientComponent from "./VonageClientComp";
import logoPutih from "../../assets/logoInfPutih.png"
import {
  VonageClient,
  ClientConfig,
  ConfigRegion,
  LoggingLevel
} from '@vonage/client-sdk';

function WidgetPhone() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();

  const [destinationNumber, setDestinationNumber] = useState("");

  const [Loading, setLoading] = useState("");
  
  const [error, setError] = useState();

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

  const handleBackToRegister = (e) => {
    setIsSubmited(!isSubmited);
  }

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
  // =================== VONAGE CONFIG=========================
  
  const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjEyMjY1NDEsImp0aSI6ImU5NDNlNjUwLTQ0NDgtMTFlZi1hZTJkLWQxMTljZmZjZTljYSIsImFwcGxpY2F0aW9uX2lkIjoiYmRiNzY3YWUtODU3Ni00OTZkLTkxODctYTEwODkyZmRlNDMxIiwic3ViIjoiQWdlbnRTYXR1IiwiZXhwIjoxNzIxMjI2NTYyOTY1LCJhY2wiOnsicGF0aHMiOnsiLyovdXNlcnMvKioiOnt9LCIvKi9jb252ZXJzYXRpb25zLyoqIjp7fSwiLyovc2Vzc2lvbnMvKioiOnt9LCIvKi9kZXZpY2VzLyoqIjp7fSwiLyovaW1hZ2UvKioiOnt9LCIvKi9tZWRpYS8qKiI6e30sIi8qL2FwcGxpY2F0aW9ucy8qKiI6e30sIi8qL3B1c2gvKioiOnt9LCIvKi9rbm9ja2luZy8qKiI6e30sIi8qL2xlZ3MvKioiOnt9fX19.dOlFH1sJLG2bipu37BgHQ-sT84iK-Kli48HKZcGWusX-ocCKYnqmJKRlz_EnOu_yI2reJ4FhlHhoWh3olUE_4f9Ud-OSYsS-q4OUUSaE8NQIZPaZLrK661uG2u81hNn6g0EwBQ8o4uKOGcWeijIdgipNqTOjsomfw2k5aYiVINF8AuH7xUIRWvrebnKY3NN1Y-wWBC3CNV3t1Q9C8kMByJT2P6GU4cgC6cE4Z5ZZtqaiVy1NRfh9_ecZy4bYVQNlUud4cS8aPTlxJklEu-yvGaF556PqZysz--Wir0cBOkkF828LZcFne0-3gVBQJsO2OcECnNkAQl_SrKFOizJ5bA";

  const [config] = useState(() => new ClientConfig(ConfigRegion.AP));
  
  
  // const [client] = useState(() => {
  //   // Initialize client with optional config (default: ERROR logging, US region).
  //   const client = new VonageClient({
  //     loggingLevel: LoggingLevel.DEBUG,
  //     region: ConfigRegion.US
  //   });
  //       // Or update some options after initialization.
  //   // client.setConfig(config);
  //   // console.log('client', client)
  //   return client;
  // });


  // useEffect(() => {
  //   if (!client) return;
  //   client.createSession(token)
  //   .then(sessionId => {
  //     console.log("Id of created session: ", sessionId);
  //   })
  //   .catch(error  => { 
  //     console.error("Error creating session: ", error);
  //   });
  // }, [client]);



  
  // const createCallVonage = () =>{
  //   console.log("Calling Bob");
  //   let callId = null;
  //   client
  //     .serverCall({ to: "Bob" })
  //     .then((_callId) => {
  //       callId = _callId;
  //     })
  //     .catch((error) => {
  //       console.error(`Error making call: ${error}`);
  //     });
  // }

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
    // createCallVonage();
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
    <div className=" w-96 h-4/5  bg-white rounded-xl shadow-2xl">
          <div className="flex flex-row h-1/6  bg-indigo-500 justify-center space-x-5 items-center">
            <img src={logoPutih} width={175}></img>
            {/* <h2 className="card-title text-white"> Call Dialer  </h2> */}
          </div>
      {isCalling ? (
        <div className="card-body flex flex-col justify-between items-center ">
          <div className="h-2/4 ">
            <h1 className="font-bold text-xl  "> {destinationNumber}</h1>
          </div>
          <OnGoingCallCard onHangUp={handleEndCall} />
        </div>
      ) : isSubmited ? (
        <div className="mt-5 flex flex-col ">
          <form
            className="h-full flex flex-col items-center space-y-12 "
            onSubmit={handleNumberSubmit}
            name="submitCall"
          >
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
              onBackClick={handleBackToRegister}
            />
          </form>
        </div>
      ) : (
        <div className="flex flex-col h-full ">
          <form className="card-body" onSubmit={handleSubmitRegister}>
            <div className="flex flex-col bg-white ">
              <div className="space-y-2 mb-10">
                <div className="flex flex-col space-y-1 items-start justify-evenly">
                  <h2 className="">Nama Lengkap</h2>
                  <input
                    type="text"
                    required
                    className="input input-bordered border-indigo-400 w-full  max-w-xs bg-white focus:bg-gray-300 hover:bg-gray-200 "
                    onChange={handleUsernameChange}
                  />
                </div>

                <div className="flex flex-col space-y-1 items-start justify-evenly">
                  <h2>Email</h2>
                  <input
                    type="text"
                    required
                    className="input input-bordered border-indigo-400 w-full  max-w-xs bg-white focus:bg-gray-300 hover:bg-gray-200 "
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="flex flex-col space-y-1 items-start justify-evenly">
                  <h2>No Handphone</h2>
                  <input
                    type="number"
                    required
                    className="input input-bordered w-full border-indigo-400 max-w-xs bg-white focus:bg-gray-300 hover:bg-gray-200 "
                    onChange={handlePhoneNumberChange}
                  />
                </div>
                <div className="flex flex-col space-y-1 items-start justify-evenly">
                  <h2>Layanan</h2>
                  <input
                    type="number"
                    required
                    className="input input-bordered w-full border-indigo-400 max-w-xs bg-white focus:bg-gray-300 hover:bg-gray-200 "
                    onChange={handlePhoneNumberChange}
                  />
                </div>
                {/* <div className="flex flex-col space-y-1 items-start justify-evenly">
                  <h2>Bahasa</h2>
                  <input
                    type="number"
                    required
                    className="input input-bordered w-full border-indigo-400 max-w-xs bg-white focus:bg-gray-300 hover:bg-gray-200 "
                    onChange={handlePhoneNumberChange}
                  />
                </div> */}
              </div>

              <div className="card-actions justify-center self-end">
                <button
                  className="btn btn-active w-full bg-indigo-700 rounded-xl hover:bg-green-600  "
                  type="submit"
                >
                  <span className="text-white">Submit</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      <VonageClientComponent   token={token}  />
    </div>
  );
}

export default WidgetPhone;

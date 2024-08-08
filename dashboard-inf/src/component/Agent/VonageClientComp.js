import React, { useEffect, useState } from 'react';
// import Vonage from  '../@vonage/client-sdk/dist/vonageClientSDK.min.js'; // Assuming you've installed Vonage SDK via npm
import {
  VonageClient,
  ClientConfig,
  ConfigRegion,
  LoggingLevel
} from '@vonage/client-sdk';
const OutboundCallApp = () => {

  const [config] = useState(() => new ClientConfig(ConfigRegion.AP));
  const [client] = useState(() => {
    // Initialize client with optional config (default: ERROR logging, US region).
    const client = new VonageClient({
      loggingLevel: LoggingLevel.DEBUG,
      region: ConfigRegion.US
    });
    // Or update some options after initialization.
    // client.setConfig(config);
    // console.log('client', client)
    return client;
  });
  const [session, setSession] = useState();
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [oncall, setOnCall] = useState()
  // const 
  const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjEyMjY1NDEsImp0aSI6ImU5NDNlNjUwLTQ0NDgtMTFlZi1hZTJkLWQxMTljZmZjZTljYSIsImFwcGxpY2F0aW9uX2lkIjoiYmRiNzY3YWUtODU3Ni00OTZkLTkxODctYTEwODkyZmRlNDMxIiwic3ViIjoiQWdlbnRTYXR1IiwiZXhwIjoxNzIxMjI2NTYyOTY1LCJhY2wiOnsicGF0aHMiOnsiLyovdXNlcnMvKioiOnt9LCIvKi9jb252ZXJzYXRpb25zLyoqIjp7fSwiLyovc2Vzc2lvbnMvKioiOnt9LCIvKi9kZXZpY2VzLyoqIjp7fSwiLyovaW1hZ2UvKioiOnt9LCIvKi9tZWRpYS8qKiI6e30sIi8qL2FwcGxpY2F0aW9ucy8qKiI6e30sIi8qL3B1c2gvKioiOnt9LCIvKi9rbm9ja2luZy8qKiI6e30sIi8qL2xlZ3MvKioiOnt9fX19.dOlFH1sJLG2bipu37BgHQ-sT84iK-Kli48HKZcGWusX-ocCKYnqmJKRlz_EnOu_yI2reJ4FhlHhoWh3olUE_4f9Ud-OSYsS-q4OUUSaE8NQIZPaZLrK661uG2u81hNn6g0EwBQ8o4uKOGcWeijIdgipNqTOjsomfw2k5aYiVINF8AuH7xUIRWvrebnKY3NN1Y-wWBC3CNV3t1Q9C8kMByJT2P6GU4cgC6cE4Z5ZZtqaiVy1NRfh9_ecZy4bYVQNlUud4cS8aPTlxJklEu-yvGaF556PqZysz--Wir0cBOkkF828LZcFne0-3gVBQJsO2OcECnNkAQl_SrKFOizJ5bA";

//  new token
  // const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjE3OTE1ODksImp0aSI6Ijg0NTU2N2UwLTQ5NmMtMTFlZi1iYmZkLTAzZjI2NjM4ZDlmMiIsImFwcGxpY2F0aW9uX2lkIjoiYmRiNzY3YWUtODU3Ni00OTZkLTkxODctYTEwODkyZmRlNDMxIiwiZXhwIjoxNzIxNzkxNjExMzI1LCJhY2wiOnsicGF0aHMiOnsiLyovdXNlcnMvKioiOnt9LCIvKi9jb252ZXJzYXRpb25zLyoqIjp7fSwiLyovc2Vzc2lvbnMvKioiOnt9LCIvKi9kZXZpY2VzLyoqIjp7fSwiLyovaW1hZ2UvKioiOnt9LCIvKi9tZWRpYS8qKiI6e30sIi8qL2FwcGxpY2F0aW9ucy8qKiI6e30sIi8qL3B1c2gvKioiOnt9LCIvKi9rbm9ja2luZy8qKiI6e30sIi8qL2xlZ3MvKioiOnt9fX19.iJ63W1MaG9F1JHJ4PCVJYRR7ZN906CThu6aBZEkZ3-LqivzBA0ReghPThXCRm3e6GDxqWbL18h9Am-T4bLaLWHFC_wvHb6Yr4E-kD9jw-SegC0Fyt44DMMBb5sEwvuP9Sxgp0C74FJ6vel2ZKZ3gsxlvYs2C3_YmHDzWCurwh7FiajvhBDtrtMGXQHhbn4-RrIQNeMDLW2OciA0m_MBc4rYNCY-dsTWBED5crDGqvULuvvhEM7Qiwti635p5B0O0iZCMvPaNg4vf4QOhKLL-FlwYUJ3-7J98hF_5h1Cm4sIqYgqUPkz74zb-e2ro0fOPIAVjZzRZcCh3IJyyWZH9fw"
  // Create Session as soon as client is available
  // client.setTimeout(10000); 

  useEffect(() => {
    if (!client) return;
    client.createSession(token)
    .then(sessionId => {
      console.log("Id of created session: ", sessionId);
    })
    .catch(error  => { 
      console.error("Error creating session: ", error);
    });
  }, [client]);


  
  const handleButtonCall = async (e) => {
    e.preventDefault();
    setOnCall(true);
    // const loginData = { userName, password };
    // console.log(loginData);
  }


  const createCallVonage = () =>{
    console.log("Calling Bob");
    let callId = null;
    console.log(client)
    client
      .serverCall({ to: "Bob" })
      .then((_callId) => {
        callId = _callId;
      })
      .catch((error) => {
        console.error(`Error making call: ${error}`);
      });
  }

  if (error) return <pre>{JSON.stringify(error)}</pre>;

  // if (!session || !user) return <div>Loading...</div>;

  return <div>
    {/* <button type="button" id="call">Call</button> */}
    <div >

    <button type="button" onClick={ () => createCallVonage()} id="hangup">Call</button>
    </div>

  
    </div>;
}
;
export default OutboundCallApp;

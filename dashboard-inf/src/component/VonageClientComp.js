import React, { useEffect, useState } from 'react';
// import '@vonage/client-sdk/dist/vonageClientSDK.min.js'; // Assuming you've installed Vonage SDK via npm
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
      region: ConfigRegion.EU
    });
    // Or update some options after initialization.
    client.setConfig(config);
    console.log('client', client)
    return client;
  });
  const [session, setSession] = useState();
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const token =
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjEyMjY1NDEsImp0aSI6ImU5NDNlNjUwLTQ0NDgtMTFlZi1hZTJkLWQxMTljZmZjZTljYSIsImFwcGxpY2F0aW9uX2lkIjoiYmRiNzY3YWUtODU3Ni00OTZkLTkxODctYTEwODkyZmRlNDMxIiwic3ViIjoiQWdlbnRTYXR1IiwiZXhwIjoxNzIxMjI2NTYyOTY1LCJhY2wiOnsicGF0aHMiOnsiLyovdXNlcnMvKioiOnt9LCIvKi9jb252ZXJzYXRpb25zLyoqIjp7fSwiLyovc2Vzc2lvbnMvKioiOnt9LCIvKi9kZXZpY2VzLyoqIjp7fSwiLyovaW1hZ2UvKioiOnt9LCIvKi9tZWRpYS8qKiI6e30sIi8qL2FwcGxpY2F0aW9ucy8qKiI6e30sIi8qL3B1c2gvKioiOnt9LCIvKi9rbm9ja2luZy8qKiI6e30sIi8qL2xlZ3MvKioiOnt9fX19.dOlFH1sJLG2bipu37BgHQ-sT84iK-Kli48HKZcGWusX-ocCKYnqmJKRlz_EnOu_yI2reJ4FhlHhoWh3olUE_4f9Ud-OSYsS-q4OUUSaE8NQIZPaZLrK661uG2u81hNn6g0EwBQ8o4uKOGcWeijIdgipNqTOjsomfw2k5aYiVINF8AuH7xUIRWvrebnKY3NN1Y-wWBC3CNV3t1Q9C8kMByJT2P6GU4cgC6cE4Z5ZZtqaiVy1NRfh9_ecZy4bYVQNlUud4cS8aPTlxJklEu-yvGaF556PqZysz--Wir0cBOkkF828LZcFne0-3gVBQJsO2OcECnNkAQl_SrKFOizJ5bA";

  // Create Session as soon as client is available
  useEffect(() => {
    if (!client) return;
    client
      .createSession(token)
      .then((session) => setSession(session))
      .catch((error) => setError(error));
  }, [client]);

  console.log('client', client)
  // Get User as soon as a session is available
  
  // useEffect(() => {
  //   if (!client || !session) return;
  //   client
  //     .getUser('AgentSatu')
  //     .then((user) => setUser(user))
  //     .catch((error) => setError(error));
  //     // console.log('session', session)
  // }, [client, session]);



  if (error) return <pre>{JSON.stringify(error)}</pre>;

  if (!session || !user) return <div>Loading...</div>;

  return <div>User {user.displayName || user.name} logged in</div>;
}
;
export default OutboundCallApp;

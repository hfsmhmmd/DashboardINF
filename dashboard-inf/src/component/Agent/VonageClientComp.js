// src/VonageClient.js

import React, { useEffect, useState } from "react";
import { VonageClient } from "@vonage/client-sdk";

const VonageClientComponent = () => {
  const [client, setClient] = useState(null);
  const [callId, setCallId] = useState(null);
  const [isCalling, setIsCalling] = useState(false);

  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjA3NTcxMDMsImp0aSI6ImVhNGVmZjYwLTQwMDMtMTFlZi1hODQxLTBiMzI5ZDQxNDFiOSIsImFwcGxpY2F0aW9uX2lkIjoiYmEyNWMwY2UtZjNjNi00MDRjLWI0YWMtYTliOWNlMjc1OWVlIiwic3ViIjoiQm9iaSIsImV4cCI6MTcyMDc1NzEyNDc4OX0.lBLRazaU5QCSCjc6nUvGPsCf92-GnpADxvCpXzBOHltIbd1KmEB_C4zIapE8T1-qarlNaJLkOUVfsTfJeUKSsC01iN-E7RFLtScvnfNMq1Beb8mJ1AwobVwvmQyvEHt1amILKm_uerJ7hKoTKbeGOvvdIRUUK2ew0W0itGFsGWZV1nGEaFKm4pndgPepBbLzS1IJ4sEBRkG3cyhXpi-JIwcXg9Ap2LuQZeMuPsyfxXWPmajzOjEo-Q2q1_RFb7mqpuoEKeffKeLsmzy0Yw3Ej8A6OrtnbbZME6KdtGJD4eledsmQOJ1xMqai62Rrib8eTvkbqHke-ssg4FTODmSQ0w";

  useEffect(() => {
    const initializeClient = async () => {
      const vonageClient = new VonageClient();
      try {
        await vonageClient.createSession(token);
        setClient(vonageClient);
      } catch (error) {
        console.error("Error creating session:", error);
      }
    };

    initializeClient();
  }, [token]);

  const handleCall = async () => {
    if (client) {
      try {
        const newCallId = await client.serverCall({ to: "Bob" });
        setCallId(newCallId);
        setIsCalling(true);
      } catch (error) {
        console.error("Error making call:", error);
      }
    }
  };

  const handleHangUp = async () => {
    if (client && callId) {
      try {
        await client.hangup(callId);
        setIsCalling(false);
        setCallId(null);
      } catch (error) {
        console.error("Error hanging up call:", error);
      }
    }
  };

  useEffect(() => {
    if (client) {
      client.on("legStatusUpdate", (callId, legId, status) => {
        if (status === "ANSWERED") {
          setIsCalling(true);
        }
        if (status === "COMPLETED") {
          setIsCalling(false);
        }
      });
    }
  }, [client]);

  return (
    <div>
      <h1>Outbound App Call (Alice)</h1>
      <button
        type="button"
        onClick={handleCall}
        style={{ display: isCalling ? "none" : "inline" }}
      >
        Call
      </button>
      <button
        type="button"
        onClick={handleHangUp}
        style={{ display: isCalling ? "inline" : "none" }}
      >
        Hang Up
      </button>
    </div>
  );
};

export default VonageClientComponent;

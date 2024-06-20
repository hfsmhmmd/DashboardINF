import { useState, useEffect } from "react";
import TotalCallCard from "../component/TotalCallCard";
import CallConnectedCard from "../component/CallConnectedCard";
import CallNotConnectedCard from "../component/CallNotConnectedCard";
import AgentListCard from "../component/AgentListCard";
function HomePage() {
  return (
    <div className="bg-gray-100 w-full h-dvh flex flex-col  space-y-3 ">
      <div className="top w-full flex flex-row bg-gray-100 justify-between">
        <div className="flex flex-row items-start space-x-4">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs bg-white"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs bg-white"
          />
        </div>

        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>

      <div className="mid-1 flex flex-row justify-between h-2/4">
        <div className="flex col  space-x-4 ">
          <TotalCallCard />
          <CallConnectedCard />
          <CallNotConnectedCard />
        </div>
        <div className="flex h-full w-full ml-4 ">
          <AgentListCard />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default HomePage;

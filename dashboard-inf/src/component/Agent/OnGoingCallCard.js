import React from "react";
import { BsFillTelephoneXFill } from "react-icons/bs";
function OnGoingCallCard({ onHangUp }) {
  return (
    <div className="h-2/4  w-full flex flex-col justify-center">
      <div className="space-x-2 flex justify-center">
        <button onClick={(e) => onHangUp(e)}>
          <div className=" rounded-xl flex flex-col kbd w-16 h-12 bg-red-400">
            <BsFillTelephoneXFill />
            End
          </div>
        </button>
      </div>
    </div>
  );
}

export default OnGoingCallCard;

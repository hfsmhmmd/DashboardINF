import React from "react";
import { AiOutlinePhone } from "react-icons/ai";

function CallNotConnectedCard() {
  return (
    <div className=" card w-72 bg-white shadow-xl rounded-xl ">
      {/* <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes"
      />
    </figure> */}
      <div className="h-2/5   flex flex-row items-center justify-center">
        <div className="bg-rose-500 h-4/5 w-4/5 rounded-xl flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center">
            <AiOutlinePhone
              className="h-46"
              size={40}
              fill="#FFFFFF"
              //   outline="#00000"
            />{" "}
            <p className="text-white">25</p>
          </div>
          <h1 className="text-white">Total Connected</h1>
          <h2 className="text-white">25 call in queue</h2>
        </div>
      </div>
      <div className=" card-body flex flex-col justify-between ">
        <div className="bg-white flex flex-row justify-center">
          <h2 className="card-title">Statistics</h2>
        </div>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="flex flex-row justify-between h-2/5 ">
          <div className="rounded-md  bg-rose-500 rounded-md w-2/5 flex flex-col justify-evenly">
            <p className="text-white text-xl text-center">00:10</p>
            <p className="text-white text-xs text-center">longest wait time </p>
          </div>

          <div className="rounded-md  bg-rose-500  rounded-md  w-2/5 flex flex-col justify-evenly">
            <p className="text-white text-xl text-center">00:06</p>
            <p className="text-white text-xs text-center">Average wait time </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallNotConnectedCard;

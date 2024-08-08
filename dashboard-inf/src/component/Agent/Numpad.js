import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineClear } from "react-icons/ai";
import { BsArrowBarLeft } from "react-icons/bs";
function Numpad({ onNumberClick, onClear, onSubmit, onBackClick }) {
  const rows = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  const numberToLetters = {
    1: '',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKT',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ',
    0: '',
    '*': '',
    '#': ''
  };

  return (
    <div className=" flex w-full justify-center  ">

      <div className=" flex flex-col  items-center">

      {rows.map((row, rowIndex) => (
  <div
    key={rowIndex}
    className={` ${row.length === 1 ? "flex justify-center" : "flex justify-between"} `}
  >
    {row.map((num) => (
      <button key={num} onClick={(e) => onNumberClick(e, num)}>
        <div className="w-28 h-16 border border-gray-100 focus:bg-gray-100 flex flex-col items-center justify-center">
          <div>{num}</div>
          <div className="text-xs ">{numberToLetters[num]}</div>
        </div>
      </button>
    ))}
  </div>
))}
       
        <div className="mt-4 space-x-4 flex justify-center">
          <button onClick={(e) => onClear(e)}>
            <div className="flex flex-col kbd w-16 h-12 bg-red-400">
              <AiOutlineClear />
              Clear
            </div>
          </button>
          <button onClick={(e) => onSubmit(e)}>
          <div className="rounded-xl flex flex-col kbd w-16 h-12 bg-white border-2  border-green-700 text-black">
            <AiOutlinePhone fill="#00000" />
            Call
          </div>
        </button>
          <button onClick={(e)=> onBackClick()}>
            <div className=" rounded-xl flex flex-col kbd w-16 h-12 border-2 border-gray-400 bg-gray-200">
              Back
            </div>
          </button>
          {/* <button>
            <div className=" rounded-xl flex flex-col kbd w-16 h-12 border-2 border-gray-400 bg-gray-200 ">
              <BsArrowBarLeft />
              Erase
            </div>
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Numpad;

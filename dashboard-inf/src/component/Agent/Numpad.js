import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineClear } from "react-icons/ai";
import { BsArrowBarLeft } from "react-icons/bs";
function Numpad({ onNumberClick, onClear, onSubmit }) {
  const rows = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  return (
    <div className="my-2 flex w-full justify-center gap-1">
      <div className=" space-y-4 flex flex-col  items-center">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`space-x-4 ${
              row.length === 1 ? "flex justify-center" : ""
            }`}
          >
            {row.map((num) => (
              <button key={num} onClick={(e) => onNumberClick(e, num)}>
                <kbd className="kbd w-12 h-12 rounded-xl shadow-md bg-gray-100">
                  {num}
                </kbd>
              </button>
            ))}
          </div>
        ))}

        <div className="space-x-2 flex justify-center">
          <button onClick={(e) => onClear(e)}>
            <div className="flex flex-col kbd w-16 h-12 bg-red-400">
              <AiOutlineClear />
              Clear
            </div>
          </button>
          <button onClick={(e) => onSubmit(e)}>
            <div className="rounded-xl flex flex-col kbd w-16 h-12 bg-green-400">
              <AiOutlinePhone />
              call
            </div>
          </button>
          <button>
            <div className=" rounded-xl flex flex-col kbd w-16 h-12 border-2 border-gray-400 bg-gray-200 ">
              <BsArrowBarLeft />
              Erase
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Numpad;

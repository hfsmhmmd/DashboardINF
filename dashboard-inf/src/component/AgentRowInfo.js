import React from "react";
import { AiFillEdit } from "react-icons/ai";

function AgentRowInfo(props) {
  const name = props.details.name;
  const species = props.details.species;
  const image = props.details.image;
  const num = props.details.id;
  console.log("props", props);
  //   console.log("props", props);
  //   console.log(name);
  return (
    <div className="flex flex-row justify-between px-2 ">
      <div className="flex flex-row space-x-2 items-center justify-betweeen">
        {/* <p>{num}</p> */}
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={image} />
          </div>
        </div>
        <div className="flex flex-col justify-evenly">
          <b className="text-sm"> {name}</b>
          <p className="text-xs"> {species}</p>
        </div>
      </div>
      <button>
        <AiFillEdit className="mr-3" size={18} />
      </button>
    </div>
  );
}

export default AgentRowInfo;

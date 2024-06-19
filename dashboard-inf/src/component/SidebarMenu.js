import React from "react";
// import { AiTwotoneDelete , AiTwotoneEdit,  AiTwotoneEye} from "react-icons/ai";
import { AiFillHome, AiFillSignal } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineUserSwitch, AiFillDatabase } from "react-icons/ai";

// import
function SidebarMenu() {
  return (
    <div>
      <ul className="menu rounded-box space-y-4">
        <li>
          <Link to={`/dashboard`}>
            <AiFillHome
              style={{
                fill: "white",
              }}
            />
            <h2 className="sidebara_list_text">Dashboard </h2>
          </Link>
        </li>
        <li>
          <Link to={`/dashboard`}>
            <AiFillDatabase
              style={{
                fill: "white",
              }}
            />
            <h2 className="sidebara_list_text">PBX </h2>
          </Link>
        </li>
        <li>
          <Link to={`/dashboard/UserControl`}>
            <AiOutlineUserSwitch
              style={{
                fill: "white",
              }}
            />
            <h2 className="sidebara_list_text"> User Control</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SidebarMenu;

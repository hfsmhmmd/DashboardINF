import React from "react";
import WidgetPhone from "../../component/Agent/WidgetPhone";

import { AiTwotonePhone, AiOutlinePhone } from "react-icons/ai";

function HomePageAgent() {
  return (
    <div className="w-full">
      HomePageAgent
      <div className="drawer drawer-end overflow-y-hidden">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full h-screen">
          {/* Page content here */}

          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn border-2 border-purple-500 bg-white"
          >
            <span>
              {/* <AiTwotonePhone size={36}/> */}
              <AiOutlinePhone size={34} fill="#A020F0" />
            </span>
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu  text-base-content min-h-full w-2/6 overflow-y-hidden ">
            <div className="flex flex-col justify-start items-center h-screen  overflow-y-hidden">
              <WidgetPhone />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePageAgent;

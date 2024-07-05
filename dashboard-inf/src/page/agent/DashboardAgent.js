import React, { useState, useEffect } from "react";
import SidebarMenu from "../../component/SidebarMenu";
import UserControlPage from ".././UserControlPage";
import NavbarMenu from "../../component/NavbarMenu";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import logoInfPutih from "../../assets/logoInfPutih.png";

function DashboardAgent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [contentShown, setContentShown] = useState("");

  const toggleSidebar = () => {
    console.log("isSidebarOpen", isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="max-h-screen">
      <div
        className={`drawer ${
          isSidebarOpen ? "drawer-open" : "drawer-close"
        } bg-white`}
      >
        {/* <div className="drawer lg:drawer-close"> */}
        <div className="w-4/12 ">
          <button
            className="btn btn-primary drawer-button "
            onClick={toggleSidebar}
          >
            {/* <img src={logoInfPutih}></img> */}

            <AiFillCaretRight />
            {/* {isSidebarOpen ? 'Close drawer' : 'Open drawer'} */}
          </button>
        </div>
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
          checked={isSidebarOpen}
          onChange={toggleSidebar}
        />

        <div className="drawer-content h-screen flex flex-row items-start justify-center py-2 px-3 bg-white ">
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <div className="menu p-4 w-64 min-h-full bg-indigo-700 text-base-content">
            {/* Sidebar content here */}

            <Link to={`/dashboard/agent/aghome `}>
              <img src={logoInfPutih}></img>
            </Link>

            <SidebarMenu />
            <button
              className="btn btn-primary drawer-button "
              onClick={toggleSidebar}
            >
              Close Sidebar
              <AiFillCaretLeft />
              {/* {isSidebarOpen ? 'Close drawer' : 'Open drawer'} */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAgent;

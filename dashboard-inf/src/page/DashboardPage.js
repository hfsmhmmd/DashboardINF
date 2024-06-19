import React, { useState, useEffect } from "react";
import SidebarMenu from "../component/SidebarMenu";
import UserControlPage from "./UserControlPage";
import NavbarMenu from "../component/NavbarMenu";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { Routes, Route, Outlet } from "react-router-dom";
import logoInfPutih from "../assets/logoInfPutih.png";
function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [contentShown, setContentShown] = useState("");

  const toggleSidebar = () => {
    console.log("isSidebarOpen", isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
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

        <div className="drawer-content flex flex-row items-start justify-center ">
          {/* Page content here */}
          <Outlet></Outlet>
          {/* {contentShown === '' && <UserControlPage/>} */}
          {/* {contentShown === 'componentB' && <ComponentB />}
                {contentShown === 'componentC' && <ComponentC />}
           */}
        </div>

        <div className="drawer-side">
          <div className="menu p-4 w-80 min-h-full bg-indigo-700 text-base-content">
            {/* Sidebar content here */}
            <img src={logoInfPutih}></img>
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

      {/* <Routes> */}
      {/* <Route path="dashboard/UserControl" element={<UserControlPage />} /> */}
      {/* <Route path='dashboard/ViewBook/:id' element={<ViewBook/>}/> */}
      {/* <Route path='dashboard/UpdateBook/:id' element={<UpdateBook/>}/> */}
      {/* <Route path='dashboard/DeleteBook/:id' element={<DeleteBook/>}/>\  */}
      {/* </Routes> */}
    </div>
  );
}

export default DashboardPage;

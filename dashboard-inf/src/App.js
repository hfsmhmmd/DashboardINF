import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from "./page/LoginPage";
import DashboardPage from "./page/DashboardPage";
import UserControlPage from "./page/UserControlPage";
import SidebarMenu from "./component/SidebarMenu";
import StatisticsPage from "./page/StatisticsPage";
import HomePage from "./page/homePage";

import DashboardAgent from "./page/agent/DashboardAgent";
import HomePageAgent from "./page/agent/HomePageAgent";
import CreateUserForm from "./component/CreateUserForm";

import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineUserSwitch,
} from "react-icons/ai";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [contentShown, setContentShown] = useState("");

  const toggleSidebar = () => {
    console.log("isSidebarOpen", isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />

          <Route path="/dashboard/super" element={<DashboardPage />}>
            <Route path="usercontrol" element={<UserControlPage />} />
            <Route path="createuser/tenant" element={<CreateUserForm />} />
            <Route path="statistics" element={<StatisticsPage />} />
            <Route path="home" element={<HomePage />} />
          </Route>

          <Route path="/dashboard/agent" element={<DashboardAgent />}>
            <Route path="AGhome" element={<HomePageAgent />} />
          </Route>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

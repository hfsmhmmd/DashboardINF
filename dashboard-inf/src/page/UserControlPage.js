import React, { useState, useEffect } from "react";
import SidebarMenu from "../component/SidebarMenu";
import ReactPaginate from "react-paginate";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineUserAdd,
  AiFillFilter,
  AiFillEye,
  AiFillEdit,
  // AiFillEye,
  AiFillDelete,
} from "react-icons/ai";

import NavbarMenu from "../component/NavbarMenu";

function UserControlPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    console.log("isSidebarOpen", isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [userList, setuserList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reseponse = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await reseponse.json();
        // setData(data.data)
        // console.log(data.data)
        setuserList(data.results);
        // setIsLoading(false)
      } catch (error) {
        console.log(error);
        // setIsLoading(false)
      }
    };
    fetchData();
  }, []);

  if (userList) {
    console.log(userList);
  }

  return (
    <div className="h-screen w-full">
      <NavbarMenu />
      <div className="flex flex-col items-start space-y-4 ml-4 w-11/12">
        <h1 className="text-2xl ml-2">User Control</h1>
        <div className="flex flex-row space-x-4  items-center justfiy-evenly  w-full">
          {/* <div className="flex flex-row  spcae-x-6 bg-gray-200  w-full "> */}
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full max-w-xs bg-white border border-black "
          />
          <button className="btn">
            Filter <AiFillFilter fill="white" />{" "}
          </button>
          {/* </div>
          <div className="bg-gray-100 w-2/4 flex flex-row items-center justify-evenly"> */}
          <button className="btn bg-yellow-300 text-black hover:bg-yellow-500 border-0">
            Create tenant Account <AiOutlineUserAdd fill="black" />
          </button>
          <button className="btn bg-green-400 text-black hover:bg-green-600 border-0">
            Create Agent Account <AiOutlineUserAdd fill="black" />{" "}
          </button>
          {/* </div> */}
        </div>
        <table className="table ">
          <thead>
            <tr>
              <th></th>
              <th> # </th>
              <th>Name </th>
              <th> Origin </th>
              <th> role </th>
              <th> Permission </th>
              <th className="pl-10"> actions </th>
            </tr>
          </thead>

          <tbody className="">
            {userList
              ? userList.map((item, index) => (
                  <tr key={index}>
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox border-2 border-gray-500"
                        />
                      </label>
                    </th>
                    <td>{index + 1}</td>
                    <td>
                      <div className=" flex items-center gap-3">
                        <div className="avatar skeleton ">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            <p className="text-biru capitalize">{item.name}</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>PT Infomedia Nusantara</td>
                    <td> {item.species}</td>
                    <td>
                      <span className="badge text-white badge-xl px-2">
                        rrwwdd
                      </span>
                    </td>
                    <th>
                      <div className="space-x-2">
                        {/* <Link to={`/dashboard/ViewBook/${item._id}`}> */}
                        <button className="btn btn-md ">
                          <AiFillEye fill="white" />
                        </button>
                        {/* </Link> */}

                        {/* <Link to={`/dashboard/UpdateBook/${item._id}`}> */}
                        <button className="btn btn-md">
                          <AiFillEdit fill="white" />
                        </button>
                        {/* </Link> */}

                        {/* <Link to={`/dashboard/DeleteBook/${item._id}`}> */}
                        <button className="btn btn-ms">
                          <AiFillDelete fill="white" />
                        </button>
                        {/* </Link> */}
                      </div>
                    </th>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserControlPage;

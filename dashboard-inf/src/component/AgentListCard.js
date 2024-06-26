import { useState, useEffect } from "react";
import AgentRowInfo from "./AgentRowInfo";

function AgentListCard() {
  const [userList, setuserList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reseponse = await fetch(
          "https://rickandmortyapi.com/api/character/?species=Human"
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
    // console.log(userList);
  }
  return (
    <div className="p-1 w-full bg-white shadow-xl rounded-xl max-h-2/4 ">
      <div className=" h-1/6 p-1 w-full flex flex-row justify-between items-center">
        <h1 className="font-bold text-black text-xl">Agent</h1>
        <button>view all</button>
      </div>

      <div className="flex h-4/5 max-h-screen flex-col space-y-2 overflow-y-scroll overflow-x-hidden">
        {userList.map((agent, index) => (
          <AgentRowInfo details={agent} />
        ))}
      </div>
    </div>
  );
}

export default AgentListCard;

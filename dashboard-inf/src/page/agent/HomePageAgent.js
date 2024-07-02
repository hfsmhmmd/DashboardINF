import React from 'react'
import WidgetPhone from "../../component/Agent/WidgetPhone"

import { AiTwotonePhone, AiOutlinePhone } from "react-icons/ai";


function HomePageAgent() {
  return (
    <div className='w-full'>HomePageAgent
      <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-full h-screen">
        {/* Page content here */}
        
        <label htmlFor="my-drawer-4" className="drawer-button btn border-2 border-purple-500 bg-white">
          <span>  
          {/* <AiTwotonePhone size={36}/> */}
          <AiOutlinePhone size={34}
          fill='#9c27b0'/>
            </span></label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-2/6 p-4  ">
        <div className='flex flex-col justify-center items-center'>
          <WidgetPhone/>
          </div>
        
        </ul>
      </div>
    </div>
        
    
    </div>
  )
}

export default HomePageAgent
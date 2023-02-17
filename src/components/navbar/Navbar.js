import React from 'react'
// import React, { useState } from 'react'
import { navLinksdata } from '../../constants';

function Navbar() {
  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-bodyColor 
         mx-auto flex justify-between items-center font-titleFont 
         border-b-[1px] border-b-gray-600">
      <div  className="text-3xl font-normal">
        <span>GHOUSE </span><span className="text-designColor">K1</span>
      </div>
      <div>
      <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 
              tracking-wide cursor-pointer
            hover:text-designColor duration-300"
              key={_id}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
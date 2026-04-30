"use client"
import { CloseOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { Flex, Input  } from 'antd'
import React, { useState } from 'react'

export default function Navbar() {
  const naveItems:string[]=["Home","Fresher","Interships","Experience","Remote"]
  const [open,setOpen]=useState(false)
  return (
<nav className='w-full fixed bg-white  top-0 left-0  z-50'>
     <Flex className='lg:px-40! px-2!  py-2! justify-between shadow-2xl  '>
      <div className='lg:text-4xl   text-2xl text-red-600 font-bold '>#<span className='text-black'>Daily</span>Jobs</div>
    <div className='gap-8 hidden md:flex'>
      <span ><Input.Search placeholder="Filled" variant="filled" />
  </span>
            <ul className='flex items-center gap-8'>
        {naveItems.map(i=>(
          <li key={i} className='hover:text-red-600 font-bold text-xl'>{i}</li>
        ))}
      </ul>
    </div>
      <div className='md:hidden'><button onClick={()=>setOpen(!open)}>{open ?<CloseOutlined />:<MenuOutlined /> } </button> </div>
   </Flex>
   {open &&
      <div className='md:hidden bg-red-600 rounded-2xl mx-2 my-1'>
        {naveItems.map(i=>(
          <div onClick={()=>setOpen(!open)} key={i} className='text-center py-2 text-xl hover:text-white'>{i}</div>
        ))}
      </div>
   }
</nav>
  );
}

"use client"
import { CloseOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { Flex, Input  } from 'antd'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navbar() {
const naveItems = [
  { label: "Home", link: "/" },
  { label: "Fresher", link: "/?type=fresher" },
  { label: "Internship", link: "/?type=internship" },
  { label: "Experience", link: "/?type=experience" },
  { label: "About Us", link: "/about" }
];
  const [open,setOpen]=useState(false)
  const [search, setSearch] = useState('')
  const router = useRouter()
  return (
<nav className='w-full fixed bg-white  top-0 left-0  z-50'>
     <Flex className='lg:px-40! px-2!  py-2! justify-between shadow-2xl  '>
      <div className='lg:text-4xl   text-2xl text-red-600 font-bold '>#<span className='text-black'>Daily</span>Jobs</div>
            <span >
        <Input.Search
      placeholder="Search by location or category..."
      variant="filled"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onSearch={(val) => router.push(`/?search=${val}`)}
      allowClear
      onClear={() => router.push('/')}
    />
  </span>
    <div className='gap-8 hidden md:flex'>

            <ul className='flex items-center gap-8'>
        {naveItems.map(i=>(
          
          <Link className='text-xl font-bold text-black! hover:text-red-500!' key={i.label} href={i.link}>{i.label}</Link>))}
      </ul>
    </div>
      <div className='md:hidden'><button onClick={()=>setOpen(!open)}>{open ?<CloseOutlined />:<MenuOutlined /> } </button> </div>
   </Flex>
   {open &&
      <div className='md:hidden flex flex-col bg-red-600 rounded-2xl mx-2  mt-2'>
        {naveItems.map(i=>(
          <Link href={i.link} onClick={()=>setOpen(!open)} key={i.label} className='text-center py-2 text-2xl font-bold hover:text-white'>{i.label}</Link>
        ))}
      </div>
   }
</nav>
  );
}

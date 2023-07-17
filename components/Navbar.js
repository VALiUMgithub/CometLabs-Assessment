import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
            <img src="/assets/logo-purple.svg" alt="logo" />
            <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
                <p className='hover: cursor-pointer hover:rounded hover:bg-black/5 px-2 py-1'>Courses</p>
                <p className='hover: cursor-pointer hover:rounded hover:bg-black/5 px-2 py-1'>About Us</p>
                <p className='hover: cursor-pointer hover:rounded hover:bg-black/5 px-2 py-1'>Teacher</p>
                <p className='hover: cursor-pointer hover:rounded hover:bg-black/5 px-2 py-1'>Pricing</p>
                <p className='hover: cursor-pointer hover:rounded hover:bg-black/5 px-2 py-1'>Careers</p>
                <p className='hover: cursor-pointer hover:rounded hover:bg-black/5 px-2 py-1'>Blog</p>
            </div>
            <button className='btn bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full'>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Navbar
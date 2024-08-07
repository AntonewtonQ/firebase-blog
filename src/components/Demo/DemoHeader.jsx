import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/medium.png";
import { nav } from '../../data';
import Auth from "./Auth/Auth";

const DemoHeader = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
        const scrollMe = () => {
            window.scrollY > 50 ? setIsActive(true): setIsActive(false);
        }
        window.addEventListener("scroll", scrollMe);
    },[]);

  return (
    <header className={`border-b border-black sticky top-0 z-50 
      ${isActive ? "bg-white" : "bg-banner"} 
    transition-all duration-500`}>
        <div className='size h-[70px] flex items-center justify-between'>
            <Link>
                <img 
                className='h-[2.5rem]'
                src={logo} 
                alt="lOGO" 
                />
            </Link>
            <div className='flex items-center gap-5'>
                <div className='hidden text-sm sm:flex items-center gap-5' >
                    {nav.map((link,index)=>(
                        <Link key={index} to={link.path}>{link.title}</Link>
                    ))}
                </div>
                <div className='relative'>
                    <button className='hidden text-sm sm:flex items-center gap-5'>Sign in</button> 
                </div>
                <Auth />
                <button className={` text-white px-3 p-2 rounded-full text-sm font-medium 
                    ${isActive ? "bg-green-700" : "bg-black"}`
                    }>
                    Get Started
                </button>
            </div>
        </div>
    </header>
  )
}

export default DemoHeader
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, FaHome } from 'react-icons/fa'
import { BsFillPersonFill, BsMenuUp } from 'react-icons/bs'
import { GiSkills } from 'react-icons/gi'
import { MdConnectWithoutContact } from 'react-icons/md'


const Navbar = () => {

    let navElement = useRef(null)

    useEffect(()=>{
        gsap.to(
            navElement, { duration: 1, opacity: 1, delay: 3}
        )
    },[])

    return (
        <div id='Navbar' className='opacity-0'
            ref={ el => { navElement = el }}
            >
            <div className='z-[10] bg-white lg:bg-opacity-0 fixed group bottom-0 lg:h-[340px] h-[70px] lg:w-[120px] w-[100vw] text-[0.85rem]'>
                <div className='flex flex-row lg:flex-col lg:justify-between justify-around items-center mx-auto max-w-[300px] gap-[25px] translate-y-[25px] lg:transform-none'>
                <Link href='/'>
                    <div className='w-fit flex gap-y-3 items-center cursor-pointer'><FaHome size={20} /><div className='ml-[7px] lg:group-hover:w-[65px] w-0 duration-700 overflow-hidden'>Home</div></div>
                </Link>
                <Link href='/#About'>
                    <div className='w-fit flex gap-y-3 items-center cursor-pointer'><BsFillPersonFill size={20} /><div className='ml-[7px] lg:group-hover:w-[65px] w-0 duration-700 overflow-hidden'>About</div></div>
                </Link>
                <Link href='/#Works'>
                    <div className='w-fit flex gap-y-3 items-center cursor-pointer'><BsMenuUp size={20} /><div className='ml-[7px] lg:group-hover:w-[65px] w-0 duration-700 overflow-hidden'>Portfolio</div></div>
                </Link>
                <Link href='/'>
                    <div className='w-fit flex gap-y-3 items-center cursor-pointer'><GiSkills size={20} /><div className='ml-[7px] lg:group-hover:w-[65px] w-0 duration-700 overflow-hidden'>Skills</div></div>
                </Link>
                <Link href='/#Contact'>
                    <div className='w-fit flex gap-y-3 items-center cursor-pointer'><MdConnectWithoutContact size={20} /><div className='ml-[7px] lg:group-hover:w-[65px] w-0 duration-700 overflow-hidden'>Contact</div></div>
                </Link>
                </div>
                <div className='hidden lg:flex h-[90px] w-0 justify-center'>
                    <div className='h-full w-[1.5px] dark'></div>
                </div>
            </div>
            <div className='z-[10] bg-white lg:bg-opacity-0 fixed group lg:right-0 lg:bottom-0 w-full lg:w-[120px] flex-row lg:flex-col justify-end items-center lg:h-[320px] text-[0.85rem]'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='group-hover:h-0 overflow-hidden h-[60px] lg:h-[220px] duration-700 lg:w-[120px]'>
                        <p className='lg:rotate-90 origin-center translate-y-[15px] lg:translate-y-[60px] translate-x-[1px]'>
                            tushargautam762@gmail.com
                        </p>
                    </div>
                    <div className='flex lg:flex-col justify-around items-center gap-[30px] h-0 overflow-hidden group-hover:h-[60px] lg:group-hover:h-[200px] lg:w-[120px] duration-700 origin-bottom'>
                        <Link href='https://www.linkedin.com/in/tushar-gautam-connect/'>
                            <div className='w-fit flex gap-y-3 items-center cursor-pointer'><FaLinkedinIn size={20} /></div>
                        </Link>
                        <Link href='https://www.github.com/tushar-rg'>
                            <div className='w-fit flex gap-y-3 items-center cursor-pointer'><FaGithub size={20} /></div>
                        </Link>
                        <Link href='https://www.github.com/tushar-rg'>
                            <div className='w-fit flex gap-y-3 items-center cursor-pointer'><AiOutlineMail size={20} /></div>
                        </Link>
                        <Link href='https://www.github.com/tushar-rg'>
                            <div className='w-fit flex gap-y-3 items-center cursor-pointer'><GiSkills size={20} /></div>
                        </Link>
                    </div>
                    <div className='fixed hidden lg:block bottom-0 h-[90px] w-[1.5px] dark'>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
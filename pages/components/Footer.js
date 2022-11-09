import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Link from 'next/link'

function Footer() {
    return (
        <div className='flex justify-center h-[30vh] lg:h-[20vh] bg-[#dddddd] w-[80vw] mx-auto'>
            <div className='flex flex-col lg:flex-row lg:justify-between justify-center gap-[5vh] h-full w-full text-[1rem] max-w-[2950px] mx-12'>
                <div className='flex justify-center lg:justify-start items-center lg:w-1/3 gap-[2.5rem]'>
                    <div className='cursor-pointer hover:scale-125 ease-in duration-100'>
                        <Link href='https://www.linkedin.com/in/tushar-gautam-connect'>
                            <FaLinkedinIn size={20} />
                        </Link>
                    </div>
                    <div className='cursor-pointer hover:scale-125 ease-in duration-100'>
                        <AiOutlineMail size={20} />
                    </div>
                    <div className='cursor-pointer hover:scale-125 ease-in duration-100'>
                        <Link href='https://github.com/Tushar-rg'>
                            <FaGithub size={20} />
                        </Link>
                    </div>
                    <div className='cursor-pointer hover:scale-125 ease-in duration-100'>
                        <BsFillPersonLinesFill size={20} />
                    </div>
                </div>
                <div className='lg:w-1/3 justify-center flex items-center lg:translate-x-3'>
                    <p>Tushar Gautam</p>
                </div>
                <div className='lg:w-1/3 flex items-center justify-center lg:justify-end'>
                    @2022
                </div>
            </div>
        </div>
    )
}

export default Footer
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap/dist/gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import { FaLinkedinIn, FaGithub, FaHome } from 'react-icons/fa'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill, BsMenuUp } from 'react-icons/bs'
import { GiSkills } from 'react-icons/gi'
import { MdConnectWithoutContact } from 'react-icons/md'

function Contact() {
    let contactHeading = useRef(null)
    let contactPara = useRef(null)
    let contactForm = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(contactHeading, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#contactPara',
                start: 'top bottom',
            }
        })
        gsap.to(contactPara, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.4,
            scrollTrigger: {
                trigger: '#contactPara',
                start: 'top bottom',
            }
        })
        gsap.to(contactForm, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.4,
            scrollTrigger: {
                trigger: '#contactPara',
                start: 'top bottom',
            }
        })
    }, [])
    return (
        <>
            <div id='Contact' className='h-[105vh] lg:h-[100vh] lg:mx-[15vw] mx-[6vw] flex flex-col lg:flex-row items-center justify-center overflow-hidden'>
                <div className='flex flex-col justify-center lg:w-[50%] w-full h-full lg:-mt-[9vh]'>
                    <h2
                        className='my-[2vh] lg:my-[1vw] opacity-0 translate-y-[40px]'
                        ref={el => { contactHeading = el }}
                    >
                        Contact
                    </h2>
                    <div
                        ref={el => { contactPara = el }} id='contactPara' className='flex flex-col gap-[3vh] opacity-0 translate-y-[40px]'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row-reverse lg:flex-row  justify-between lg:justify-center w-[95%]'>
                                <div className='lg:mx-[2vh] w-full lg:w-[75%]'>
                                    <h4 className='text-[1rem]'>Leave a message for me</h4>
                                    <p className='w-full'>Use the Form to connect with me via Email.</p>
                                </div>
                                {/* <AiOutlineMail size={30} className='m-[]' /> */}
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row-reverse lg:flex-row  justify-between lg:justify-center w-[95%]'>
                                <div className='lg:mx-[2vh] w-full lg:w-[75%]'>
                                    <h4 className='text-[1rem]'>Other ways to connect</h4>
                                    <p className='w-full'>Click the icons to connect with me via Github or Linkedin.</p>
                                </div>
                                {/* < BsFillPersonLinesFill size={30} className='m-[]' /> */}
                            </div>

                        </div>
                    </div>
                </div>
                <div
                    ref={el => { contactForm = el }}
                    id='#contactForm'
                    className='flex flex-col-reverse lg:flex-row items-center lg:w-[75%] w-full h-full opacity-0 translate-x-10'>
                    <div className='w-full lg:w-[100%] lg:h-[50%] mx-auto p-[1vh] bg-[#dddddd] mb-[25vh] lg:mb-[0] translate-y-[1vw]'>
                        <form action='https://formspree.io/f/mqkjepvj' method='POST'>
                            <div className='grid md:grid-cols-2 gap-3'>
                                <div className='flex flex-col'>
                                    <input name='Name' className='flex p-3' type='text' placeholder='Your Name' autoComplete='off' required />
                                </div>
                                <div className='flex flex-col'>
                                    <input name='Email' className='flex p-3' type='email' placeholder='Your Email' autoComplete='off' required />
                                </div>
                            </div>
                            <div className='grid md:grid-cols-1 gap-3 w-full py-3'>
                                <div className='flex flex-col'>
                                    <input name='Sub' className='flex p-3' type='text' placeholder='Subject' autoComplete='off' required />
                                </div>
                                <div className='flex flex-col'>
                                    <textarea name='Message' className='flex p-3' rows='5' type='text' placeholder='Your Message' autoComplete='off' required spellCheck='false' />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='flex lg:flex-col justify-between items-center px-[4vw] my-[4vh] py-[2vw] lg:translate-x-[3vw] w-full max-w-[500px] lg:w-[30%] lg:h-[45%]'>
                        <Link href='https://www.linkedin.com/in/tushar-gautam-connect/'>
                            <div className='w-fit flex gap-y-3 items-center cursor-pointer'><FaLinkedinIn size={25} /></div>
                        </Link>
                        <Link href='https://www.github.com/tushar-rg'>
                            <div className='w-fit flex gap-y-3 items-center cursor-pointer'><FaGithub size={25} /></div>
                        </Link>
                        <Link href='https://www.github.com/tushar-rg'>
                            <div className='w-fit flex gap-y-3 items-center cursor-pointer'><AiOutlineMail size={25} /></div>
                        </Link>
                        <Link href='/https://www.github.com/tushar-rg'>
                            <div className='w-fit flex gap-y-3 items-center cursor-pointer'><GiSkills size={25} /></div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
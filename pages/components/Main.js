import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap/dist/gsap.js'
import { Power2 } from 'gsap'

const Main = () => {

    let nameHeading = useRef(null)
    let descText = useRef(null)
    let helloText = useRef(null)
    let board = useRef(null)

    const icons = [
        '/assets/icons/react.png',
        '/assets/icons/next.png',
        '/assets/icons/node.png',
        '/assets/icons/postgres.png',
        '/assets/icons/python.png',
        '/assets/icons/django.png',
        '/assets/icons/tailwind.png'
    ]

    useEffect( () => {
        gsap.to( helloText, {
            duration: 0.8, y: 0, opacity: 1, ease: "power2.out"
        })
        gsap.to( nameHeading, {
            duration: 0.8, y: 0, opacity: 1, color: 'black', ease: "power2.out"
        })
        gsap.to( descText, {
            duration: 0.8, y: 0, opacity: 1, color: 'black', delay: 0.8 ,ease: "power2.out"
        })
        gsap.to( board, {
            duration: 0.6, opacity: 1, delay: 1.5, width: '83vw', ease: "power2.out"
        })
    },[])

    return (
        <div className='flex justify-center items-center w-[100vw] h-[100vh] overflow-hidden'>
            <div className='relative py-[10px] text-center md:text-left md:mx-0 mx-[15px] -top-[5%] lg:top-[5%] lg:right-[10%] overflow-hidden'>
                <p  ref={el => {helloText = el} } className='smallText translate-y-[60px] opacity-0'>Hi, My name is </p>
                <h1 
                    ref={el => {nameHeading = el}} 
                    className='-mt-[6px] lg:-mt-[4vh] opacity-0 translate-y-[40px] text-[#556565]'>
                    Tushar Gautam
                </h1>
                <div
                    ref={el => {descText = el}} 
                    className='lg:w-[375px] md:ml-[5vw] mt-[1vw] md:max-w-[55vw] opacity-0 translate-y-[30px]'>
                    Software Developer , located in Kanpur, UP looking for remote or on site work
                </div>
            </div>
            <div
                ref={el => {board = el}}  
                className='flex flex-col lg:flex-col justify-center items-end absolute -z-[10] md:h-[67vh] md:w-[23vw] h-[600px] w-[320px] opacity-0'>
                <div className='bg-[#dddddd] w-5/12 h-full'>

                </div>
            </div>
        </div>
    )
}

export default Main


{/* <div className='overflow-hidden h-10 group-hover:h-0 duration-300 flex items-end justify-center'>
                        <p className='block uppercase text-sm tracking-widest text-gray-600 mb-1'>Lets Start something new Together</p>
                    </div>
                    <Link href='/#Stack'>
                        <div className='overflow-hidden h-0 group-hover:h-10 duration-300 flex items-center justify-around m-auto w-72 mix-blend-luminosity cursor-pointer'>
                            <Image src={reactIcon} alt='' height={30} width={30} />
                            <Image src={nextIcon} alt='' height={30} width={30} className='opacity-70' />
                            <Image src={nodeIcon} alt='' height={30} width={30}  />
                            <Image src={djangoIcon} alt='' height={30} width={30} />
                            <Image src={postgresIcon} alt='' height={30} width={30} />
                            <Image src={tailwindIcon} alt='' height={30} width={30} />
                            <Image src={pythonIcon} alt='' height={30} width={30} />
                        </div>
                    </Link> */}

{/* <div className='flex w-[83vw] items-end flex-col lg:flex-row'>
                        <div className='h-72 p-10'>
                            <div className='flex overflow-hidden lg:-mt-6'>
                                <h1 className='rotate-[30deg] opacity-0 origin-top-left group-hover:rotate-0 group-hover:opacity-100 duration-1000'>Tushar</h1>
                            </div>
                            <div className='flex overflow-hidden lg:-mt-14'>
                                <h1 className='rotate-[30deg] opacity-0 origin-top-left group-hover:rotate-0 group-hover:opacity-100 duration-1000'>Gautam</h1>
                            </div>
                            <div className='group-hover:h-0 h-10 absolute flex items-center justify-between overflow-hidden duration-300 -mt-[4.5rem] w-80 mix-blend-luminosity cursor-pointer'>
                                <Image src={reactIcon} alt='' height={25} width={25} />
                                <Image src={nextIcon} alt='' height={25} width={25} className='opacity-70' />
                                <Image src={nodeIcon} alt='' height={25} width={25}  />
                                <Image src={djangoIcon} alt='' height={25} width={25} />
                                <Image src={postgresIcon} alt='' height={25} width={25} />
                                <Image src={tailwindIcon} alt='' height={25} width={25} />
                                <Image src={pythonIcon} alt='' height={25} width={25} />
                            </div>
                        </div>

                        <div className='flex flex-col w-full h-[100%] text-end justify-end items-end'>
                            <div className='mb-14'>
                                <p>Student software Developer</p>
                                <p>design stsds io cbksafc sagfcasic</p>
                            </div>
                        </div>
                    </div> */}



{/*                     
                    <div className='text-gray-300 max-w-[90%] lg:max-w-[70%] m-auto overflow-hidden h-0 group-hover:h-36 md:group-hover:h-30 duration-300 items-center'>
                        <div className='md:flex gap-4 my-3'>
                            <button>
                                <div className='flex items-center justify-center gap-2'>
                                    Resume <HiOutlineDocumentText />
                                </div>
                            </button>
                            <button>
                                <Link href='/#Contact'>
                                    <div className='flex items-center justify-center gap-2'>
                                        Hire Me <BsPersonPlus />
                                    </div>
                                </Link>
                            </button>
                            <button>
                                <Link href='https://www.linkedin.com/in/tushar-gautam-connect/'>
                                    <div className='flex items-center justify-center gap-2'>
                                        Linked In <TbBrandLinkedin />
                                    </div>
                                </Link>
                            </button>
                            <button>
                                <div className='flex items-center justify-center gap-2'>
                                    Something <MdLinkedCamera />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='first:text-gray-300 max-w-[90%] lg:max-w-[800px] m-auto overflow-hidden h-36 md:h-30 group-hover:h-0 duration-300 items-center'>
                        <p className='py-2'>Lorem ipsum dolor, sit rporis odit sapientolias illum deleniti ducimus! Ullam iure omnis mollitia delectus neque deserunt iste minus quam. Molestias dolores nostrum distinctio.</p>
                    </div> */}
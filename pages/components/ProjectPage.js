import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import weatherImg from '../../public/assets/weather-app.png'
import { FaGithub } from 'react-icons/fa'
import { BsGlobe2 } from 'react-icons/bs'
import { RiShareBoxFill } from 'react-icons/ri'

function ProjectPage({ title, bg, projectUrl, projectGithub, tech }) {
  const titleSplit = title.split(" ")
  return (
    <>
      <div className='Main'>
        <div className='flex'>
          <div className='lg:flex mx-auto pt-[26vh] lg:pt-16 w-[80vw] h-[65vh] md:h-[85vh] justify-between items-center'>
            <div className='name'>
              <h1 className='-mt-8 md:-mt-10 text-left name'>{titleSplit[0]}</h1>
              <h1 className='-mt-4 md:-mt-12 md:-my-16 text-left name'>{titleSplit[1]}</h1>
            </div>
            <div className='flex flex-col h-[11rem] lg:h-[13rem] justify-between lg:items-end lg:w-[28vw]'>
              <div className='flex gap-2 mt-[5vh]'>
                <Link href={projectUrl}>
                  <button className='flex'>Live<BsGlobe2 size={20} /></button>
                </Link>
                <Link href={projectGithub}>
                  <button className='flex'>Code<FaGithub size={20} /></button>
                </Link>
              </div>
              <p className='w-full lg:text-end'>
                {tech}
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-center bg-zinc-400 w-full h-[90vh] my-4 p-[8vh] overflow-scroll no-scrollbar'>
          <div className='flex justify-center mx-40'>
          <div className='relative h-[65vh] w-[120vh] m-[2vh]'>
            <Image src={bg} alt='' layout='fill' />
          </div>
          <div className='flex flex-col gap-[0.7vh]'>
            <div className='relative h-[30vh] w-[64vh] m-[2vh]'>
              <Image src={bg} alt='' layout='fill' />
            </div>
            <div className='relative h-[30vh] w-[64vh] m-[2vh]'>
              <Image src={bg} alt='' layout='fill' />
            </div>
          </div>
          <div className='relative h-[65vh] w-[38vh] m-[2vh]'>
            <Image src={bg} alt='' layout='fill' />
          </div>
          </div>
        </div>
        <div className='md:flex py-10 px-5 md:px-20 h-[95vh] opposite capitalize'>
          <p className='text-indigo-200 font-semibold m-5'>
            Python django
          </p>
          <div className='md:w-7/12 mx-5 text-sm md:mr-20 opacity-80'>
            * A Simple weather app usin reactjs and some third party api hope you like items
            * A Simple weather app usin reactjs and some third party api hope you like items
            * A Simple weather app usin reactjs and some third party api hope you like items
            * A Simple weather app usin reactjs and some third party api hope you like items
            * A Simple weather app usin reactjs and some third party api hope you like items
            * A Simple weather app usin reactjs and some third party api hope you like items
            * A Simple weather app usin reactjs and some third party api hope you like items
            * A Simple weather app usin reactjs and some third party api hope you like items
            * A Simple weather app usin reactjs and some third party api hope you like items
          </div>

        </div>
      </div>

      {/* <div className='flex gap-7 p-10'>
        Also Check Out --- 
        <Image className='block rounded' src={bg} alt='' height={180} width={310} />
        <Image className='block rounded' src={bg} alt='' height={180} width={310} />
        <Image className='block rounded' src={bg} alt='' height={180} width={310} />
        <Image className='block rounded' src={bg} alt='' height={180} width={310} />
      </div> */}
    </>
  )
}

export default ProjectPage
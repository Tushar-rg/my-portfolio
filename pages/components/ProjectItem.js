import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { BsGlobe2 } from 'react-icons/bs'
import { RiShareBoxFill } from 'react-icons/ri'
import autoprefixer from 'autoprefixer'

const ProjectItem = ({ title, bg, projectUrl, projectGithub, tech, pageLink }) => {
  return (
    <div className='flex flex-col justify-between duration-500 h-full overflow-hidden'>
      <div className='w-full h-full text-black'>
        <Link href={pageLink}>
        <div
          className='h-full w-full flex flex-col justify-between'
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: 'cover',
            backgroundPositionX: '50%',
            width: '100%',
            heigth: '100%',
          }}
        >
          <div className='bg-[#dddddd] p-2 h-10'><p className='relative uppercase font-semibold text-[1.1rem]'>{title}</p></div>
          <div className='bg-[#dddddd] p-2 h-8'><p className='relative text-[0.7rem]'>{tech}</p></div>
        </div>
        </Link>
      </div>
      <div>
        <div className='flex gap-[0.8rem] w-full mt-[10px] text-[0.9rem]'>
          <Link href={projectUrl}>
            <button className='w-[50%] p-1 md:p-2 group'>
              <BsGlobe2 size={18} className='cursor-pointer group-hover:scale-125 duration-1000' />Live
            </button>
          </Link>
          <Link href={projectGithub}>
            <button className='w-[50%] p-1 md:p-2 group'>
              <FaGithub size={18} className='cursor-pointer group-hover:scale-125 duration-1000' />Code
            </button>
          </Link>
        </div>
      </div>
      {/* <Link href={pageLink} >
            <p className='flex text-[0.7rem] lg:text-xs items-center text-center rounded cursor-pointer'>More Info< RiShareBoxFill className='ml-2' /></p>
          </Link> */}

    </div>
  )
}

export default ProjectItem























{/* <div className='content overflow-hidden z-10'>
          <div className='flex flex-col justify-start items-center h-0 group-hover:h-[4.5rem] duration-300 overflow-hidden'>
            <h3 className='text-lg text-white '>{title}</h3>
            <p className='text-xs opacity-70'>{tech}</p>
          </div>

          <div className='flex items-center justify-center absolute border-[1px] w-[30rem] h-[20rem] border-[#000000] rounded-lg -z-20'>
            <Image className='rounded shadow-black shadow-xl duration-300' src={bg} alt='/' layout='fill' />
          </div>

          <div className='flex flex-col justify-between h-[7.5rem] group-hover:h-0 group-hover:pb-0 overflow-hidden text-left'>
            <p className='text-[0.75rem] my-4 opacity-70'>By far the best trick for had boom, everything looks aligned :D</p>
            <h3 className='text-lg'>{title}</h3>
          </div>

          <div className='flex justify-between items-end w-full h-0 group-hover:h-[3rem] overflow-hidden duration-300 '>
            <Link href={pageLink} >
              <p className='flex text-sm items-center text-center rounded cursor-pointer'>More Info< RiShareBoxFill className='ml-2' /></p>
            </Link>

            <div className='flex gap-4 items-start pb-[0.125rem]'>
              <Link href={projectUrl}>
                <BsGlobe2 size={20} className='cursor-pointer hover:scale-125 duration-100' />
              </Link>
              <Link href={projectGithub}>
                <FaGithub size={20} className='cursor-pointer hover:scale-125 duration-100' />
              </Link>
            </div>

          </div>
        </div> */}
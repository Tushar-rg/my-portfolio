import React from 'react'
import Image from 'next/image'
import imageWeather from '../../public/assets/weather.png'
import imageQna from '../../public/assets/qna-website.png'
import imagePortfolio from '../../public/assets/portfolio.png'
import imageNetflix from '../../public/assets/netflix.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

function Works() {
  return (
    <div className='flex flex-col justify-center items-center w-[100vw] mt-[30px] mb-[150px]'>
      <div id='Works' className=' w-auto'>
        <h2 className='block w-full text-left lg:-translate-x-[4pxpx] my-[40px]'>Projects</h2>
        <div className='grid lg:grid-cols-2 h-[1300px] lg:h-[55vw] w-[88vw] lg:w-[70vw] gap-x-[25px] gap-y-[95px] lg:max-w-[75vw]'>
          <ProjectItem
            title='Weather App'
            bg={imageWeather}
            tech='ReactJs OpenWeatherAPI TailwindCSS'
            projectUrl='https://weather-app-11dc0.web.app/'
            projectGithub='https://github.com/Tushar-rg/weather-app'
            pageLink='/weatherpage'
          />
          <ProjectItem
            title='Qna Website'
            bg={imageQna} 
            tech='Python Django'
            projectUrl='http://tushargautam.pythonanywhere.com/'
            projectGithub='https://github.com/Tushar-rg/Qna-Website'
            pageLink='/qnapage'
          />
          <ProjectItem
            title='My Portfolio'
            bg={imagePortfolio} 
            tech='Next.js Gsap TailwindCSS'
            projectUrl='/'
            projectGithub='https://github.com/Tushar-rg/'
            pageLink='/qnapage'
          />
          <ProjectItem
            title='Netflix Homepage'
            bg={imageNetflix} 
            tech='React.js, TMDB api'
            projectUrl='https://tushar-s-netflix-demo-bf969.web.app/'
            projectGithub='https://github.com/Tushar-rg/'
            pageLink='/qnapage'
          />
        </div>
      </div>
    </div>
  )
}

export default Works
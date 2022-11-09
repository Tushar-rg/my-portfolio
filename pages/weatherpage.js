import React from 'react'
import ProjectPage from './components/ProjectPage'

const WeatherPage = () => {
  return (
    <>
      <ProjectPage 
       title='Weather app' 
       bg='/../public/assets/weather-app1.png'        
       tech='ReactJs, OpenWeatherAPI, TailwindCSS'
       projectUrl='https://weather-app-11dc0.web.app/'
       projectGithub='https://github.com/Tushar-rg/weather-app'
       />
    </>
  )
}

export default WeatherPage
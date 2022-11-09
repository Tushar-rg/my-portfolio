import React, {useEffect, useRef} from 'react'
import gsap from 'gsap/dist/gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import { Power2 } from 'gsap'
import { FaCentercode } from 'react-icons/fa'

function About() {

    let aboutHeading = useRef(null)
    let aboutPara = useRef(null)
    let aboutPic = useRef(null)

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.to( aboutHeading, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#aboutPara', 
                start: 'top bottom',
            }
        })
        gsap.to( aboutPara, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.3,
            scrollTrigger: {
                trigger: '#aboutPara', 
                start: 'top bottom',
            }
        })
        gsap.to( aboutPic, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.2,
            scrollTrigger: {
                trigger: '#aboutPara', 
                start: 'top bottom',
            }
        })
    },[])

    return (

        <div id='About' className='h-[80vh] lg:h-[100vh] lg:mx-[15vw] mx-[6vw] flex flex-col-reverse lg:flex-row items-center justify-center overflow-hidden'>
            <div className='flex flex-col justify-center lg:w-[60%] h-full mt-[15px] md:mt-0'>
                <h2 
                     ref={el => {aboutHeading = el}}
                     className='opacity-0 translate-y-[40px]'
                >
                    About Me</h2>
                <p id='aboutPara'
                    ref={el => {aboutPara = el}}
                    className='opacity-0 translate-y-[40px] my-4 lg:pl-10'>
                    {/* Lorem ipsum dololique eaque obcaecati accusamus quibusdam dolores nisi necessitatibus, et possimus impedit, aliquid facere animi. Iure consequatur repudiandae quae dicta consectetur error iste in accusamus cum perferendis. Ipsam natus cumque veniam sint! Ad quidem quas unde, nesciunt hic pariatur facilis eum adipisci quisquam alias ipsa similique quis a libero ut, dicta blanditiis! Earum quae, doloribus accusantium ex velit explicabo maxime assumenda qui sed, dolores neque sint eos, deserunt aut nesciunt consectetur excepturi dolorem soluta nemo atque voluptate. Quibusdam architecto officia eos delectus iste placeat atque natus repellendus reprehenderit voluptatibus. Repellendus et unde perferendis beatae voluptatem! Obcaecati, corporis. */}
                    Hi, My Name is Tushar and I'm a Final Year Computer Applications Student located in Kanpur, UP currently Looking for an oppurtunity to work on Real World Projects in the Field Of Web / Software Development with technologies such as- React.Js, Node.Js and MongoDB. I also have a sound understanding of Django, Django REST Framework and PostgresSQL with proficiency in C/C++, Python and JavaScript programming languages.
                </p>
            </div>
            <div
                id='#aboutPic'
                ref = {el => {aboutPic = el}} 
                className='flex items-center lg:w-[50%] w-full h-full translate-x-10 opacity-0'>
                <div className='w-full lg:w-[85%] lg:h-[50%] h-full mx-auto bg-[#dddddd]'>

                </div>
            </div>
        </div>

    )
}

export default About

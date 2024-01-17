import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';

type Props = {}

export default function Projects({}: Props) {

  const projects_ = [
    {
      projectId: 1,
      projectTitle: 'Tata Motors Online Sales Platform',
      projectDesc: "With the help of this web application customers may buy a Tata Motors CV vehicle online, customize it to their specifications, find out the on-road cost, work out the vehicle's benefit-to-cost ratio, and much more.",
      projectLink: "https://buytrucknbus.tatamotors.com/",
    },
    {
      projectId: 2,
      projectTitle: 'Covid-19 Tracker (03/2020 - 04/2020)',
      projectDesc: "It is a web application, where anyone can get Real Time update of Corona virus cases globally Representation is available in Numerical and Graphical format.",
      projectLink: "https://github.com/kartikmukatiCovid-19-Tracker",
    },
    {
      projectId: 3,
      projectTitle: 'Travelites (03/2021 - 04/2021)',
      projectDesc: "This project will help anyone to get information about different places or destination worldwide. This is the gathered information about historical places, weekend gateways, summer trips, and many more.",
      projectLink: "",
    },
  ];

  return (
    <motion.div
    initial={{opacity: 0,}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}} 

    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-center mx-auto items-center z-0'>

    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
    </h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-manadatory z-20 scrollbar
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
           {projects_.map((project,i) => 
            <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
              items-center justify-center p-20 md:p-44 h-screen '>
                <motion.img 
                initial={{y: -300,opacity: 0,}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1.2}} 
                viewport={{once: true}}

                src="/images/project-logo.webp" alt="" width={300} height={300}/>
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                  <h4 className='text-4xl font-semibold text-center'><span className='underline decoration-[#F7AB0A]'>Case Study {i+1} of {projects_.length}:</span> {project.projectTitle}</h4>

                  <p className='text-lg text-center md:text-left'>{project.projectDesc}</p>

                  <a className='text-sm text-center md:text-left text-blue-600 dark:text-blue-500 hover:underline' href={project.projectLink} target="_blank">{project.projectLink}</a>
                </div>
              </div>
           )}
        </div>
    

    <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}
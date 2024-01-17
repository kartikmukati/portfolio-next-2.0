import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {}

export default function WorkExperience({}: Props) {

   const jobResponsibilities = {
    tt: [
        "Responsible for developing and managing Tata Motors Online Sales Platform for CV Vehicles",
        "Experience in designing and creating responsive, and optimized AngularJS web applications",
        "Experience in creating and managing PostgreSQL schema, table, rows, and mapping operations.",
        "Proficient in developing REST APIs using NodeJS and Django."
    ],
    tcs: [
        "Developing Web Application, User Interface, API’s using Java Script Frameworks.",
        "Experience in designing and creating responsive, re-usable and optimized components in ReactJS.",
        "Proficient in managing states and implementing hooks provided by React Library.",
        "Experience in creating and managing Mongo DB schema, collection, documents using Mongoose.",
        "Extensive experience in developing and deploying websites utilizing various open-source package."
    ],
    wappgo: [
        "Developing Web Application, User Interface, API’s using Java Script Frameworks."
    ]
   } 

  return (
    <motion.div
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1.5,
    }}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-mandatory scrollbar 
    scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 mt-36'>
            <ExperienceCard title={"Tata Technologies"} imageTitle={"tata-technologies-logo.png"} designation={"Solution Developer"} period={'Started work 13, Mar 2023 - Present'} jobResponsibilities={jobResponsibilities.tt}/>

            <ExperienceCard title={"Tata Consultancy Services "} imageTitle={"tcs-logo.png"} designation={"Assistant System Engineer"} period={'Started work 17, Jun 2021 - Ended work 27, Jan 2023'}
            jobResponsibilities={jobResponsibilities.tcs}/>

            <ExperienceCard title={"Wappgo"} imageTitle={"wappgo-logo.png"} designation={"Developer"} period={'Started work 01, May 2020 - Ended work 31, Aug 2020'}
            jobResponsibilities={jobResponsibilities.wappgo}/>
        </div>

    </motion.div>
  )
}
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';

type Props = {title: string,imageTitle: string, designation: string, period: string, jobResponsibilities: []}

export default function ExperienceCard({title, imageTitle,designation, period, jobResponsibilities}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] 
    md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img 
      initial={{
        y: -100,
        opacity:0,
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      transition={{
          duration: 1.2,
      }}
      viewport={{ once: true}}
      className='w-42 h-32 rounded-full xl:w-[200px] xl:h[200px] object-cover object-cente' 
      src={`/images/${imageTitle}`} alt='tcs'/>

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{designation}</h4>
        <p className='font-bold text-2xl mt-1'>{title}</p>
        <div className='flex space-x-2 my-2'>
          <img className='h-10 w-10 rounded-full object-cover' src='/images/angular-logo.svg' alt='' />
          <img className='h-10 w-10 rounded-full object-cover' src='/images/django-logo.jpg' alt='' />
          <img className='h-10 w-10 rounded-full object-cover' src='/images/javascript-logo.png' alt='' />
          <img className='h-10 w-10 rounded-full object-cover' src='/images/postgresql-logo.png' alt='' />
        </div>
        <p className='uppercase text-sm py-5 text-gray-300'>{period}</p>

      <ul className='list-disc space-y-4 ml-5 text-lg'>
        {jobResponsibilities.map((point,index) => {
          return <li key={index}>{point}</li>
        })}
      </ul>
      </div>
    </article>
  )
}
import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';


type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0,
    }}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 
    min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hove over a skill for currency profieciency</h3>

        <div className='grid grid-cols-3 gap-5'>
            <Skill imagePath='/images/javascript-logo.png' skillPercentage='90%'/>
            <Skill imagePath='/images/angular-logo.svg'    skillPercentage='70%'/>
            <Skill imagePath='/images/django-logo.jpg'     skillPercentage='50%'/>
            <Skill imagePath='/images/postgresql-logo.png' skillPercentage='70%'/>
            <Skill imagePath='/images/react-logo.png' skillPercentage='95%'/>
            <Skill imagePath='/images/nextjs-logo.svg' skillPercentage='80%'/>
            <Skill imagePath='/images/nodejs-logo.png' skillPercentage='70%'/>
            <Skill imagePath='/images/mongodb-logo.png' skillPercentage='70%'/>
            <Skill imagePath='/images/postman-logo.svg' skillPercentage='100%'/>
           
        </div>

        </motion.div>
  )
}
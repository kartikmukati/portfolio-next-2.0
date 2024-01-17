import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function About({ }: Props) {
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
        className='flex flex-col relative h-screen text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{
                    once: true
                }}
                src="/images/main-photo.jpg"
                className='mt-36 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                md:rounded-lg md:w-65 md:h-95 xl:w-[500px] xl:h-[600px]'
               
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a {" "}
                    <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "} background</h4>
                <p className='text-base'>
                    I am a JavaScript Full Stack Web Developer with almost three of experience, specializing in ReactJS, NextJS, AngularJS, NodeJS, Python, Django, MongoDB, PostgreSQL and Java Script Frameworks/Libraries.

                    I have worked on enterprise-level web projects by providing solutions to help customer build and market their own web-based products.

                    I am skilled in the use of these frameworks to develop web applications based on Single Page Applications (SPA), Multi Page Applications (MPA) architectures.
                    I have developed and deployed many web applications utilizing various open-source packages.
                </p>
            </div>
        </motion.div>
    )
}
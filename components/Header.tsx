'use client'

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className='flex flex-row items-center'>
                {/* Social Icons */}
                <SocialIcon url="https://github.com/kartikmukati/"
                    fgColor="gray"
                    bgColor="transparent"
                    network="github" />
                <SocialIcon url="https://www.linkedin.com/in/kartik-mukati/"
                    fgColor="gray"
                    bgColor="transparent"
                    network="linkedin" />
                <SocialIcon url="https://www.youtube.com/@kartik.mukati"
                    fgColor="gray"
                    bgColor="transparent"
                    network="youtube" />
                <SocialIcon url="https://www.instagram.com/unfilteredcode/"
                    fgColor="gray"
                    bgColor="transparent"
                    network="instagram" />
                <SocialIcon url="https://twitter.com/kartik_mukati"
                    fgColor="gray"
                    bgColor="transparent"
                    network="twitter" />
            </motion.div>

            
                <motion.div 
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                    className='flex flex-row items-center text-gray-300 cursor-pointer'>
                    <SocialIcon 
                        className="cursor-pointer"
                        network="email"
                        fgColor="gray"
                        bgColor="transparent" />
                    <p className="uppercase md:inline-flex text-sm text-gray-400"><Link href={'#contact'}>Get In Touch</Link></p>
                </motion.div>
            
        </header>
    )
}
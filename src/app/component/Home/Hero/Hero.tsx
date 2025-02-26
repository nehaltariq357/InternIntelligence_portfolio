"use client"
import { BaseInfo } from '@/app/Data/data'
import React from 'react'
import { FaDownload } from 'react-icons/fa'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-black overflow-hidden relative text-white'>
        <div className='flex justify-center flex-col w-4/5 h-full mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
            {/* text content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className='text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold'>I am {BaseInfo.name}</h1>
                <h1 className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold lg:leading-[3.5rem] md:leading-[3rem] xl:leading-[4rem]'>
                  {BaseInfo.position}
                </h1>
                <p className='mt-6 text-sm md:text-base text-white text-opacity-60'>{BaseInfo.description}</p>
                <motion.button 
                  className='md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                    <span>Download</span>
                    <FaDownload/>
                </motion.button>
            </motion.div>
            
            {/* image content */}
            <motion.div 
              className='mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-hidden'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
                <Image src={BaseInfo.profilePic} alt={BaseInfo.name} width={500} height={500} />
            </motion.div>
          </div> 
        </div>
    </div>
  )
}

export default Hero;

import React from 'react'
import Image from 'next/image'

interface Skill {
  id: number
  title: string
  image: string
  percent: string
}

interface SkillCardProps {
  skill: Skill
}

const SkillCard= ({ skill }:SkillCardProps) => {
  const { image, percent, title } = skill
  return (
    <div className='p-10 hover:bg-blue-900 h-52 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900'>
      <Image
        src={image}
        alt={title}
        width={80}
        height={100}
        className='object-cover mx-auto'
      />
      <h1 className='text-[18px] mt-4 text-white font-[600]'>{title}</h1>
      <div className='bg-black rounded-lg p-2 text-white opacity-40'>{percent}</div>
    </div>
  )
}

export default SkillCard

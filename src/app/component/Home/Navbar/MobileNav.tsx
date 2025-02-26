import { navLinks } from '@/app/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'
 
interface Types {
  showNav: boolean;
  closeNav: () => void;
}


const MobileNav = ({showNav,closeNav}:Types) => {

  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]"
  return (
    <div>
 {/*  overlay */}
 <div className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}>MobileNav</div>
 {/* navlinks */}

 <div className={`text-white ${navOpen} transform transition-all duration-500 delay-300  fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-black space-y-6 z-[10000]`}>
 {navLinks.map((navLink)=>{
                return(
                    <Link key={navLink.id} href={navLink.url}>
                        <p className='nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]'>{navLink.label}</p>
                    </Link>
                )
            })}
            {/* close button */}

            <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6'/>
 </div>
    </div>
   
  )
}

export default MobileNav
"use client"

import { BiMenuAltRight } from 'react-icons/bi'
import { RiMenu3Fill } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import { useState, useEffect,useRef } from 'react'
import Link from 'next/link'
import { useClickAway } from 'react-use'

export default function Header() {

        
    const [isNavOpen, setIsNavOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null);


        useClickAway(menuRef, ()=> {
            setIsNavOpen(false)
        } )   
      
        useEffect(() => {
          if (isNavOpen) {
            document.body.classList.add('overflow-hidden');
          } else {
            document.body.classList.remove('overflow-hidden');
          }
        }, [isNavOpen]);


        return (
        <header  className={`w-full h-[75.5px] bg-green-600 flex justify-between px-8 items-center ${isNavOpen ? 'px-0 ' : ''} ` }>
            
            <div>
                <p className={`text-white ${isNavOpen ? 'pl-4': '' } `}>mattscript</p>
            </div>
            
            <section>
              {isNavOpen ? (<div  className="   flex flex-col gap-12 items-end relative w-full   " ref={menuRef}>
                <AiOutlineClose className={`text-white hover:cursor-pointer absolute top-[-1rem] md:top-[-2rem] w-14 h-8 md:w-14 md:h-14 ${isNavOpen ? 'pr-5' : '' } `} onClick={() => setIsNavOpen(false)}/>
                    <nav className='w-screen absolute text-green-500   md:right-0 font-exoSpace text-[25px] h-screen md:h-auto  md:text-[40px]  lg:text-[48px] tracking-[3px] font-black text-center md:text-right uppercase top-9 gap-4    flex flex-col md:w-[400px] p-6  m-0  bg-black md:bg-gray-800  '>
                        <Link href="/" className="" onClick={() => setIsNavOpen(false)}>home</Link>
                        <Link href="/work" className="" onClick={() => setIsNavOpen(false)} >work</Link>
                        <Link href="https://drive.google.com/file/d/1FM3UEnB0XijwiRm4ulDKsjDA_asiMjML/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="" onClick={() => setIsNavOpen(false)} >resume</Link>
                        <Link href="/about" className="" onClick={() => setIsNavOpen(false)} >about me</Link>
                        <Link href="mailto:faggymatt007@gmail.com" className="" onClick={() => setIsNavOpen(false)} >contact</Link>
                    </nav>
                </div>): (
                <div onClick={()=> setIsNavOpen(true) } className="w-8 h-6  md:w-12 md:h-8 lg:w-16 lg:h-12 flex flex-col gap-1.5 items-end hover:cursor-pointer "  >
                    
                     <div className=" w-8 md:w-12  lg:w-16 h-2 bg-white rounded-full"></div>
                    <div className="w-5 md:w-8  lg:w-12 h-2 bg-white rounded-full "></div> 
                    <div className="w-8 md:w-12 lg:w-8 h-2 bg-white  rounded-full"></div> 
                
                </div>

                )}

            </section>

            

        </header>
    )
}
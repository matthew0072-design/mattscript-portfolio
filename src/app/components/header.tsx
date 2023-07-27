"use client"

import { BiMenuAltRight } from 'react-icons/bi'
import { RiMenu3Fill } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import Link from 'next/link'


export default function Header() {

        const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <header className="w-full h-[75.5px] bg-green-500 flex justify-between px-8 items-center relative  ">
            
            <div>
                <p className="text-white">mattscript</p>
            </div>
            
            <section>
              {isNavOpen ? (<div  className="   flex flex-col gap-1.5 items-end">
                <AiOutlineClose className=' text-white hover:cursor-pointer absolute top-4  ' onClick={() => setIsNavOpen(!isNavOpen)}/>
                    {/* <nav className='grid text-white '>
                        <Link href="/">home</Link>
                        <Link href="/">work</Link>
                        <Link href="/">resume</Link>
                        <Link href="/">contact</Link>
                    </nav> */}
                </div>): (
                <div onClick={()=> setIsNavOpen(!isNavOpen) } className="w-8 h-6  md:w-12 md:h-8 lg:w-16 lg:h-12 flex flex-col gap-1.5 items-end hover:cursor-pointer "  >
                    
                    <div className=" w-8 md:w-12  lg:w-16 h-2 bg-white rounded-full   "></div>
                    <div className="w-5 md:w-8  lg:w-12 h-2 bg-white rounded-full "></div>
                    <div className="w-8 md:w-12 lg:w-8 h-2 bg-white  rounded-full"></div>
                    {/* <BiMenuAltRight /> */}
                </div>

                )}

            </section>

            

        </header>
    )
}
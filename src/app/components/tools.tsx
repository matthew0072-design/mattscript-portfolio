import Image from 'next/image'

export default function Tools(){

    return(
        <main className="flex  flex-col bg-black p-8  items-center text-white gap-8  justify-around font-exoSpace text-xl font-bold tracking-widest ">
            <div className="shadow-green border-green-500 h-16 px-4 py-2  border-2 font-ribeka uppercase text-green-500 rounded-xl font-black leading-[48px] text-[22px] md:text-[44.8px] tracking-[0.2rem] "><p>tooling</p></div>
            
            <div className=" w-full md:w-[90%] lg:w-[762px] grid gap-4 grid-cols-2 md:grid-cols-4 p-2 md:p-4 justify-around border-2 text-sm md:text-lg tracking-wide  rounded-2xl bg-green-500 border-green-500    ">
                
                    <div className="bg-black p-4  rounded-2xl text-center flex  items-center gap-2 lg:gap-4 ">
                        <Image src="/html2.png" alt="html" width={300} height={300} className='w-4 h-4   md:w-8 md:h-8 ' />
                        <p> HTML</p>

                    </div>
                    <div className="bg-black   rounded-2xl text-center flex p-4    items-center gap-2 lg:gap-4 ">
                        <Image src="/css.png" alt="css" width={300} height={300} className='w-5 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10  ' />
                        <p className=''> CSS</p>
                    </div>
                    <div className="bg-black  rounded-2xl flex  p-4 items-center gap-2 lg:gap-4 ">
                        <Image src="/js.png" alt="js" width={300} height={300} className='w-5 h-4 md:w-6 md:h-8 ' />
                        <p>Javascript</p>
                    </div>
                    <div className="bg-black   rounded-2xl p-4 flex  items-center gap-2 lg:gap-4 ">
                        <Image src="/typescript.png" alt="html" width={300} height={300} className='w-5 h-4 md:w-6 md:h-8 ' />    
                        <p>Typescript</p>
                    </div>
                    <div className="bg-black  rounded-2xl flex p-4 items-center gap-2  lg:gap-4 text-center ">
                        <Image src="/reactjs.png" alt="react" width={300} height={300} className='w-5 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10 'priority />
                        <p> React</p>
                    </div>
                    <div className="bg-black  rounded-2xl flex p-4 items-center gap-2 lg:gap-4 ">
                        <Image src="/nextjs.webp" alt="next" width={300} height={300} className='w-5 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10 'priority />
                        <p>Nextjs</p>
                    </div>
                    <div className="bg-black  rounded-2xl flex p-4 items-center gap-2 lg:gap-4 ">
                        <Image src="/nodejs.png" alt="node" width={300} height={300} className='w-5 h-4 md:w-10 md:h-10 'priority />    
                        <p>Node</p>
                    </div>
                    <div className="bg-black  rounded-2xl flex p-4 items-center gap-2 lg:gap-4 ">
                        <Image src="/mongodb.png" alt="mongodb" width={300} height={300} className='w-5 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10  'priority />    
                        <p>MongoDB</p>
                    </div>
                    <div className="bg-black  rounded-2xl flex p-4 items-center gap-2 lg:gap-4 ">
                        <Image src="/express.png" alt="express" width={300} height={300} className='w-5 h-4 md:w-7 md:h-8 'priority />    
                        <p>Expressjs</p>
                    </div>
                    <div className="bg-black  rounded-2xl flex p-4 items-center gap-2 lg:gap-4 ">
                        <Image src="/redux.png" alt="redux" width={300} height={300} className='w-5 h-4 md:w-10 md:h-10 'priority />    
                        <p>Redux</p>
                    </div>
                    <div className="bg-black  rounded-2xl flex p-4 items-center gap-2 lg:gap-4">
                        <Image src="/tailwindcss.svg" alt="tailwind" width={300} height={300} className='w-5 h-4 md:w-10 md:h-10 'priority />    
                        <p>Tailwind</p>
                    </div>
                    <div className="bg-black  rounded-2xl flex p-2 items-center gap-2 lg:gap-4 ">
                    <Image src="/materialUI.png" alt="html" width={300} height={300} className='w-5 h-4 md:w-7 md:h-7 ' />    
                        <p>Material UI</p>
                    </div>
                
                
            </div>
        </main>
    )
}
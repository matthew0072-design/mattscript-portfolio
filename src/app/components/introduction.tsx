import Image from 'next/image'

export default function Introduction(){

    return(
        <main className="flex justify-around  flex-col  gap-4 md:gap-8 lg:gap-4 lg:h-[560px] lg:flex-row  py-8 items-center bg-[url('/portfolio.png')] text-white font-exoSpace text-lg md:text-xl  lg:text-2xl lg:tracking-[1.5px] font-bold ">
            <div className=' lg:h-[393.2px]    '>
                <p className='text-green-400 text-base w-[250px] m-auto md:mx-0 md:ml-10 text-center lg:ml-0 py-2 lg:text-2xl lg:w-[320px] rounded-xl border-green-400 tracking-[1.12px] font-black h-[40px]  lg:py-2 lg:px-2 border  '>Greetings!!! I&apos;m Mattscript</p>
                 <p className="font-ribeka text-lg text-center md:text-left md:ml-10 md:text-2xl lg:ml-0 leading-9 mt-4 lg:text-[40px] font-bold tracking-[1.12px] lg:leading-[60px] text-green-400 ">Experienced Fullstack Developer</p>
                <p className='w-[90%] lg:w-[797px] mx-4 md:mx-auto lg:mx-4  mt-4 lg:leading-10  '> empowering startups to launch and scale products successfully. Recognized for practical development skills, leading cross-functional teams, and meeting project deadlines. 
                Passionate about leveraging cutting-edge technologies to deliver impactful solutions. Thrives on problem-solving and collaboration, turning ambitious ideas into reality. Committed to staying updated with industry trends for continuous growth. 
                Let&apos;s drive your startup&apos;s success together!</p>
                
            </div>
            <div className=''>
                <Image src="/matt_removebg.png" alt="my pics" width={300} height={300} className='w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[400px] lg:h-[400px] rounded-full border-2 border-green-400 ' />
            </div>
        </main>
    )
}
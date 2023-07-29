import Image from 'next/image'
import Link from 'next/link'

export default function ShowRoom(){

    return (
        <main className='flex flex-col gap-8 w-full relative bg-black text-white'>
            <div className='w-[160px] md:w-[260px] md:text-[36px] lg:text-[44.8px] font-black leading-7 md:leading-[48px]  text-center m-auto p-2 rounded-xl border-[#14E956]  md:h-16 lg:w-[350px] border-2 items-center justify-center uppercase text-[#14E956] tracking-wider font-ribeka '>
                <p>gallery</p>
            </div>
            <div className='flex flex-col w-full '>
                <div className="flex items-center justify-center " >
                    <Image src="/lautech.svg" alt="lautech" width={300} height={300} className="w-[95%] md:w-[700px] h-[300px] opacity-70 "  />
                    
                </div>
                <div className='w-[95%] bg-white text-black md:h-[250px] md:w-[700px] rounded-b-2xl flex justify-center items-center leading-8 flex-col m-auto font-exoSpace text-lg font-semibold p-4 '>
                    <p className='text-[28px] leading-[30px] font-black uppercase text-left w-full font-exoSpace text-green-500   '>Transit Booking application</p>
                    <p>The Transit Booking Application for the university is a user-friendly platform designed to streamline transportation services within the campus. With this application, students and faculty can conveniently book campus shuttles or transportation services for various university events and activities.
                    This Is A MERN Stack App With zustand (State Management tools). Find Source Code On My Github
                    </p>
                    <Link href="/" className='self-start border-2 rounded-2xl px-4  mb-1'>visit</Link>

                </div>
                
                    <Link href="/work" className='bg-[#14E956] md:h-[70px] p-4 uppercase rounded-[10px] tracking-wider mt-12 mb-6 border-green-500 m-auto font-black font-ribeka text-sm md:text-base lg:text-[35px] border-2 flex items-center justify-center text-black  ' >Extensive project insights</Link>
               
            </div>
            
        </main>
    )
}
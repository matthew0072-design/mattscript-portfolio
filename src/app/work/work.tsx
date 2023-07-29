import Image from 'next/image'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

export default function Work() {

return(
    <main className='bg-black  text-white flex flex-col font-exoSpace text-base md:text-xl gap-12 md:gap-16 lg:gap-36 w-full'>
        
        <div className='font-black font-ribeka uppercase md:tracking-[0.3rem] tracking-widest text-green-500 underline pt-8 text-center text-2xl md:text-[38px] '>
            <p>Activities</p>
        </div>
        
        <div className='flex flex-col gap-12 lg:flex-row justify-around leading-[30px]  '>
            <div className='w-full md:w-[798px] lg:h-[398px]  '>
                <Image src="/autophile.svg" alt="project" width={300} height={300} className='w-[90%] m-auto  h-[200px]  md:h-[398px] md:w-[700px] rounded-lg border ' />
            </div>
            <div className='w-full md:w-[533px] h-[302px] flex flex-col items-center gap-3 md:gap-8 md:self-center lg:self-end  '>
                <p className='font-black uppercase text-[#14E956] font-ribeka tracking-[3px] text-center md:w-[265px] border-4 p-3 border-green-500  '>Autophily</p>
                <p className='px-4 text-center lg:text-left'>E-commerce website dedicated to audio enthusiasts. Explore a vast selection of top-quality speakers, earpieces, and headsets, each designed to elevate your audio experience.</p>
                <Link href="https://autophily.vercel.app/" target="_blank" rel="noopener noreferrer" className='bg-[#14E956] font-black text-sm md:text-base tracking-wider py-2 px-4 flex items-center gap-2 font-ribeka lowercase text-center rounded-lg text-black ' >Visit <HiArrowNarrowRight /> </Link> 
            </div>
        </div>

        <div className='flex flex-col gap-12 lg:flex-row justify-around leading-[30px] '>
            <div className='w-full md:w-[798px] lg:h-[398px] lg:order-last '>
                <Image src="/planet.svg" alt="project" width={300} height={300} className='w-[90%] m-auto h-[200px] md:h-[398px] md:w-[700px] rounded-lg border ' />
            </div>
            <div className='w-full md:w-[533px] lg:h-[239px] flex flex-col items-center gap-3 md:gap-8 md:self-center '>
                <p className='font-black uppercase text-[#14E956] font-ribeka tracking-[3px] text-center md:w-[265px] border-4 p-3 border-green-500  '>planet</p>
                <p className='px-4 text-center lg:text-left'> A website to Explore these fascinating planet and the mysteries they hold. These celestial spheres remind us of the grandeur and diversity that exists beyond our own blue planet, Earth.</p>
                <Link href="https://planet-jet.vercel.app/" target="_blank" rel="noopener noreferrer" className='bg-[#14E956] font-black text-sm md:text-base tracking-wider py-2 px-4 flex items-center gap-2 font-ribeka lowercase text-center rounded-lg text-black ' >Visit <HiArrowNarrowRight /></Link> 
            </div>
        </div>

        <div className='flex flex-col gap-12 lg:flex-row justify-around leading-[30px]  '>
            <div className='w-full md:w-[798px] md:h-[398px]  '>
                <Image src="/restman2.png" alt="project" width={300} height={300} className='w-[90%] m-auto h-[200px] md:h-[398px] md:w-[700px] rounded-lg border ' />
            </div>
            <div className='w-full md:w-[533px] lg:h-[239px] flex flex-col items-center gap-3 md:gap-8 md:self-center  '>
                <p className='font-black uppercase text-[#14E956] font-ribeka tracking-[3px] text-center  p-4 border-4 py-3 border-green-500  '>seminar website</p>
                <p className='px-4 text-center lg:text-left'>The  gateway to knowledge and inspiration where thought leaders and experts converge to share invaluable insights. Discover a rich selection of thought-provoking topics, engaging workshops, and transformative experiences that empower personal and professional growth</p>
                <Link href="https://resimaster.vercel.app" target="_blank" rel="noopener noreferrer" className='bg-[#14E956] font-black text-sm md:text-base tracking-wider py-2 px-4 flex items-center gap-2 font-ribeka lowercase text-center rounded-lg text-black '  >Visit <HiArrowNarrowRight /></Link> 
            </div>
        </div>

        <div className='flex flex-col gap-12 lg:flex-row justify-around leading-[30px]  '>
            <div className='w-full md:w-[798px] md:h-[398px] lg:order-last '>
                <Image src="/landing.svg" alt="project" width={300} height={300} className='w-[90%] m-auto h-[200px] md:h-[398px] md:w-[700px] rounded-lg border ' />
            </div>
            <div className='w-full md:w-[533px] lg:h-[239px] flex flex-col items-center gap-3 md:gap-8  md:self-center '>
                <p className='font-black uppercase text-[#14E956] font-ribeka tracking-[3px] text-center md:w-[265px] border-4 p-2 md:py-3 border-green-500  '>landing page</p>
                <p className='px-4 text-center lg:text-left'> This landing page welcomes you with a compelling blend of design and content, setting the stage for an unforgettable experience. Discover a seamless user interface, highlighting key features, services, or products, enticing you to delve deeper.</p>
                <Link href="https://strong-rugelach-49a391.netlify.app/" target="_blank" rel="noopener noreferrer" className='bg-[#14E956] font-black text-sm md:text-base tracking-wider py-2 px-4 flex items-center gap-2 font-ribeka lowercase text-center rounded-lg text-black hover:opacity-90 ' >Visit <HiArrowNarrowRight /></Link> 
            </div>
        </div>

        <div className='flex flex-col gap-12 lg:flex-row justify-around leading-[30px] mb-24 '>
            <div className='w-full  md:w-[798px] md:h-[398px] '>
                <Image src="/lau2.png" alt="project" width={300} height={300} className='w-[90%] h-[200px] m-auto md:h-[398px] md:w-[700px] rounded-lg border ' />
            </div>
            <div className='w-full md:w-[533px] md:h-[302px] flex flex-col items-center gap-3 md:gap-8 md:self-center lg:self-end '>
                <p className='font-black uppercase text-[#14E956] font-ribeka tracking-[3px] text-center p-2 border-4 py-3 border-green-500  '>transit Booking App</p>
                <p className='text-center px-2 lg:text-left'>The Transit Booking Application for the university is a user-friendly platform designed to streamline transportation services within the campus. With this application, students and faculty can conveniently book campus shuttles or transportation services for various university events and activities.</p>
                <Link href="/" target="_blank" rel="noopener noreferrer" className='bg-[#14E956] font-black text-sm md:text-base tracking-wider py-2 px-4 flex items-center gap-2 font-ribeka lowercase text-center rounded-lg text-black ' >Visit <HiArrowNarrowRight /></Link> 
            </div>
        </div>

    </main>
)

}
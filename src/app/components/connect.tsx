import Link from 'next/link'
import Image from 'next/image'
export default function Connect(){

    return (
        <main className='flex flex-col bg-black text-green-500 w-full py-12 gap-12 '>
            <div className='text-3xl  lg:text-[48px] font-black uppercase leading-[48px] text-center font-exoSpace '>
                <p>Get in touch</p>
            </div>
            <div>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 font-exoSpace text-4xl md:text-[56px] font-semibold text-white   '>
                    <Link href="https://www.github.com/matthew0072-design" target="_blank" rel="noopener noreferrer" className='bg-[#333333] p-8 flex justify-around items-center'>Github 
                        <span className=''><Image src="/github.png" alt="github logo" width={300} height={300} className='w-14 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 ' /> </span> 
                    </Link>
                    <Link href="https://www.linkedin.com/in/fagoroye-ayobami-486759239" target="_blank" rel="noopener noreferrer" className='bg-[#0077B5] p-8 flex justify-around items-center'>Linkedin
                        <span className=''><Image src="/linkedin.webp" alt="linkedin logo" width={300} height={300} className='w-20 h-18  md:w-24 md:h-24 ' /> </span>
                    </Link>
                    <Link href="https://twitter.com/FagoroyeAyobami" target="_blank" rel="noopener noreferrer"  className='bg-blue-500 p-8 flex justify-around items-center'>Twitter
                        <span className=''><Image src="/twitter.png" alt="twitter logo" width={300} height={300} className='w-20 h-18 md:w-24 md:h-18  ' /> </span>
                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=2348160696670" target="_blank" rel="noopener noreferrer"  className='bg-green-600 p-8 gap-2 flex justify-around items-center'>Whatsapp
                        <span className=''><Image src="/whatsapp.webp" alt="whatsapp logo" width={300} height={300} className='w-14 h-16 md:w-20 md:h-20' /> </span>
                    </Link>
                </div>
                <div className='text-white flex items-center w-full bg-green-500 justify-center font-exoSpace text-lg md:text-[36px] uppercase font-black '>
                    <Link href="mailto:faggymatt007@gmail.com" target="_blank" rel="noopener noreferrer" className=' p-8 flex justify-around gap-12 items-center'>Feel welcome to email me 
                        <span className=''><Image src="/mail.webp" alt="whatsapp logo" width={300} height={300} className='w-16 h-16' /> </span>

                    </Link>
                </div>
            </div>
        </main>
    )
}
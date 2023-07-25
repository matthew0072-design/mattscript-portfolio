import Image from 'next/image'
import Link from 'next/link'

export default function ShowRoom(){

    return (
        <main>
            <div>
                <p>showroom</p>
            </div>
            <div>
                <div>
                    {/* <Image src={} alt="project" width={300} height={300} /> */}
                    
                </div>
                <div>
                    <p>Transport Booking system</p>

                </div>
                <div>
                    <Link href="/" >all project details</Link>
                </div>
            </div>
            
        </main>
    )
}
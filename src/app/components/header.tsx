

export default function Header() {

    return (
        <header className="w-full h-[75.5px] bg-green-500 flex justify-between px-8 items-center  ">
            <div>
                <p className="text-white">mattscript</p>
            </div>
            <div className="w-8 h-6  md:w-12 md:h-8 lg:w-16 lg:h-12 flex flex-col gap-1.5 items-end">
                <div className=" w-8 md:w-12  lg:w-16 h-2 bg-white rounded-full   "></div>
                <div className="w-5 md:w-8  lg:w-12 h-2 bg-white rounded-full "></div>
                <div className="w-8 md:w-12 lg:w-8 h-2 bg-white  rounded-full"></div>
            </div>
        </header>
    )
}
import Image from 'next/image'; 

export default function Root() {

    return(
        <div className=" flex flex-col items-center justify-center gap-2 min-h-screen">
            <h1 className=" flex m-0 items-center justify-center text-center text-3xl font-mono text-gray-300/30">
                Login/register form
            </h1>
            <Image 
                src="/black.png"
                width={100}
                height={76}
                className="hidden md:block"
                alt="next logo"
            />
        </div>
)
}
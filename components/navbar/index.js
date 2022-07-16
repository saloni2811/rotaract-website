import Link from 'next/link';
import Script  from 'next/script';
import Image from 'next/image';

export default function Navbar(props)
{   

        if(typeof window !== 'undefined'){
            window.onscroll = function(e) {
                if(this.oldScroll > this.scrollY){
                    var element = document.getElementById("navbar");
                    element.classList.remove("hide");
                }
                else{
                    var element = document.getElementById("navbar");
                    element.classList.add("hide");
                }
                this.oldScroll = this.scrollY;
              }
        }    
    
    

    return(
        <>
            <div id="navbar" className="fixed text-base w-full py-7 px-5 duration-300 z-40 text-center">
                <div className="text-neutral-200 rounded-3xl h-10 shadowxl flex place-content-center justify-evenly place-items-center gap-x-10 bg-gradient-to-r from-transparent via-pink-600 to-transparent">
                    <div className='basis-1/4 hidden sm:block'><Link href="#"><a className='hover:font-bold duration-300 hover:tracking-wide'>Home</a></Link></div>
                    <div className='basis-1/4 hidden sm:block'><Link href="#"><a className='hover:font-bold duration-300 hover:tracking-wide'>Team</a></Link></div>
                    <div className='basis-1/4 hidden sm:block'><Link href="#"><a className='hover:font-bold duration-300 hover:tracking-wide'>About</a></Link></div>
                    <div className='basis-1/4 hidden sm:block'><Link href="#"><a className='hover:font-bold duration-300 hover:tracking-wide'>Contact</a></Link></div>
                    
                    <div className="absolute overflow-clip bg-neutral-200  rounded-full w-16 h-16 shadow-2xl hover:rotate-[360deg] duration-500"><Image src="/rotaractLogo.svg" className='shadow-2xl' layout='fill' alt="Example Image"></Image></div>                
                </div>
            </div>
        </>
    )
}
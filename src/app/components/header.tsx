import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Navigation() {
    return ( 
        <section>
           <div className="w-[1920] h-[full]">
             
             
                {/* header */}
                <div className="lg:flex gap-10 mx-10 lg:mx-40 bg-gray-100 rounded-b-3xl items-center lg:px-10 py-10">
                  
                    <div className="text-center lg:text-left px-5 lg:px-0">
                    <p className="text-gray-600 rounded-md pt-10 text-xs font-light px-5 md:px-0">
                            WELCOME TO CHAIRY
                    </p>
                    <p className="font-semibold text-2xl md:text-4xl lg:text-5xl pt-5 px-5 md:px-0">
                        Best Furniture Collection For Your Interior.
                    </p>
                    <Button className="flex-auto justify-center bg-teal-500 hover:bg-white hover:text-teal-600 mt-8 mx-5 md:mx-0">
                        <Link href="/shop">
                        Shop Now </Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                        </Button>
                        </div>


                    <div className="justify-self-center">
                        <Image src="/img-1.png" alt="chair" width={434} height={584} className="py-10 px-20 md:px-0"/>
                     </div>

            </div>

            </div>
        </section>
    )
}
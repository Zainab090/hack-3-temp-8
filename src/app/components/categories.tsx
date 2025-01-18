import Image from "next/image";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"


export default function Categories() {
    return ( 
        <section>
            <div className="w[1920] h[full]">

                    <div className="w[1321px] h[44] items-center pt-10 mx:10 sm:mx-20 md:mx-32 lg:mx-40">
                    <h2 className="text-xl font-semibold pl-10">Top Categories</h2>
                    </div>
                

            <div className="w[1321px] h[139] pt-5 pb-5 md:pb-10 px-32 md:px-48">
             
                <div className="md:flex gap-5">
                
                <HoverCard>
                <HoverCardTrigger>
                        <Image src="/img-6.png" alt="img" width={300} height={300}/>
               </HoverCardTrigger>
                <HoverCardContent className="text-xs md:text-sm font-semibold bg-black bg-opacity-50 text-white">
                   Wing Chair<br/><span className="font-light text-xs">3,584 Products</span>
                </HoverCardContent>
                </HoverCard>
                
                <HoverCard>
                <HoverCardTrigger>
                        <Image src="/img-7.png" alt="img" width={300} height={300} className="pt-5 md:pt-0"/>
               </HoverCardTrigger>
                <HoverCardContent className="text-xs md:text-sm font-semibold bg-black bg-opacity-50 text-white">
                   Wooden Chair<br/><span className="font-light text-xs">157 Products</span>
                </HoverCardContent>
                </HoverCard>

                <HoverCard>
                <HoverCardTrigger>
                        <Image src="/img-8.png" alt="img" width={300} height={300}  className="pt-5 md:pt-0"/>
               </HoverCardTrigger>
                <HoverCardContent className="text-xs md:text-sm font-semibold bg-black bg-opacity-50 text-white">
                   Desk Chair<br/><span className="font-light text-xs">154 Products</span>
                </HoverCardContent>

                
                </HoverCard>
                
                </div>
                    
             
      </div>

            </div>
        </section>
    )
}
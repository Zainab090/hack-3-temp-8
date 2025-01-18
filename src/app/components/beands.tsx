import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";

export default function Navigation() {
    return ( 
        <section>
            <div className="w[1920] h[full]">

                <div className="hidden lg:block">
                    <div className="flex w[1321px] h[139] items-center justify-around pt-10 px-40">
                    <Image src="/brand-1.png" alt="logo" width={50} height={50} />
                    <Image src="/brand-2.png" alt="logo" width={50} height={50} />
                    <Image src="/brand-3.png" alt="logo" width={50} height={50} />
                    <Image src="/brand-4.png" alt="logo" width={50} height={50} />
                    <Image src="/brand-5.png" alt="logo" width={50} height={50} />
                    <Image src="/brand-6.png" alt="logo" width={50} height={50} />
                    <Image src="/brand-7.png" alt="logo" width={50} height={50} />
                </div>
                </div>

            <div className="block lg:hidden w[1321px] h[139] pt-10 pb-10 px-10 lg:px-60 mx-10">
      
      <Carousel
          opts={{
            align: "center",
          }}
          className="w-full max-w-full"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
                <div>
                  <Card>
                    <CardContent className="flex p-5">
                      
                      <Image className=""
                        src={`/brand-${index + 1}.png`} 
                        alt={`brand ${index + 1}`} 
                        width={100} 
                        height={50} 
                        
                      />  
                    </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>

            </div>
        </section>
    )
}
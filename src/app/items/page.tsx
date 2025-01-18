
"use client";


import Navigation from "../components/navigation";
import Products from "../components/product";
import Footer from "../components/footer";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import Categories from "../components/categories";

export default function Items() {
  return (
    <div>
      <Navigation/>

      <section>
            <div className="w[1920] h[full]">

                    <div className="w[1321px] h[44] items-center pt-10 mx-10 sm:mx-20 md:mx-32 lg:mx-40">
                    <h2 className="text-xl font-semibold pl-10">All Products</h2>
                    </div>
                
        <Products/>
        <Categories/>
         <Products/> 
          
          </div>
        </section>
 
          {/* Subscribe */}
              <section>
                <div className="w[1920] h[full] bg-gray-100 pt-10 mt-10">
                        <div className="w[1924] h[754] text-center items-center pt-10 pb-10 mx-10 sm:mx-20 md:mx-32 lg:mx-40">
                        <h2 className="text-xl md:text-2xl font-semibold">
                          Or Subscribe To The Newsletter
                        </h2>

                        <div className="md:flex gap-3">
                                <Input type="email" placeholder="Email Address..." className="mt-3 text-xs"/>
                                <Button className="bg-transparent border-2 border-gray-200 text-black hover:bg-teal-500 hover:text-white text-xs md:text-base mt-3">Submit</Button>
                          </div>

                        <h2 className="text-xl md:text-2xl font-semibold pt-10">
                          Follow Products And Discounts On Instagram
                        </h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-5 pt-10">
                        <Image src="/img-7.png" alt="img" width={200} height={200}/>
                        <Image src="/img-6.png" alt="img" width={200} height={200}/>
                        <Image src="/img-3.png" alt="img" width={200} height={200}/>
                        <Image src="/img-2.png" alt="img" width={200} height={200}/>
                        <Image src="/img-4.png" alt="img" width={200} height={200}/>
                        <Image src="/img-8.png" alt="img" width={200} height={200}/>
                         </div>
  
                        </div>
                </div>
              </section>
      
      <Footer/>
    </div>
  );
}
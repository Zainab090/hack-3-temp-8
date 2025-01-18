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


  const products = [
    { 
      id: 1, 
      name: "Dinning Chair", 
      description: "Click to Read More...", 
      price: 100,
      image: "/img-10.png"
    },
    { 
      id: 2, 
      name: "Study Chair", 
      description: "Click to Read More...", 
      price: 150,
      image: "/img-2.png"
    },
    { 
      id: 3, 
      name: "Confirt Sofa Chair", 
      description: "Click to Read More...", 
      price: 200,
      image: "/img-3.png"
    },
    { 
      id: 4, 
      name: "Comfirt Chair", 
      description: "Click to Read More...", 
      price: 250,
      image: "/img-4.png"
    }
  ];



export default function Navigation() {
    return ( 
        <section>
            <div className="w-[1920] h[full]">

                    <div className="w[1321px] h[44] items-center pt-10 mx-10 sm:mx-20 md:mx-32 lg:mx-40">
                    <h2 className="text-xl font-semibold pl-10">Featured Products</h2>
                    </div>
                
                <div className="hidden md:block">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mx-28 lg:mx-48 pt-5">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-fit h-fit mb-2 rounded"
                />
                <div className="flex justify-between">
                  <div>
                <h2 className="text-sm font-semibold">{product.name}</h2>
                <p className="text-xs text-gray-700">{product.description}</p>
                <p className="flex gap-5 text-sm text-green-500 font-bold mt-2">${product.price}</p>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart hover:bg-teal-600 bg-gray-100 rounded-sm p-1 hover:stroke-white"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                </div>
                </div> 
              </div>
            </Link>
          ))}
        </div>
        </div>
          
           <div className="block md:hidden px-20 pt-5">
            <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/1">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex p-1 bg-transparent border-none">
                    {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-60 h-fit mb-2 rounded"
                />
                <div className="flex justify-between">
                  <div>
                <h2 className="text-sm font-semibold">{product.name}</h2>
                <p className="text-xs text-gray-700">{product.description}</p>
                <p className="flex gap-5 text-sm text-green-500 font-bold mt-2">${product.price}</p>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart hover:bg-teal-600 bg-gray-100 rounded-sm p-1 hover:stroke-white"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                </div>
                </div> 
              </div>
            </Link>
          ))}
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
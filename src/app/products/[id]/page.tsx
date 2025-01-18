"use client";

import { useParams } from "next/navigation";
import Nav from "@/app/components/navigation";
import Footer from "@/app/components/footer";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Dinning Chair",
    description: "A chair is a piece of furniture designed for sitting, typically consisting of a seat, a backrest, and four legs. Chairs can be made from a variety of materials such as wood, metal, or plastic, and often include additional features like cushions or armrests for added comfort. They come in various styles and designs, making them versatile for different settings, from dining rooms and offices to outdoor patios and living spaces.",
    price: 100,
    image: "/img-10.png",
  },
  { id: 2, 
    name: "Study Chair", 
    description: "A chair is a piece of furniture designed for sitting, typically consisting of a seat, a backrest, and four legs. Chairs can be made from a variety of materials such as wood, metal, or plastic, and often include additional features like cushions or armrests for added comfort. They come in various styles and designs, making them versatile for different settings, from dining rooms and offices to outdoor patios and living spaces.", 
    price: 150,
    image: "/img-2.png",
   },
  { id: 3, 
    name: "Confirt Sofa Chair", 
    description: "A chair is a piece of furniture designed for sitting, typically consisting of a seat, a backrest, and four legs. Chairs can be made from a variety of materials such as wood, metal, or plastic, and often include additional features like cushions or armrests for added comfort. They come in various styles and designs, making them versatile for different settings, from dining rooms and offices to outdoor patios and living spaces.", 
    price: 150,
    image: "/img-3.png",
   },
    { id: 4, 
      name: "Comfirt Chair", 
      description: 
      "A chair is a piece of furniture designed for sitting, typically consisting of a seat, a backrest, and four legs. Chairs can be made from a variety of materials such as wood, metal, or plastic, and often include additional features like cushions or armrests for added comfort. They come in various styles and designs, making them versatile for different settings, from dining rooms and offices to outdoor patios and living spaces.", 
      price: 150,
      image: "/img-4.png",
     },
      { id: 5, 
        name: "Prince Sofa", 
        description: 
        "A chair is a piece of furniture designed for sitting, typically consisting of a seat, a backrest, and four legs. Chairs can be made from a variety of materials such as wood, metal, or plastic, and often include additional features like cushions or armrests for added comfort. They come in various styles and designs, making them versatile for different settings, from dining rooms and offices to outdoor patios and living spaces.", 
        price: 150,
        image: "/img-5.png",
       },
        { id: 6, 
          name: "Computer Chair", 
          description: 
          "A chair is a piece of furniture designed for sitting, typically consisting of a seat, a backrest, and four legs. Chairs can be made from a variety of materials such as wood, metal, or plastic, and often include additional features like cushions or armrests for added comfort. They come in various styles and designs, making them versatile for different settings, from dining rooms and offices to outdoor patios and living spaces.", 
          price: 150,
          image: "/img-6.png",
         },
          { id: 7, 
            name: "Wooden Table", 
            description: 
            "A chair is a piece of furniture designed for sitting, typically consisting of a seat, a backrest, and four legs. Chairs can be made from a variety of materials such as wood, metal, or plastic, and often include additional features like cushions or armrests for added comfort. They come in various styles and designs, making them versatile for different settings, from dining rooms and offices to outdoor patios and living spaces.", 
            price: 150,
            image: "/img-7.png",
           },
            { id: 8, 
              name: "Office Chair", 
              description: 
              "A chair is a piece of furniture designed for sitting, typically consisting of a seat, a backrest, and four legs. Chairs can be made from a variety of materials such as wood, metal, or plastic, and often include additional features like cushions or armrests for added comfort. They come in various styles and designs, making them versatile for different settings, from dining rooms and offices to outdoor patios and living spaces.", 
              price: 150,
              image: "/img-8.png",
             },
  ];

export default function Products() {
  const params = useParams(); 
  const id = params.id as string; 

  const productId = id ? parseInt(id, 10) : null; 
  const product = products.find((item) => item.id === productId); 

  if (!product) {
    return <p className="text-center mt-10">Product not found.</p>;
  }

  return (
    <div>
      <Nav/>
      <div className="pt-10 pb-10 mx-10 md:mx-40">
      <div className="md:flex gap-5 product-detail">
      {product.image && (
          <Image
            src={product.image}
            alt={product.name || "Product Image"}
            width={300}
            height={300}
          />
        )}
        <div className="container md:w-[600px] text-justify  md:px-10">
        <h1 className="text-2xl font-bold pt-5">{product.name}</h1>
        <p className="text-gray-700 pt-5 text-sm">{product.description}</p>
        <p className="text-green-500 font-bold pt-5 ">${product.price}</p>
        <Link href="/cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart mt-5 hover:bg-teal-600 bg-gray-100 rounded-sm p-1 hover:stroke-white"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        </Link>
        </div>
      </div>
      </div>
      <hr/>
      <Footer/>
    </div>

  );
}

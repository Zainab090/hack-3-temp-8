import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Product from "../components/product";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Shop(){
    return(
      <div>
        <Navigation/>
            <div className="px-10 md:px-40">
                <h2 className="text-xl pt-10 font-semibold">Check Out</h2>
                
                
                <div className="md:grid grid-cols-2 gap-20">
            <form className="pt-5 space-y-4">
              <p className="text-xs">First Name *</p>
              <Input placeholder="Abc" className="text-xs bg-gray-100" />
              <p className="text-xs">Last Name *</p>
              <Input placeholder="Abc" className="bg-gray-100 text-xs" />
              <p className="text-xs">Email Address *</p>
              <Input type="email" placeholder="Abc@def.com" className="bg-gray-100 text-xs" />
              <p className="text-xs">Contact *</p>
              <Input placeholder="+92-3..." className="bg-gray-100 text-xs" />
              <p className="text-xs">Address *</p>
              <Input placeholder="Apartment..." className="bg-gray-100 text-xs" />
              <p className="text-xs">Meesage</p>
              <Textarea placeholder="Hi! i`d like to inform about" className="bg-gray-100 py-10 text-xs" />
              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3">
                Submit
              </Button>
            </form>
          

          <div className="hidden md:block">
                <Image src="/img-3.png" alt="img-1" width={400} height={300}/>
          </div>
          </div>
            </div>
       


        <Product/>
      <Footer/>
    </div>
  )
}
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Faqs() {
  return (
    <main className="min-h-screen">
      <Navigation />

     
      <section className="py-10 px-10 lg:px-48">
        <div className="text-center">
          <h1 className="text-xl md:text-3xl font-bold">Questions Looks Here</h1>
          <p className="text-gray-500 text-xs md:text-sm mt-3 px-10">
            For more information about our products & services, please feel free to drop us an email. 
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        
          <div className="space-y-8">
            
            <div className="items-start gap-4 bg-gray-100 px-5 py-5">
            <p className="text-base font-semibold">What types of chairs do you offer? 
                <span className="pl-20 text-xl">+</span></p>
            <p className="text-xs text-gray-500 pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, quae! Dolore at officiis, est nulla eaque, consectetur eveniet eligendi expedita tenetur fuga beatae, dolor deleniti et dolorem sed fugit maxime?</p>
            </div>

            <div className="items-start gap-4 bg-gray-100 px-5 py-5">
            <p className="text-base font-semibold">What types of chairs do you offer? 
                <span className="pl-20 text-xl">+</span></p>
            <p className="text-xs text-gray-500 pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, quae! Dolore at officiis, est nulla eaque, consectetur eveniet eligendi expedita tenetur fuga beatae, dolor deleniti et dolorem sed fugit maxime?</p>
            </div>

            <div className="items-start gap-4 bg-gray-100 px-5 py-5">
            <p className="text-base font-semibold">What types of chairs do you offer? 
                <span className="pl-20 text-xl">+</span></p>
            <p className="text-xs text-gray-500 pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, quae! Dolore at officiis, est nulla eaque, consectetur eveniet eligendi expedita tenetur fuga beatae, dolor deleniti et dolorem sed fugit maxime?</p>
            </div>

          </div>
          <div className="space-y-8">
            
            <div className="items-start gap-4 bg-gray-100 px-5 py-5">
            <p className="text-base font-semibold">What types of chairs do you offer? 
                <span className="pl-20 text-xl">+</span></p>
            <p className="text-xs text-gray-500 pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, quae! Dolore at officiis, est nulla eaque, consectetur eveniet eligendi expedita tenetur fuga beatae, dolor deleniti et dolorem sed fugit maxime?</p>
            </div>

            <div className="items-start gap-4 bg-gray-100 px-5 py-5">
            <p className="text-base font-semibold">What types of chairs do you offer? 
                <span className="pl-20 text-xl">+</span></p>
            <p className="text-xs text-gray-500 pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, quae! Dolore at officiis, est nulla eaque, consectetur eveniet eligendi expedita tenetur fuga beatae, dolor deleniti et dolorem sed fugit maxime?</p>
            </div>

            <div className="items-start gap-4 bg-gray-100 px-5 py-5">
            <p className="text-base font-semibold">What types of chairs do you offer? 
                <span className="pl-20 text-xl">+</span></p>
            <p className="text-xs text-gray-500 pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, quae! Dolore at officiis, est nulla eaque, consectetur eveniet eligendi expedita tenetur fuga beatae, dolor deleniti et dolorem sed fugit maxime?</p>
            </div>

          </div>
          </div>
     </section> 

     <hr/>
          
      <Footer />
    </main>
  );
}

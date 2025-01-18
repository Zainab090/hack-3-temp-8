import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navigation />

        <section className="px-10 lg:px-48 pt-10">

            <div className="lg:grid grid-cols-2 gap-5">
            <div className="bg-teal-600 text-white p-5">
                <h2 className="pt-10 font-semibold text-lg">About US - Comforty</h2>
                <p className="pt-5 text-xs pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae in repellendus velit deleniti quis accusamus, voluptatibus fugit laudantium enim molestias aliquam magnam! Ea necessitatibus saepe sequi harum inventore? Minus, consequuntur?</p>
                <Button className="bg-teal-500 md:mt-20">View Collection</Button>
            
            </div>

            <div className="pt-5 px-10 md:px-0">
                <Image src="/img-2.png" alt="chair" width={500} height={300}/>
            </div>
            </div>
        </section>

        <section className="mx-10 md:mx-48">
            <div className="text-center pt-20">
                <h2 className="text-xl font-bold">What Makes Our Brand Different</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-10">
                    <div className="bg-gray-100 p-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-truck hover:stroke-teal-500"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
                        <p className="pt-3 text-xs text-left text-gray-500 hover:text-teal-500">Next Day as standard<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta illo cumque tempora.</p>
                    </div>

                    <div className="bg-gray-100 p-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-truck hover:stroke-teal-500"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
                        <p className="pt-3 text-xs text-left text-gray-500 hover:text-teal-500">Next Day as standard<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta illo cumque tempora.</p>
                    </div>

                    <div className="bg-gray-100 p-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-truck hover:stroke-teal-500"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
                        <p className="pt-3 text-xs text-left text-gray-500 hover:text-teal-500">Next Day as standard<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta illo cumque tempora.</p>
                    </div>

                    <div className="bg-gray-100 p-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-truck hover:stroke-teal-500"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
                        <p className="pt-3 text-xs text-left text-gray-500 hover:text-teal-500">Next Day as standard<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta illo cumque tempora.</p>
                    </div>
                </div>
            
            
            </div>
        </section>


            <section>
                <div className="mx-10 md:mx-48 pb-10">
                    <div>
                        <h2 className="text-xl font-bold pt-20">Our Popular Products</h2>

                        <div className="md:flex gap-5 pt-5">
                            <div>
                            <Image src="/img-13.png" alt="img" width={500} height={200}/>
                            <p className="pt-5 text-gray-500 text-xs">The Popular sueda sofa
                                <br/><span className="pt-5">$99.00</span>
                            </p>
                            </div>
                            <div className="flex gap-5">
                                <div>
                            <Image src="/img-14.png" alt="img" width={240} height={200}/>
                            <p className="pt-5 text-gray-500 text-xs">The Popular sueda sofa
                                <br/><span className="pt-5">$99.00</span>
                            </p>
                            </div>
                            <div>
                            <Image src="/img-15.png" alt="img" width={240} height={200}/>
                            <p className="pt-5 text-gray-500 text-xs">The Popular sueda sofa
                                <br/><span className="pt-5">$99.00</span>
                            </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr/>
      <Footer />
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

export default function Navigation() {
    return ( 
        <section>
            <div className="w[1920] h[full]">

                    <div className="w[1321px] h[44] items-center pt-14 pb-10 mx-10 sm:mx-20 md:mx-40">
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div>
                            <Image src="/logo.png" alt="logo" width={100} height={50}/>
                            <p className="text-xs text-gray-400 pt-5">
                                Adipisicing elit. Earum, quia dicta facere nostrum excepturi quas, perspiciatis laborum aut sint.</p>
                                <div className="flex gap-3 pt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook hover:stroke-teal-600 bg-transparent hover:border-2 hover:border-teal-600 rounded-full"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter hover:stroke-teal-600 bg-transparent hover:border-2 hover:border-teal-600 rounded-full"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram hover:stroke-teal-600 bg-transparent hover:border-2 hover:border-teal-600 rounded-full"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin hover:stroke-teal-600 bg-transparent hover:border-2 hover:border-teal-600 rounded-full"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube hover:stroke-teal-600 bg-transparent hover:border-2 hover:border-teal-600 rounded-full"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                                </div>
                                </div>

                                <div className="grid grid-cols-2 pt-10 lg:pt-0">
                                    <ul>
                                        <h2 className="text-xs text-gray-500 pb-2">CATEGORY</h2>
                                        <li className="text-xs text-gray-800 pt-3 hover:text-teal-500">
                                        <Link href="/product">Sofa</Link></li>
                                        <li className="text-xs text-gray-800 pt-3 hover:text-teal-500">
                                        <Link href="/product">Armchair</Link></li>
                                        <li className="text-xs text-gray-800 pt-3 hover:text-teal-500">
                                        <Link href="/product">Wing Chair</Link></li>
                                        <li className="text-xs text-gray-800 pt-3 hover:text-teal-500">
                                        <Link href="/product">Desk Chair</Link></li>
                                        <li className="text-xs text-gray-800 pt-3 hover:text-teal-500">
                                        <Link href="/product">Wooden Chair</Link></li>
                                        <li className="text-xs text-gray-800 pt-3 hover:text-teal-500">
                                        <Link href="/product">Park Bench</Link></li>
                                    </ul>
                               
                                    <ul>
                                        <h2 className="text-xs text-gray-500 pb-2">SUPPORT</h2>
                                        <li className="text-xs text-gray-800 pt-3 hover:text-teal-500">
                                        <Link href="/contact">Help & Support</Link></li>
                                        <li className="text-xs text-gray-800 pt-3 hover:text-teal-500">
                                        <Link href="/contact">Terms & Conditions</Link></li>
                                        <li className="text-xs text-gray-800 pt-3 hover:text-teal-500">
                                        <Link href="/contact">Privacy Policy</Link></li>
                                        <li className="text-xs text-gray-800 pt-3 hover:text-teal-500">
                                        <Link href="/contact">Help</Link></li>
                                        
                                    </ul>
                                </div>

                                <div>
                                <h2 className="text-xs text-gray-500 pb-2">NEWSLETTER</h2>
                                <div className="flex gap-3">
                                <Input type="email" placeholder="Email" className="mt-3 text-xs"/>
                                <Button className="bg-teal-500 mt-3">Subscribe</Button>
                                </div>
                                <p className="text-xs pt-3 text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                </div>
                        </div>
                    
                  
                    </div>
                    <hr/>

                    <div className="pt-5 pb-5 px-10 sm:px-20 md:px-32 lg:px-40">
                        <p className="text-gray-500 text-xs">@2021-Blogy-Designed & Develop by Zakirsoft</p>
                        
                    </div>
            </div>
        </section>
    )
}
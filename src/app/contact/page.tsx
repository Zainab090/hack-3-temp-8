import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Contact Section */}
      <section className="py-10 px-5 lg:px-48">
        <div className="text-center">
          <h1 className="text-xl md:text-3xl font-bold">Get In Touch With Us</h1>
          <p className="text-gray-500 text-xs md:text-sm mt-3 px-10">
            For more information about our products & services, please feel free to drop us an email. 
            Our staff is always here to help you out. Do not hesitate!
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="px-10 md:px-0 space-y-8">
            
            <div className="flex items-start gap-4">
              <div className="bg-gray-200 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold">Address</h3>
                <p className="text-xs md:text-sm">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-200 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold">Phone</h3>
                <p className="text-xs md:text-sm">Mobile: +1 845-546-6789</p>
                <p className="text-xs md:text-sm">Hotline: +1 845-456-6789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-200 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold">Working Time</h3>
                <p className="text-xs md:text-sm">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-xs md:text-sm">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="px-10 md:px-0">
            <form className="space-y-4">
              <p className="text-xs">Your Name</p>
              <Input placeholder="Abc" className="bg-gray-100" />
              <p className="text-xs">Email Address</p>
              <Input type="email" placeholder="Abc@def.com" className="bg-gray-100" />
              <p className="text-xs">Subject</p>
              <Input placeholder="This is an optional" className="bg-gray-100" />
              <p className="text-xs">Meesage</p>
              <Textarea placeholder="Hi! i`d like to ask about" className="bg-gray-100 py-10" />
              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-10 md:mx-20 lg:mx-48 pb-10">
  <div className="container grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-100 py-10 text-center">
    {/* High Quality */}
    <div className="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="40"height="40"viewBox="0 0 24 24"fill="none"stroke="currentColor"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round"className="mb-3 text-teal-500"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
      <h4 className="font-bold text-base md:text-lg">High Quality</h4>
      <p className="text-gray-500 text-xs md:text-sm">Crafted from top materials</p>
    </div>

    {/* Warranty Protection */}
    <div className="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-teal-500"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4" /></svg>
      <h4 className="font-bold text-base md:text-lg">Warranty Protection</h4>
      <p className="text-gray-500 text-xs md:text-sm">Over 2 years</p>
    </div>

    {/* 24/7 Support */}
    <div className="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-teal-500"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10"/></svg>
      <h4 className="font-bold text-base md:text-lg">24/7 Support</h4>
      <p className="text-gray-500 text-xs md:text-sm">Dedicated support</p>
    </div>
  </div>
</section>

<hr/>

      <Footer />
    </main>
  );
}

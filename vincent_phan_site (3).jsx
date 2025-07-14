import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, Home } from "lucide-react";
import Image from "next/image";

export default function VincentPhanHome() {
  return (
    <div className="max-w-screen-xl mx-auto p-0 md:p-4">
      <header className="relative h-[70vh] w-full">
        <Image
          src="/hero-image.jpg"
          alt="Calgary Skyline"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-5xl font-bold">Find Your Calgary Home</h1>
          <p className="text-lg mt-4">With Vincent Phan – Your 2% Realty Specialist</p>
          <Button className="mt-6">Browse Listings</Button>
        </div>
      </header>

      <section className="bg-white py-12 px-4 md:px-0">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold mb-2">Meet Vincent</h2>
          <p className="text-gray-600">
            With over 100 homes sold annually and a reputation for honest, full-service real estate, I’m here to help you buy or sell with confidence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Why 2% Realty?</h3>
              <p>
                Full MLS® exposure, professional marketing, and personalized service at a fair commission. You keep more of your equity—without sacrificing results.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Professional Service</h3>
              <p>
                I take pride in clear communication, expert advice, and guiding clients every step of the way—from evaluation to possession.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Let’s Chat</h3>
              <p>
                Whether you’re buying, selling, or just curious about the market, I’m always happy to help. Let’s connect!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-4 md:px-0">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold mb-2">Featured Listings</h2>
          <p className="text-gray-600">Explore some of my most recent and popular listings in Calgary.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">123 Auburn Bay Blvd SE</h3>
              <p>2 Bed • 2 Bath • $389,900</p>
              <Button variant="outline" className="mt-2">View Listing</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">36, 49 Rocky Ridge Gate NW</h3>
              <p>3 Bed • 2.5 Bath • $449,900</p>
              <Button variant="outline" className="mt-2">View Listing</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">231 Sandstone Road NW</h3>
              <p>Detached • 5 Bed • $639,000</p>
              <Button variant="outline" className="mt-2">View Listing</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white py-12 px-4 md:px-0">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold mb-2">What Clients Are Saying</h2>
          <p className="text-gray-600">Real feedback from happy home buyers and sellers.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-4">
              <p className="italic">"Vincent is incredibly professional, patient, and responsive. He made the whole buying process smooth and stress-free. Highly recommend!"</p>
              <p className="mt-2 font-semibold">— Sarah L.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="italic">"Sold our home quickly and for a great price. Vincent was knowledgeable and always available for questions. Amazing experience!"</p>
              <p className="mt-2 font-semibold">— Jason M.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-4 md:px-0">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-bold mb-2">Contact Vincent</h2>
          <p className="text-gray-600">Ready to get started or have questions? Send me a message below.</p>
        </div>
        <form className="max-w-xl mx-auto space-y-4">
          <Input placeholder="Name" required />
          <Input type="email" placeholder="Email" required />
          <Input placeholder="Phone Number" />
          <Input placeholder="Your Message" className="h-24" />
          <Button type="submit">Send Message</Button>
        </form>
      </section>

      <footer className="text-center text-sm text-gray-500 border-t pt-4 pb-6">
        <div className="flex justify-center gap-6 mb-2">
          <span className="flex items-center gap-1"><Mail size={16} /> vincent@vphan.ca</span>
          <span className="flex items-center gap-1"><Phone size={16} /> 403-123-4567</span>
          <span className="flex items-center gap-1"><Home size={16} /> Calgary, AB</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Vincent Phan Real Estate. All rights reserved.</p>
      </footer>
    </div>
  );
}

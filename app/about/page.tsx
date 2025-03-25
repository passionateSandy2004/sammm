import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-bg.jpg"
            alt="Financial services hero"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.4)] via-[rgba(10,10,10,0.6)] to-[#0a0a0a]" />
        </div>
        <div className="container mx-auto px-6 z-20 relative">
          <div className="max-w-3xl mt-16">
            <p className="uppercase text-sm tracking-wider font-medium mb-2 text-blue-400">YOUR FINANCIAL PARTNERS</p>
            <h1 className="text-5xl font-bold mb-4 leading-tight">Empowering You to Achieve Financial Success</h1>
          </div>
        </div>
      </section>
      
      {/* Who We Are Section */}
      <section className="py-20 bg-[#0e1623]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <p className="uppercase text-sm tracking-wider font-medium mb-4 text-blue-400">WHO WE ARE</p>
              <h2 className="text-4xl font-bold mb-6 leading-tight">Discover Our Commitment to Financial Excellence</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At Sammm, we pride ourselves on having helped countless clients secure 
                their financial futures. Our bespoke investment strategies have consistently 
                yielded impressive results, enabling individuals and businesses to achieve 
                their financial goals with confidence and clarity.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/advisor-working.jpg" 
                alt="Financial advisor working" 
                width={600} 
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="bg-[#0e1623] p-12 rounded-lg grid grid-cols-1 md:grid-cols-4 gap-8 text-center shadow-xl">
            <div className="md:border-r md:border-gray-700 md:pr-4 pb-6 md:pb-0">
              <h3 className="text-5xl font-bold text-white mb-2">5<span className="text-blue-400">+</span></h3>
              <p className="text-gray-300 text-sm">Certified Advisors</p>
            </div>
            <div className="md:border-r md:border-gray-700 md:pr-4 pb-6 md:pb-0">
              <h3 className="text-5xl font-bold text-white mb-2">250<span className="text-blue-400">+</span></h3>
              <p className="text-gray-300 text-sm">Happy Customers</p>
            </div>
            <div className="md:border-r md:border-gray-700 md:pr-4 pb-6 md:pb-0">
              <h3 className="text-5xl font-bold text-white mb-2">08<span className="text-blue-400">+</span></h3>
              <p className="text-gray-300 text-sm">Award Winning</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-white mb-2">98<span className="text-blue-400">%</span></h3>
              <p className="text-gray-300 text-sm">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Journey Section */}
      <section className="py-20 bg-[#0e1623]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <p className="uppercase text-sm tracking-wider font-medium mb-4 text-blue-400">OUR JOURNEY</p>
              <h2 className="text-4xl font-bold mb-6 leading-tight">The Evolution of Sammm Financial Advisory</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded in 2004, Sammm arose from a vision to provide tailored financial 
                and investment advice in Tamilnadu. Our expert team consistently implements 
                strategic investment solutions that have continuously improved our clients' portfolios. 
                Over the years, we have established a trusted reputation for personalized attention and 
                dependable results.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/team-meeting.jpg" 
                alt="Team meeting" 
                width={600} 
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Values Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase text-sm tracking-wider font-medium mb-2 text-blue-400">OUR CORE PRINCIPLES</p>
            <h2 className="text-4xl font-bold leading-tight">Mission and Values That Drive Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                At Sammm, our mission is to empower individuals and businesses with proven financial solutions and 
                personalized investment strategies. We strive to enhance financial literacy and provide the tools 
                necessary for clients to achieve their long-term financial goals.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-300 leading-relaxed">
                Integrity, transparency, and commitment are at the heart of Sammm's values. We believe in building 
                lasting relationships with our clients based on trust, respect, and exceptional service, ensuring that 
                financial well-being is always our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[#0e1623]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/advisor-portrait.jpg" 
                alt="Financial advisor" 
                width={600} 
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="max-w-xl">
              <p className="uppercase text-sm tracking-wider font-medium mb-4 text-blue-400">CONNECT WITH US</p>
              <h2 className="text-4xl font-bold mb-6 leading-tight">Start Your Financial Journey Today</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Reach out now for a complimentary consultation and discover your path to 
                financial success.
              </p>
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 inline-block"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-6 bg-[#0a0a0a] border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">Copyright © 2025 Sammm</p>
        </div>
      </footer>
    </main>
  );
}

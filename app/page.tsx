"use client"

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import AnimatedText from "./components/AnimatedText";
import StaggeredText from "./components/StaggeredText";
import AnimatedItem from "./components/AnimatedItem";
import AnimatedCounter from "./components/AnimatedCounter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
        <Image
            src="/images/professional-architect-1-scaled.jpg"
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
          <StaggeredText delay={0.3} className="max-w-3xl">
            <AnimatedItem>
              <p className="uppercase text-sm tracking-wider font-medium mb-2 text-blue-400">FINANCIAL FREEDOM</p>
            </AnimatedItem>
            <AnimatedItem direction="up" distance={30} duration={0.7}>
              <h1 className="text-5xl font-bold mb-4 leading-tight">Customised Investment Strategies for You</h1>
            </AnimatedItem>
            <AnimatedItem direction="up" distance={25}>
              <p className="text-gray-300 mb-8 max-w-xl">
                Discover tailored financial solutions that empower individuals and businesses to achieve long-term financial success and stability.
              </p>
            </AnimatedItem>
            <AnimatedItem direction="up" distance={20} duration={0.6}>
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 inline-block"
              >
                Get Started
              </Link>
            </AnimatedItem>
          </StaggeredText>
        </div>
      </section>
      
      {/* Expert Advisors Section */}
      <section className="py-20 bg-[#0e1623]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedText
              className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1"
              delay={0.2}
              once={false}
              direction="left"
          >
            <Image
                src="/images/team-meeting.jpg" 
                alt="Financial advisors in a meeting" 
                width={600} 
                height={400}
                className="w-full h-auto"
              />
            </AnimatedText>
            <StaggeredText className="max-w-xl order-1 md:order-2" delay={0.4} once={false}>
              <AnimatedItem>
                <p className="uppercase text-sm tracking-wider font-medium mb-4 text-blue-400">OUR STORY</p>
              </AnimatedItem>
              <AnimatedItem>
                <h2 className="text-4xl font-bold mb-6 leading-tight">Expert Advisors</h2>
              </AnimatedItem>
              <AnimatedItem>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Sammm is a dedicated financial advisory firm committed to providing bespoke 
                  investment strategies and financial guidance since 2004.
                </p>
              </AnimatedItem>
              <AnimatedItem>
                <Link 
                  href="/about" 
                  className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-2 transition duration-300"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </AnimatedItem>
            </StaggeredText>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <StaggeredText className="text-center mb-16" delay={0.2} once={false}>
            <AnimatedItem>
              <p className="uppercase text-sm tracking-wider font-medium mb-2 text-blue-400">OUR EXPERTISE</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="text-4xl font-bold leading-tight">Comprehensive Financial Services Tailored for You</h2>
            </AnimatedItem>
          </StaggeredText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedText className="bg-[#0e1623] p-8 rounded-lg hover:bg-[#121f30] transition duration-300" delay={0.3} once={false} direction="up">
              <div className="mb-4 text-blue-500 font-bold text-xl">01.</div>
              <h3 className="text-2xl font-bold mb-4">Equity Investment Advisory</h3>
              <p className="text-gray-300 mb-6">
                In-depth market research, technical analysis, and fundamental insights for risk-aware investors. Regular investment reporting.
              </p>
              <Link 
                href="/services#service-01" 
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-2 transition duration-300"
              >
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </AnimatedText>
            
            <AnimatedText className="bg-[#0e1623] p-8 rounded-lg hover:bg-[#121f30] transition duration-300" delay={0.4} once={false} direction="up">
              <div className="mb-4 text-blue-500 font-bold text-xl">02.</div>
              <h3 className="text-2xl font-bold mb-4">Intraday & Swing Trading Advisory</h3>
              <p className="text-gray-300 mb-6">
                For active traders, we offer precise and timely calls for intraday and short-term swing trading.
              </p>
              <Link 
                href="/services#service-02" 
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-2 transition duration-300"
              >
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </AnimatedText>
            
            <AnimatedText className="bg-[#0e1623] p-8 rounded-lg hover:bg-[#121f30] transition duration-300" delay={0.5} once={false} direction="up">
              <div className="mb-4 text-blue-500 font-bold text-xl">03.</div>
              <h3 className="text-2xl font-bold mb-4">Portfolio Management Support</h3>
              <p className="text-gray-300 mb-6">
                We help investors build and manage a well-diversified portfolio aligned with their risk appetite and financial goals.
              </p>
              <Link 
                href="/services#service-03" 
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-2 transition duration-300"
              >
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </AnimatedText>
            
            <AnimatedText className="bg-[#0e1623] p-8 rounded-lg hover:bg-[#121f30] transition duration-300" delay={0.6} once={false} direction="up">
              <div className="mb-4 text-blue-500 font-bold text-xl">04.</div>
              <h3 className="text-2xl font-bold mb-4">Wealth Creation & Long-Term Investment Planning</h3>
              <p className="text-gray-300 mb-6">
                We design long-term investment strategies to help investors achieve financial security and wealth creation.
              </p>
              <Link 
                href="/services#service-04" 
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-2 transition duration-300"
              >
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </AnimatedText>
          </div>
        </div>
      </section>
      
      {/* CTA Middle Section */}
      <section className="py-20 bg-[#0e1623] relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/professional-architect-1-scaled.jpg"
            alt="Financial planning background"
            fill
            className="object-cover"
            sizes="100vw"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e1623] via-transparent to-[#0e1623]" />
        </div>
        <StaggeredText className="container mx-auto px-6 relative z-10 text-center" delay={0.2} once={false}>
          <AnimatedItem direction="up" distance={30}>
            <h2 className="text-4xl font-bold mb-6 leading-tight">Unlock Your Financial Potential with Us</h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Connect with our experts to create your customized investment plan.
            </p>
          </AnimatedItem>
          <AnimatedItem direction="up" distance={15} duration={0.6}>
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 inline-block"
            >
              Get Started
            </Link>
          </AnimatedItem>
        </StaggeredText>
      </section>
      
      {/* Value Propositions */}
      <section className="py-20 bg-[#0e1623] text-white">
        <div className="container mx-auto px-6">
          <StaggeredText className="text-left mb-8" delay={0.2} once={false}>
            <AnimatedItem>
              <p className="uppercase text-sm tracking-wider font-medium mb-2 text-blue-400">WHY CHOOSE US</p>
            </AnimatedItem>
            <AnimatedItem direction="up" distance={25}>
              <h2 className="text-4xl font-bold leading-tight">Unique Value Propositions of Sammm</h2>
            </AnimatedItem>
          </StaggeredText>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16">
            {/* First Box - Counter */}
            <AnimatedText 
              className="md:col-span-4 bg-[#121f30] p-10 rounded-lg flex flex-col justify-center items-start" 
              delay={0.3} 
              once={false} 
              direction="up"
            >
              <div className="flex items-baseline">
                <h3 className="text-7xl font-bold mb-2 text-white">
                  <AnimatedCounter from={0} to={5} duration={1.5} delay={0.3} />
                </h3>
                <span className="text-blue-400 font-bold text-4xl ml-1">+</span>
              </div>
              <p className="text-gray-300 text-lg">Certified Advisors</p>
            </AnimatedText>
            
            {/* Second Box - Description */}
            <div className="md:col-span-8">
              <StaggeredText delay={0.4} once={false} staggerChildren={0.15}>
                <AnimatedItem>
                  <h3 className="text-xl text-blue-400 mb-4">01</h3>
                </AnimatedItem>
                <AnimatedItem>
                  <h3 className="text-3xl font-bold mb-4">Personalized Approach</h3>
                </AnimatedItem>
                <AnimatedItem>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    We focus on understanding your unique financial needs to create tailored investment strategies that
                    align with your goals.
                  </p>
                </AnimatedItem>
              </StaggeredText>
            </div>

            {/* Divider */}
            <div className="md:col-span-12 border-b border-gray-800 my-10"></div>
            
            {/* Third Box - Counter */}
            <AnimatedText 
              className="md:col-span-4 bg-[#121f30] p-10 rounded-lg flex flex-col justify-center items-start" 
              delay={0.5} 
              once={false} 
              direction="up"
            >
              <div className="flex items-baseline">
                <h3 className="text-7xl font-bold mb-2 text-white">
                  <AnimatedCounter from={0} to={700} duration={2} delay={0.3} />
                </h3>
                <span className="text-blue-400 font-bold text-4xl ml-1">+</span>
              </div>
              <p className="text-gray-300 text-lg">Happy Customers</p>
            </AnimatedText>
            
            {/* Fourth Box - Description */}
            <div className="md:col-span-8">
              <StaggeredText delay={0.6} once={false} staggerChildren={0.15}>
                <AnimatedItem>
                  <h3 className="text-xl text-blue-400 mb-4">02</h3>
                </AnimatedItem>
                <AnimatedItem>
                  <h3 className="text-3xl font-bold mb-4">Expert Guidance</h3>
                </AnimatedItem>
                <AnimatedItem>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Our certified financial planners provide insights and expertise to help you navigate even the most
                    complex financial landscapes.
                  </p>
                </AnimatedItem>
              </StaggeredText>
            </div>

            {/* Divider */}
            <div className="md:col-span-12 border-b border-gray-800 my-10"></div>
            
            {/* Fifth Box - Counter */}
            <AnimatedText 
              className="md:col-span-4 bg-[#121f30] p-10 rounded-lg flex flex-col justify-center items-start" 
              delay={0.7} 
              once={false} 
              direction="up"
            >
              <div className="flex items-baseline">
                <h3 className="text-7xl font-bold mb-2 text-white">
                  <AnimatedCounter from={0} to={8} duration={1.5} delay={0.3} />
                </h3>
                <span className="text-blue-400 font-bold text-4xl ml-1">+</span>
              </div>
              <p className="text-gray-300 text-lg">Award Winning</p>
            </AnimatedText>
            
            {/* Sixth Box - Description */}
            <div className="md:col-span-8">
              <StaggeredText delay={0.8} once={false} staggerChildren={0.15}>
                <AnimatedItem>
                  <h3 className="text-xl text-blue-400 mb-4">03</h3>
                </AnimatedItem>
                <AnimatedItem>
                  <h3 className="text-3xl font-bold mb-4">Long-term Partnerships</h3>
                </AnimatedItem>
                <AnimatedItem>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    We build enduring relationships with our clients, ensuring ongoing support in reaching your financial
                    aspirations.
                  </p>
                </AnimatedItem>
              </StaggeredText>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-[#0e1623]">
        <div className="container mx-auto px-6">
          <StaggeredText className="text-center mb-16" delay={0.2} once={false}>
            <AnimatedItem>
              <p className="uppercase text-sm tracking-wider font-medium mb-2 text-blue-400">CLIENT EXPERIENCES</p>
            </AnimatedItem>
            <AnimatedItem direction="up" distance={25}>
              <h2 className="text-4xl font-bold leading-tight">What Our Clients Say</h2>
            </AnimatedItem>
          </StaggeredText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedText className="bg-[#0a0a0a] p-8 rounded-lg" delay={0.3} once={false} direction="left">
              <div className="flex gap-1 mb-4 text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Working with Sammm has transformed my investment strategy. Their personalized guidance has helped me achieve financial stability and confidence. Highly recommend their services!"
              </p>
              <div className="flex items-center">
                <Image 
                  src="/images/advisor-portrait.jpg" 
                  alt="Ravi Kumar" 
                  width={48} 
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">Ravi Kumar</p>
                  <p className="text-gray-500 text-sm">Business Owner</p>
                </div>
              </div>
            </AnimatedText>
            
            <AnimatedText className="bg-[#0a0a0a] p-8 rounded-lg" delay={0.5} once={false} direction="right">
              <div className="flex gap-1 mb-4 text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Sammm's team of experts provided invaluable guidance during my financial planning journey. Their commitment to my goals has been truly impressive!"
              </p>
              <div className="flex items-center">
          <Image
                  src="/images/advisor-working.jpg" 
                  alt="Prerna Rao" 
                  width={48} 
                  height={48}
                  className="rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-bold">Prerna Rao</p>
                  <p className="text-gray-500 text-sm">IT Professional</p>
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedText 
              className="rounded-lg overflow-hidden shadow-xl" 
              delay={0.3} 
              once={false} 
              direction="left"
        >
          <Image
                src="/images/advisor-portrait.jpg" 
                alt="Financial advisor" 
                width={600} 
                height={400}
                className="w-full h-auto"
              />
            </AnimatedText>
            <StaggeredText 
              className="max-w-xl" 
              delay={0.4} 
              once={false}
              staggerChildren={0.12}
            >
              <AnimatedItem>
                <p className="uppercase text-sm tracking-wider font-medium mb-4 text-blue-400">CONNECT WITH US</p>
              </AnimatedItem>
              <AnimatedItem direction="up" distance={25}>
                <h2 className="text-4xl font-bold mb-6 leading-tight">Start Your Financial Journey Today</h2>
              </AnimatedItem>
              <AnimatedItem>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Reach out now for a complimentary consultation and discover your path to 
                  financial success.
                </p>
              </AnimatedItem>
              <AnimatedItem direction="up" distance={15} duration={0.6}>
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 inline-block"
                >
                  Get Started
                </Link>
              </AnimatedItem>
            </StaggeredText>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-6 bg-[#0a0a0a] border-t border-gray-800">
        <AnimatedText className="container mx-auto px-6 text-center" delay={0.3} once={false} direction="up" type="paragraph">
          <p className="text-gray-500 text-sm">Copyright © 2025 Sammm</p>
        </AnimatedText>
      </footer>
    </main>
  );
}

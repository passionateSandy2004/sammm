'use client';

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedCounter from "../components/AnimatedCounter";
import ParallaxBackground from "../components/ParallaxBackground";
import AdvancedButton from "../components/AdvancedButton";
import InfoCard from "../components/InfoCard";
import { useState } from "react";

// Icons
const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { 
      title: 'Our Mission', 
      content: 'At Sammm, our mission is to empower individuals and businesses with proven financial solutions and personalized investment strategies. We strive to enhance financial literacy and provide the tools necessary for clients to achieve their long-term financial goals.'
    },
    { 
      title: 'Our Values', 
      content: "Integrity, transparency, and commitment are at the heart of Sammm's values. We believe in building lasting relationships with our clients based on trust, respect, and exceptional service, ensuring that financial well-being is always our top priority."
    },
    { 
      title: 'Our Approach', 
      content: 'We take a collaborative approach to financial planning, working closely with each client to understand their unique needs and goals. Our advisors create customized strategies that adapt to changing market conditions and life circumstances.'
    }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section with Parallax */}
      <ParallaxBackground imageSrc="/images/hero-bg.jpg" height="700px">
        <div className="container mx-auto px-6 h-full flex flex-col justify-center">
          <AnimatedSection animation="fade-in" className="max-w-3xl mt-20">
            <p className="uppercase text-sm tracking-wider font-medium mb-2 text-blue-400">YOUR FINANCIAL PARTNERS</p>
            <h1 className="text-5xl font-bold mb-6 leading-tight">Empowering You to Achieve Financial Success</h1>
            <p className="text-gray-300 text-lg mb-8">Providing expert financial guidance and personalized solutions since 2004</p>
            <div className="flex flex-wrap gap-4">
              <AdvancedButton href="/contact" variant="primary" icon={<ArrowRightIcon />} className="relative z-30">
                Start Your Journey
              </AdvancedButton>
              <AdvancedButton href="/services" variant="outline" className="relative z-30 bg-transparent backdrop-blur-sm">
                Explore Our Services
              </AdvancedButton>
            </div>
          </AnimatedSection>
        </div>
      </ParallaxBackground>
      
      {/* Who We Are Section */}
      <section className="py-20 bg-gradient-blue">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left" className="max-w-xl">
              <p className="uppercase text-sm tracking-wider font-medium mb-4 text-blue-400">WHO WE ARE</p>
              <h2 className="text-4xl font-bold mb-6 leading-tight">Discover Our Commitment to Financial Excellence</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At Sammm, we pride ourselves on having helped countless clients secure 
                their financial futures. Our bespoke investment strategies have consistently 
                yielded impressive results, enabling individuals and businesses to achieve 
                their financial goals with confidence and clarity.
              </p>
              <AdvancedButton href="/about/team" variant="primary" size="sm">
                Meet Our Team
              </AdvancedButton>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right" className="rounded-lg overflow-hidden shadow-xl hover-grow">
              <Image 
                src="/images/advisor-working.jpg" 
                alt="Financial advisor working" 
                width={600} 
                height={400}
                className="w-full h-auto"
                priority
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="slide-up" className="bg-[#0e1623] p-12 rounded-lg grid grid-cols-1 md:grid-cols-4 gap-8 text-center shadow-xl glass-effect">
            <div className="md:border-r md:border-gray-700 md:pr-4 pb-6 md:pb-0">
              <h3 className="text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={5} suffix="+" className="text-white" />
                <span className="text-blue-400">+</span>
              </h3>
              <p className="text-gray-300 text-sm">Certified Advisors</p>
            </div>
            <div className="md:border-r md:border-gray-700 md:pr-4 pb-6 md:pb-0">
              <h3 className="text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={250} suffix="+" className="text-white" />
                <span className="text-blue-400">+</span>
              </h3>
              <p className="text-gray-300 text-sm">Happy Customers</p>
            </div>
            <div className="md:border-r md:border-gray-700 md:pr-4 pb-6 md:pb-0">
              <h3 className="text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={8} suffix="+" className="text-white" />
                <span className="text-blue-400">+</span>
              </h3>
              <p className="text-gray-300 text-sm">Award Winning</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={98} className="text-white" />
                <span className="text-blue-400">%</span>
              </h3>
              <p className="text-gray-300 text-sm">Customer Satisfaction</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <p className="uppercase text-sm tracking-wider font-medium mb-2 text-blue-400">OUR EXPERTISE</p>
            <h2 className="text-4xl font-bold leading-tight mb-4">Financial Services Tailored to Your Needs</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">We offer a comprehensive range of financial services designed to help you achieve your goals.</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="slide-up" delay={100} className="h-full">
              <InfoCard
                title="Investment Planning"
                description="Strategic investment solutions to maximize returns while managing risk levels appropriately for your goals."
                icon={<ChartIcon />}
              />
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={200} className="h-full">
              <InfoCard
                title="Wealth Protection"
                description="Safeguard your assets with comprehensive insurance solutions and risk management strategies."
                icon={<ShieldIcon />}
              />
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={300} className="h-full">
              <InfoCard
                title="Retirement Planning"
                description="Customized retirement plans that ensure financial security and peace of mind for your future."
                icon={<UserIcon />}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Our Journey Section */}
      <section className="py-20 bg-gradient-blue">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-right" delay={100} className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl hover-grow">
              <Image 
                src="/images/team-meeting.jpg" 
                alt="Team meeting" 
                width={600} 
                height={400}
                className="w-full h-auto"
              />
            </AnimatedSection>
            <AnimatedSection animation="slide-in-left" className="order-1 md:order-2 max-w-xl">
              <p className="uppercase text-sm tracking-wider font-medium mb-4 text-blue-400">OUR JOURNEY</p>
              <h2 className="text-4xl font-bold mb-6 leading-tight">The Evolution of Sammm Financial Advisory</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded in 2004, Sammm arose from a vision to provide tailored financial 
                and investment advice in Tamilnadu. Our expert team consistently implements 
                strategic investment solutions that have continuously improved our clients' portfolios. 
                Over the years, we have established a trusted reputation for personalized attention and 
                dependable results.
              </p>
              <div className="flex items-center gap-2 text-blue-400">
                <span className="h-1 w-12 bg-blue-400"></span>
                <p className="font-medium">18+ years of excellence</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Mission and Values Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <p className="uppercase text-sm tracking-wider font-medium mb-2 text-blue-400">OUR CORE PRINCIPLES</p>
            <h2 className="text-4xl font-bold leading-tight">Mission and Values That Drive Us</h2>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex border-b border-gray-700 mb-6">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`py-3 px-5 font-medium transition-colors ${
                    activeTab === index 
                      ? 'text-blue-400 border-b-2 border-blue-400' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <AnimatedSection animation="fade-in" key={activeTab} className="text-gray-300 leading-relaxed">
              <p>{tabs[activeTab].content}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-blue relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-600"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-blue-600"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left" className="rounded-lg overflow-hidden shadow-xl hover-grow">
              <Image 
                src="/images/advisor-portrait.jpg" 
                alt="Financial advisor" 
                width={600} 
                height={400}
                className="w-full h-auto"
              />
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right" className="max-w-xl">
              <p className="uppercase text-sm tracking-wider font-medium mb-4 text-blue-400">CONNECT WITH US</p>
              <h2 className="text-4xl font-bold mb-6 leading-tight">Start Your Financial Journey Today</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Reach out now for a complimentary consultation and discover your path to 
                financial success. Our team of experts is ready to help you achieve your goals.
              </p>
              <AdvancedButton href="/contact" variant="primary" size="lg" icon={<ArrowRightIcon />}>
                Get Started
              </AdvancedButton>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Testimonials or social proof */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-in" className="text-center">
            <p className="text-gray-300 text-lg italic">"Sammm Financial has transformed our approach to retirement planning. Their expert guidance has given us confidence in our financial future."</p>
            <div className="mt-4">
              <p className="text-blue-400 font-medium">Priya Sharma</p>
              <p className="text-gray-400 text-sm">CEO, TechSolutions Inc.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-6 bg-[#0a0a0a] border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">Copyright © 2025 Sammm • All Rights Reserved</p>
        </div>
      </footer>
    </main>
  );
}
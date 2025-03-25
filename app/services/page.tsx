'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import AdvancedButton from '../components/AdvancedButton';

interface Service {
  id: string;
  title: string;
  description: string;
  services: Array<{
    name: string;
    desc: string;
  }>;
  image: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const services: Service[] = [
  {
    id: '01',
    title: 'Equity Investment Advisory',
    description: 'Our core service focuses on providing strategic investment advice based on in-depth market research, technical analysis, and fundamental insights. We help investors maximize returns while minimizing risks.',
    services: [
      { name: 'Portfolio Analysis & Strategy', desc: 'Evaluation of your existing portfolio and recommendations for restructuring' },
      { name: 'Stock Selection', desc: 'Identification of high-potential stocks based on growth, valuation, and sectoral trends' },
      { name: 'Investment Plans', desc: 'Short-term, medium-term, and long-term investment plans tailored to your financial goals' },
      { name: 'Risk Management', desc: 'Personalized strategies to mitigate market volatility and reduce losses' }
    ],
    image: '/images/advisor-portrait.jpg'
  },
  {
    id: '02',
    title: 'Intraday & Swing Trading Advisory',
    description: 'For active traders, we offer precise and timely calls for intraday and short-term swing trading.',
    services: [
      { name: 'Intraday Trading Signals', desc: 'Real-time stock recommendations based on price action, volume, and market trends' },
      { name: 'Swing Trading Strategies', desc: 'Position-based trading calls to capture short-term market movements' },
      { name: 'Stop-Loss & Target Price Guidance', desc: 'Clear entry, exit, and risk management strategies' }
    ],
    image: '/images/advisor-working.jpg'
  },
  {
    id: '03',
    title: 'Portfolio Management Support',
    description: 'We help investors build and manage a well-diversified portfolio aligned with their risk appetite and financial goals.',
    services: [
      { name: 'Customized Portfolio Allocation', desc: 'Balance between equity, mutual funds, and other asset classes' },
      { name: 'Rebalancing & Restructuring', desc: 'Periodic portfolio adjustments to optimize performance' },
      { name: 'Sectoral & Thematic Investing', desc: 'Focus on high-growth sectors like technology, healthcare, and emerging trends' }
    ],
    image: '/images/team-meeting.jpg'
  },
  {
    id: '04',
    title: 'Wealth Creation & Long-Term Investment Planning',
    description: 'We design long-term investment strategies to help investors achieve financial security and wealth accumulation.',
    services: [
      { name: 'Retirement Planning', desc: 'SIPs, blue-chip stocks, and ETFs for steady growth' },
      { name: "Children's Education & Future Planning", desc: 'Investments for long-term wealth creation' },
      { name: 'Passive Income Strategies', desc: 'Dividend stocks, REITs, and ETFs for regular income' }
    ],
    image: '/images/professional-architect-1-scaled.jpg'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10"></div>
        <motion.div
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/professional-architect-1-scaled.jpg"
            alt="Investment Advisory"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm md:text-base text-blue-400 font-medium mb-4 tracking-wider uppercase"
          >
            Empowering Financial Futures
          </motion.p>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Comprehensive Investment
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Advisory Services
            </span>
          </motion.h1>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-40"
        >
          {services.map((service) => (
            <motion.div
              id={`service-${service.id}`}
              key={service.id}
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-16 items-center group"
            >
              <div className={parseInt(service.id) % 2 === 0 ? 'md:order-2' : ''}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[#1a2942] to-[#2a3958] p-10 rounded-2xl shadow-2xl backdrop-blur-sm border border-blue-900/20"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-semibold mb-2 text-blue-400"
                  >
                    {service.id}.
                  </motion.h2>
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-300 mb-8 text-lg leading-relaxed"
                  >
                    {service.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="space-y-6"
                  >
                    <h4 className="font-semibold text-xl text-white/90">Services Offered:</h4>
                    {service.services.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 * index }}
                        className="ml-4 group"
                      >
                        <p className="font-medium text-blue-400 mb-2 text-lg group-hover:text-blue-300 transition-colors">
                          {item.name}
                        </p>
                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className={parseInt(service.id) % 2 === 0 ? 'md:order-1' : ''}
              >
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-4 text-center relative z-10"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
          >
            Start Your Financial Journey Today
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-300 text-xl mb-12 leading-relaxed"
          >
            Reach out now for a complimentary consultation and discover your path to financial success.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-5 rounded-xl font-medium text-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-blue-500/25"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a192f]/50 py-8 text-center text-gray-400 backdrop-blur-sm border-t border-blue-900/20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Copyright © 2024 Sammm
        </motion.p>
      </footer>
    </main>
  );
}
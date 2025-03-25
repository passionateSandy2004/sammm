'use client';

import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';

const services = [
  {
    id: '01',
    title: 'Equity Investment Advisory',
    description: 'In-depth market research, technical analysis, and fundamental insights for risk-aware investors. Regular investment reporting.'
  },
  {
    id: '02',
    title: 'Intraday & Swing Trading Advisory',
    description: 'For active traders, we offer precise and timely calls for intraday and short-term swing trading.'
  },
  {
    id: '03',
    title: 'Portfolio Management Support',
    description: 'We help investors build and manage a well-diversified portfolio aligned with their risk appetite and financial goals.'
  },
  {
    id: '04',
    title: 'Wealth Creation & Long-Term Investment Planning',
    description: 'We design long-term investment strategies to help investors achieve financial security and wealth creation.'
  }
];

export default function ServiceCardsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      
      {/* Service Cards Section */}
      <section className="py-24 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              delay={0.2 + (index * 0.1)}
            />
          ))}
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="py-6 bg-[#0a0a0a] border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-500 text-sm"
          >
            Copyright © 2025 Sammm
          </motion.p>
        </div>
      </footer>
    </main>
  );
} 
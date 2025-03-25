'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({ id, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-[#0e1623] p-8 rounded-lg hover:bg-[#121f30] transition duration-300 h-full flex flex-col"
    >
      <div className="mb-4 text-blue-500 font-bold text-xl">{id}.</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 mb-6 flex-grow">
        {description}
      </p>
      <Link 
        href={`/services#service-${id}`} 
        className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-2 transition duration-300 mt-auto"
      >
        Read More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </motion.div>
  );
} 
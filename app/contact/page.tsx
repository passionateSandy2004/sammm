'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import AdvancedButton from '../components/AdvancedButton';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null as string | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setStatus({ loading: true, success: false, error: null });
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit the form');
      }
      
      setStatus({ loading: false, success: true, error: null });
      
      // Reset the form
      setFormData({
        firstName: '',
        email: '',
        message: ''
      });
      
      // Display success message for 3 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ 
        loading: false, 
        success: false, 
        error: error instanceof Error ? error.message : 'An unknown error occurred' 
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/professional-architect-1-scaled.jpg"
            alt="Contact us hero"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.4)] via-[rgba(10,10,10,0.6)] to-[#0a0a0a]" />
        </div>
        <div className="container mx-auto px-6 z-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="uppercase text-sm tracking-wider font-medium mb-4 text-blue-400"
            >
              GET IN TOUCH
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-5xl font-bold mb-4 leading-tight"
            >
              Connect with Us
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-20 bg-[#0e1623]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-10"
              >
                <h2 className="text-3xl font-bold mb-4">REACH OUT</h2>
                <h3 className="text-4xl font-bold text-white mb-6">For Personalized Support</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-[#0a0a0a] p-8 rounded-lg shadow-xl"
              >
                <div className="mb-6 bg-blue-900/40 border border-blue-500 text-blue-200 px-4 py-3 rounded">
                  <p>All messages are sent directly to <span className="font-semibold">support@sammm.in</span></p>
                </div>
                
                {status.success && (
                  <div className="mb-6 bg-green-900/40 border border-green-500 text-green-200 px-4 py-3 rounded">
                    <p className="font-medium">Thank you! Your message has been sent to support@sammm.in directly.</p>
                    <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
                  </div>
                )}
                
                {status.error && (
                  <div className="mb-6 bg-red-900/40 border border-red-500 text-red-200 px-4 py-3 rounded">
                    <p>Error: {status.error}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="firstName" className="block text-white font-medium mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-[#1a1a1a] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      disabled={status.loading}
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#1a1a1a] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      disabled={status.loading}
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-[#1a1a1a] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      disabled={status.loading}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`${
                      status.loading 
                        ? 'bg-blue-800 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    } text-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center`}
                    disabled={status.loading}
                  >
                    {status.loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : 'Submit'}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Contact Info Column */}
            <div className="md:col-span-6 md:col-start-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="space-y-12 pt-10"
              >
                <div>
                  <h3 className="text-blue-400 font-medium mb-4">PHONE</h3>
                  <p className="text-2xl text-white font-medium">+91 9566644919</p>
                  <div className="border-b border-gray-700 mt-6"></div>
                </div>

                <div>
                  <h3 className="text-blue-400 font-medium mb-4">EMAIL</h3>
                  <p className="text-2xl text-white font-medium">support@sammm.in</p>
                  <div className="border-b border-gray-700 mt-6"></div>
                </div>

                <div>
                  <h3 className="text-blue-400 font-medium mb-4">LOCATION</h3>
                  <p className="text-2xl text-white font-medium">Madurai, Tamilnadu</p>
                  <div className="border-b border-gray-700 mt-6"></div>
                </div>

                <div>
                  <h3 className="text-blue-400 font-medium mb-4">SOCIAL MEDIA</h3>
                  <div className="flex space-x-6">
                    <a href="#" className="text-white hover:text-blue-400 transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-6 h-6 fill-current">
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current">
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 h-6 fill-current">
                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
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
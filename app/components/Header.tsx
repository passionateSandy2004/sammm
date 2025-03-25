"use client"

import Link from "next/link";
import Image from "next/image";
import AdvancedButton from "./AdvancedButton";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];
  
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-5">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Sammm Financial" 
              width={161} 
              height={74} 
              className="h-14 w-auto"
              priority
              quality={100}
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = 
                item.href === "/" 
                  ? pathname === "/" 
                  : pathname.startsWith(item.href);
                  
              return (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`transition duration-300 font-medium ${
                    isActive 
                      ? "text-white border-b-2 border-blue-500 pb-1" 
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <AdvancedButton href="/contact" variant="primary" size="sm">
              Get Started
            </AdvancedButton>
          </nav>
          
          <button className="md:hidden text-white p-2 rounded-md hover:bg-blue-900/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 
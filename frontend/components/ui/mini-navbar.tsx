"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const defaultTextColor = 'text-gray-300';
    const hoverTextColor = 'text-white';
    const textSizeClass = 'text-sm font-medium';

    return (
        <Link href={href} className={`group relative inline-block overflow-hidden h-5 flex items-center ${textSizeClass}`}>
            <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
                <span className={defaultTextColor}>{children}</span>
                <span className={hoverTextColor}>{children}</span>
            </div>
        </Link>
    );
};

export function MiniNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
    const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (shapeTimeoutRef.current) {
            clearTimeout(shapeTimeoutRef.current);
        }

        if (isOpen) {
            setHeaderShapeClass('rounded-[2rem]');
        } else {
            shapeTimeoutRef.current = setTimeout(() => {
                setHeaderShapeClass('rounded-full');
            }, 300);
        }

        return () => {
            if (shapeTimeoutRef.current) {
                clearTimeout(shapeTimeoutRef.current);
            }
        };
    }, [isOpen]);

    const navLinksData = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Projects', href: '/projects' },
    ];

    const getStartedButtonElement = (
        <Link href="/contact" className="relative group w-full sm:w-auto">
            <div className="absolute inset-0 -m-2 rounded-full
                     hidden sm:block
                     bg-indigo-500
                     opacity-40 filter blur-lg pointer-events-none
                     transition-all duration-300 ease-out
                     group-hover:opacity-60 group-hover:blur-xl group-hover:-m-3"></div>
            <div className="relative z-10 px-6 py-2 sm:px-5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full hover:from-indigo-500 hover:to-violet-500 transition-all duration-200 w-full sm:w-auto text-center border border-white/10 shadow-lg">
                Contact Us
            </div>
        </Link>
    );

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full py-6 px-4 pointer-events-none">

            {/* Main Container */}
            <div className="relative flex items-center justify-center w-full max-w-7xl pointer-events-auto">

                {/* Big Logo (Absolute Left) */}
                <motion.div
                    className="absolute left-0 cursor-pointer z-50"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Zenvoa Technologies"
                            width={500}
                            height={250}
                            className="h-40 w-auto object-contain"
                        />
                    </Link>
                </motion.div>

                {/* The Mini Navbar Pill - Centered */}
                <header className={`
                        flex flex-col items-center
                        px-6 py-2 backdrop-blur-md
                        ${headerShapeClass}
                        border border-white/10 bg-black/80
                        w-auto
                        transition-[border-radius] duration-300 ease-in-out
                        shadow-2xl
                       `}>

                    <div className="flex items-center justify-between gap-x-6 sm:gap-x-8">
                        {/* Removed internal small logo since we have the big one outside */}

                        <nav className="hidden sm:flex items-center space-x-6 text-sm">
                            {navLinksData.map((link) => (
                                <AnimatedNavLink key={link.href} href={link.href}>
                                    {link.label}
                                </AnimatedNavLink>
                            ))}
                        </nav>

                        <div className="hidden sm:flex items-center gap-2 sm:gap-3">
                            {getStartedButtonElement}
                        </div>

                        <button className="sm:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none" onClick={toggleMenu} aria-label={isOpen ? 'Close Menu' : 'Open Menu'}>
                            {isOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            )}
                        </button>
                    </div>

                    <div className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                            ${isOpen ? 'max-h-[1000px] opacity-100 pt-6 pb-2' : 'max-h-0 opacity-0 pt-0 pointer-events-none'}`}>
                        <nav className="flex flex-col items-center space-y-4 text-base w-full">
                            {navLinksData.map((link) => (
                                <Link key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors w-full text-center" onClick={toggleMenu}>
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                        <div className="flex flex-col items-center space-y-4 mt-6 w-full">
                            {getStartedButtonElement}
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}

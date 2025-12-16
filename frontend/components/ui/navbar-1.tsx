"use client"

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Navbar1 = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <div className="flex justify-center w-full py-6 px-4 fixed top-0 left-0 right-0 z-50 pointer-events-none">
            <div className="flex items-center w-full max-w-7xl relative pointer-events-auto">
                <motion.div
                    className="mr-auto cursor-pointer"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Zenvoa Technologies"
                            width={300}
                            height={150}
                            className="h-24 w-auto object-contain"
                        />
                    </Link>
                </motion.div>

                <div className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md dark:bg-black/80 rounded-full shadow-lg border border-black/5 dark:border-white/10 ml-4 flex-1 max-w-7xl">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Link href={item.href} className="text-sm text-foreground/80 hover:text-foreground transition-colors font-medium">
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    {/* Desktop CTA Button */}
                    <motion.div
                        className="hidden md:block"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-5 py-2 text-sm text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors"
                        >
                            Get Started
                        </Link>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.button className="md:hidden flex items-center" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
                        <Menu className="h-6 w-6 text-foreground" />
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-background z-50 pt-24 px-6 md:hidden pointer-events-auto"
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <motion.button
                            className="absolute top-6 right-6 p-2"
                            onClick={toggleMenu}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <X className="h-6 w-6 text-foreground" />
                        </motion.button>
                        <div className="flex flex-col space-y-6">
                            {menuItems.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 + 0.1 }}
                                    exit={{ opacity: 0, x: 20 }}
                                >
                                    <Link href={item.href} className="text-base text-foreground font-medium" onClick={toggleMenu}>
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="pt-6"
                            >
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors "
                                    onClick={toggleMenu}
                                >
                                    Get Started
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export { Navbar1 }

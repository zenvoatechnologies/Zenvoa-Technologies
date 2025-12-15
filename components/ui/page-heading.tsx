"use client";

import { motion } from "framer-motion";

interface PageHeadingProps {
    children: React.ReactNode;
    className?: string;
}

export function PageHeading({ children, className = "" }: PageHeadingProps) {
    return (
        <motion.h1
            className={`text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white ${className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
            <span className="text-white">.</span>
        </motion.h1>
    );
}

"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";

const SPRING = {
    mass: 0.1,
    damping: 10,
    stiffness: 131,
};

export const SpringMouseFollow = () => {
    const xSpring = useSpring(0, SPRING);
    const ySpring = useSpring(0, SPRING);
    const opacitySpring = useSpring(0, SPRING);
    const scaleSpring = useSpring(1, SPRING);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            xSpring.set(e.clientX);
            ySpring.set(e.clientY);
        };

        const handleMouseEnter = () => {
            opacitySpring.set(1);
            scaleSpring.set(1);
        };

        const handleMouseLeave = () => {
            opacitySpring.set(0);
            scaleSpring.set(0);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseenter", handleMouseEnter);
        window.addEventListener("mouseleave", handleMouseLeave);

        // Show on mount
        opacitySpring.set(1);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseenter", handleMouseEnter);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [xSpring, ySpring, opacitySpring, scaleSpring]);

    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
            <motion.div
                style={{
                    x: xSpring,
                    y: ySpring,
                    opacity: opacitySpring,
                    scale: scaleSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="absolute size-10 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 blur-sm"
            />
        </div>
    );
};

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    message?: string;
}

export function SuccessModal({ isOpen, onClose, message = "Message sent successfully!" }: SuccessModalProps) {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.5, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-md w-full border border-white/10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Animated Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-2xl blur-xl -z-10" />

                        {/* Content */}
                        <div className="flex flex-col items-center text-center space-y-4">
                            {/* Animated Checkmark */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15,
                                    delay: 0.2
                                }}
                                className="relative"
                            >
                                {/* Outer Ring Animation */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 blur-xl opacity-50"
                                />

                                {/* Checkmark Icon */}
                                <div className="relative bg-gradient-to-br from-green-400 to-emerald-500 rounded-full p-4">
                                    <CheckCircle2 className="w-16 h-16 text-white" strokeWidth={2.5} />
                                </div>

                                {/* Ripple Effect */}
                                <motion.div
                                    initial={{ scale: 1, opacity: 0.5 }}
                                    animate={{ scale: 2, opacity: 0 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="absolute inset-0 rounded-full border-2 border-green-400"
                                />
                            </motion.div>

                            {/* Success Text */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="space-y-2"
                            >
                                <h3 className="text-2xl font-bold text-white">
                                    Success!
                                </h3>
                                <p className="text-white/70 text-base">
                                    {message}
                                </p>
                                <p className="text-white/50 text-sm">
                                    We'll get back to you soon.
                                </p>
                            </motion.div>

                            {/* Progress Bar */}
                            <motion.div
                                className="w-full h-1 bg-white/10 rounded-full overflow-hidden"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <motion.div
                                    className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                                    initial={{ width: "100%" }}
                                    animate={{ width: "0%" }}
                                    transition={{ duration: 3, ease: "linear" }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

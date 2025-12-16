"use client";

import type { Metadata } from "next";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import { ProjectCard } from "@/components/ui/project-card";
import { PageHeading } from "@/components/ui/page-heading";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen py-24 md:py-32">
            <div className="container px-4 md:px-6">
                {/* Header */}
                <div className="mb-16 text-center">
                    <PageHeading className="mb-4 text-center">
                        Our <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Projects</span>
                    </PageHeading>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-white/70 md:text-lg max-w-[800px] mx-auto"
                    >
                        Innovative solutions we're building for our clients
                    </motion.p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto justify-items-center">
                    {/* Turf Booking App - In Progress */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ProjectCard
                            imageUrl="https://images.unsplash.com/photo-1459865264687-595d652de67e?w=600&auto=format&fit=crop&q=80"
                            imageAlt="Sports turf field"
                            logo={<Smartphone className="h-8 w-8 text-indigo-400" />}
                            title="Turf Booking App"
                            status="In Progress"
                            overview="A comprehensive mobile application for booking sports turfs and managing reservations seamlessly."
                            features="Real-time availability, booking management, payment integration, user profiles"
                            techStack="React Native, Node.js, MongoDB, Firebase"
                        />
                    </motion.div>

                    {/* Placeholder for future projects */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative overflow-hidden rounded-xl border border-dashed border-white/20 bg-white/5 backdrop-blur-sm p-8 flex items-center justify-center min-h-[500px]"
                    >
                        <div className="text-center">
                            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🚀</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">More Projects Coming Soon</h3>
                            <p className="text-sm text-white/60">We're working on exciting new projects</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative overflow-hidden rounded-xl border border-white/20 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 backdrop-blur-sm p-12 flex items-center justify-center min-h-[500px] group"
                    >
                        {/* Animated Background Gradient */}
                        <motion.div
                            animate={{
                                background: [
                                    "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
                                    "radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
                                    "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
                                ],
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                        />

                        <div className="relative text-center space-y-6 z-10">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                                    Ready to Start Your Project?
                                </h3>
                                <p className="text-lg text-white/70 mb-8 max-w-md mx-auto">
                                    Let's transform your vision into reality together
                                </p>
                            </motion.div>

                            {/* Glowing Animated Button */}
                            <motion.a
                                href="/contact"
                                className="relative inline-block group/btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* Outer Glow */}
                                <motion.div
                                    animate={{
                                        opacity: [0.5, 0.8, 0.5],
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full blur-xl opacity-50"
                                />

                                {/* Button */}
                                <div className="relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full text-white font-semibold text-lg shadow-2xl border border-white/20 overflow-hidden">
                                    {/* Shimmer Effect */}
                                    <motion.div
                                        animate={{ x: ["-100%", "100%"] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    />

                                    <span className="relative flex items-center gap-2">
                                        <span>Contact Us Now</span>
                                        <motion.span
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            →
                                        </motion.span>
                                    </span>
                                </div>
                            </motion.a>

                            {/* Floating Icons */}
                            <div className="flex justify-center gap-4 mt-8">
                                {["💡", "🚀", "✨"].map((emoji, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                                        className="text-3xl"
                                    >
                                        {emoji}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

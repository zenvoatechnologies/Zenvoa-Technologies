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
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
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
                        className="relative overflow-hidden rounded-xl border border-dashed border-white/20 bg-white/5 backdrop-blur-sm p-8 flex items-center justify-center min-h-[500px]"
                    >
                        <div className="text-center">
                            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">💡</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Your Project Here</h3>
                            <p className="text-sm text-white/60">Let's build something amazing together</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

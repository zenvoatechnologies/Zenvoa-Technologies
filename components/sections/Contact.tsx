"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

export default function Contact() {
    return (
        <section className="py-24 bg-transparent">
            <div className="container px-4 md:px-6 space-y-16">
                {/* Contact Form Section */}
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                                Get in Touch
                            </h2>
                            <p className="mt-4 text-white/70 md:text-lg">
                                Ready to start your next project? We'd love to hear from you.
                            </p>
                        </div>
                        <div className="space-y-4 text-lg">
                            <p className="flex items-center gap-2 text-white">
                                <span className="font-semibold">Email:</span> zenvoatechnologies@gmail.com
                            </p>
                            <p className="flex items-center gap-2 text-white">
                                <span className="font-semibold">Phone:</span> +91 123 456 7890
                            </p>
                            <p className="flex items-center gap-2 text-white">
                                <span className="font-semibold">Address:</span> 123 Tech Park, Innovation City, IN
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8"
                    >
                        <form className="space-y-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium text-white">First name</label>
                                    <input id="first-name" className="w-full rounded-md border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-2 text-white" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium text-white">Last name</label>
                                    <input id="last-name" className="w-full rounded-md border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-2 text-white" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
                                <input id="email" type="email" className="w-full rounded-md border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-2 text-white" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-white">Message</label>
                                <textarea id="message" className="w-full rounded-md border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-2 min-h-[120px] text-white" required />
                            </div>
                            <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>

                {/* Calendar Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <Calendar />
                </motion.div>
            </div>
        </section>
    );
}

"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Code, Lightbulb, Users, Rocket, Award, Target, Zap } from "lucide-react"
import { UserAvatars } from "@/components/ui/user-avatars"
import { PageHeading } from "@/components/ui/page-heading"

interface AboutPageProps {
    achievements?: Array<{ label: string; value: string }>
}

const defaultAchievements = [
    { label: "Projects Delivered", value: "50+" },
    { label: "Happy Clients", value: "98%" },
    { label: "Team Members", value: "15+" },
    { label: "Years Experience", value: "5+" },
]

const clientLogos = [
    { id: 1, name: "TechCorp", image: "https://i.pravatar.cc/150?img=51" },
    { id: 2, name: "InnovateLabs", image: "https://i.pravatar.cc/150?img=52" },
    { id: 3, name: "Digital Solutions", image: "https://i.pravatar.cc/150?img=53" },
    { id: 4, name: "StartupHub", image: "https://i.pravatar.cc/150?img=54" },
    { id: 5, name: "CloudTech", image: "https://i.pravatar.cc/150?img=55" },
    { id: 6, name: "DataDrive", image: "https://i.pravatar.cc/150?img=56" },
    { id: 7, name: "AppVentures", image: "https://i.pravatar.cc/150?img=57" },
    { id: 8, name: "WebMasters", image: "https://i.pravatar.cc/150?img=58" },
]

export default function AboutPage({
    achievements = defaultAchievements,
}: AboutPageProps) {
    return (
        <div className="flex flex-col">
            {/* ---------------- ABOUT SECTION ---------------- */}
            <section className="py-20 md:py-28 bg-transparent">
                <div className="mx-auto max-w-6xl space-y-16 px-6">

                    {/* Header */}
                    <div className="grid gap-6 text-center md:grid-cols-2 md:gap-12 md:text-left">
                        <PageHeading>
                            About <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Zenvoa</span>
                        </PageHeading>
                        <div className="space-y-4">
                            <p className="text-white/70">
                                Founded in 2019, Zenvoa Technologies has been at the forefront of digital innovation,
                                helping businesses transform their ideas into powerful digital solutions.
                            </p>
                            <p className="text-white/70">
                                We combine technical expertise with creative thinking to deliver solutions that
                                not only meet but exceed expectations.
                            </p>
                        </div>
                    </div>

                    {/* Mission & Vision Cards */}
                    <div className="grid gap-6 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-white/10 backdrop-blur-sm"
                        >
                            <Target className="h-12 w-12 text-indigo-400 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                            <p className="text-white/70">
                                To empower businesses with innovative technology solutions that drive growth,
                                efficiency, and digital transformation. We believe in creating lasting partnerships
                                and delivering measurable results that make a real difference.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-white/10 backdrop-blur-sm"
                        >
                            <Rocket className="h-12 w-12 text-violet-400 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
                            <p className="text-white/70">
                                To be the leading technology partner for businesses worldwide, recognized for
                                our innovation, quality, and unwavering commitment to client success. We envision
                                a future where technology seamlessly enhances every business operation.
                            </p>
                        </motion.div>
                    </div>

                    {/* Core Values */}
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Our Core Values</h2>
                        <div className="grid gap-6 md:grid-cols-3">
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-indigo-500/50 transition-all"
                            >
                                <Zap className="h-10 w-10 text-yellow-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                                <p className="text-white/70 text-sm">
                                    We constantly push boundaries and explore new technologies to deliver
                                    cutting-edge solutions that give our clients a competitive advantage.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-violet-500/50 transition-all"
                            >
                                <Award className="h-10 w-10 text-indigo-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
                                <p className="text-white/70 text-sm">
                                    Quality is not just a goal—it's our standard. We take pride in delivering
                                    exceptional work that stands the test of time.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-rose-500/50 transition-all"
                            >
                                <Users className="h-10 w-10 text-green-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Collaboration</h3>
                                <p className="text-white/70 text-sm">
                                    We believe in the power of teamwork—both within our team and with our clients.
                                    Together, we achieve extraordinary results.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* What We Do */}
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">What We Do</h2>
                        <div className="grid gap-6 md:grid-cols-3">
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all"
                            >
                                <Code className="h-10 w-10 text-rose-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Custom Development</h3>
                                <p className="text-white/70 text-sm">
                                    From web applications to mobile apps, we build robust, scalable solutions
                                    using React, Next.js, Node.js, and modern cloud technologies.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all"
                            >
                                <Lightbulb className="h-10 w-10 text-amber-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">UI/UX Design</h3>
                                <p className="text-white/70 text-sm">
                                    Creating beautiful, intuitive interfaces that users love. We focus on
                                    user research, wireframing, prototyping, and visual design.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all"
                            >
                                <Users className="h-10 w-10 text-green-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Digital Strategy</h3>
                                <p className="text-white/70 text-sm">
                                    Strategic consulting to help you navigate digital transformation,
                                    optimize processes, and leverage technology for business growth.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* How We Work */}
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">How We Work</h2>
                        <div className="grid gap-6 md:grid-cols-4">
                            {[
                                { step: "01", title: "Discovery", desc: "Deep dive into your business needs, goals, and challenges" },
                                { step: "02", title: "Planning", desc: "Strategic roadmap with clear milestones and deliverables" },
                                { step: "03", title: "Execution", desc: "Agile development with regular updates and iterations" },
                                { step: "04", title: "Support", desc: "Ongoing maintenance, optimization, and 24/7 support" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <div className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-3">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-white/70 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Our Clients */}
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Our Clients</h2>
                        <p className="text-white/70 text-center max-w-2xl mx-auto">
                            Trusted by leading companies and innovative startups worldwide
                        </p>
                        <div className="flex justify-center">
                            <UserAvatars
                                users={clientLogos}
                                maxVisible={8}
                                size={64}
                                overlap={70}
                                focusScale={1.3}
                            />
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-white/10 backdrop-blur-sm">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">
                                    {achievement.value}
                                </div>
                                <div className="text-sm text-white/70">{achievement.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Visual Cards Section */}
                    <div className="flex flex-col md:flex-row gap-6 mt-16">

                        {/* LEFT BIG IMAGE */}
                        <div className="md:flex-1">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                                alt="Team collaboration and brainstorming"
                                className="rounded-xl object-cover w-full h-[300px] sm:h-[360px] md:h-[100%]"
                                width={800}
                                height={550}
                            />
                        </div>

                        {/* RIGHT TWO CARDS */}
                        <div className="flex flex-col gap-6 md:flex-1">
                            {/* FIRST CARD */}
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                                className="relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative h-60 sm:h-64 md:h-48 w-full overflow-hidden"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
                                        alt="Data analytics and business growth"
                                        className="h-full w-full object-cover"
                                        width={600}
                                        height={400}
                                    />
                                    <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-black via-black/70 to-transparent" />
                                </motion.div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold">Data-Driven Solutions</h3>
                                    <p className="mt-2 text-sm text-gray-200">
                                        We leverage analytics and insights to build solutions that deliver
                                        measurable business impact and ROI.
                                    </p>
                                </div>
                            </motion.div>

                            {/* SECOND CARD */}
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                                className="relative overflow-hidden rounded-xl shadow-lg"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=80"
                                    alt="Modern workspace and technology"
                                    className="h-full w-full object-cover min-h-[220px] sm:min-h-[240px] md:min-h-[220px]"
                                    width={600}
                                    height={400}
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                                    <h3 className="text-xl font-bold">Modern Technology Stack</h3>
                                    <p className="mt-2 text-sm text-gray-200">
                                        Using the latest frameworks and tools to ensure your solution is
                                        fast, secure, and scalable.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

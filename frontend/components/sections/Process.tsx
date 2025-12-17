"use client";

import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { Mail, MessageSquare, Lightbulb, Code, TestTube, Rocket } from "lucide-react";

export default function Process() {
    const processData = [
        {
            title: "Contact & Discovery",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Reach out to us with your vision. We'll schedule an initial call to understand your needs, goals, and project requirements in detail.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg bg-gradient-to-br from-indigo-500/10 to-rose-500/10 p-8 flex flex-col items-center justify-center h-32 md:h-44 lg:h-60 border border-white/10">
                            <Mail className="w-12 h-12 md:w-16 md:h-16 text-indigo-400 mb-4" />
                            <p className="text-white/60 text-xs md:text-sm text-center">Initial Contact</p>
                        </div>
                        <div className="rounded-lg bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-8 flex flex-col items-center justify-center h-32 md:h-44 lg:h-60 border border-white/10">
                            <MessageSquare className="w-12 h-12 md:w-16 md:h-16 text-violet-400 mb-4" />
                            <p className="text-white/60 text-xs md:text-sm text-center">Discovery Call</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Strategy & Design",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Our experts craft a comprehensive technical roadmap and create stunning UI/UX designs to visualize your final product.
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
                            ✅ Technical Architecture Planning
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
                            ✅ UI/UX Design & Prototyping
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
                            ✅ Technology Stack Selection
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Project Timeline & Milestones
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg bg-gradient-to-br from-rose-500/10 to-amber-500/10 p-8 flex flex-col items-center justify-center h-32 md:h-44 lg:h-60 border border-white/10">
                            <Lightbulb className="w-12 h-12 md:w-16 md:h-16 text-amber-400 mb-4" />
                            <p className="text-white/60 text-xs md:text-sm text-center">Strategic Planning</p>
                        </div>
                        <div className="rounded-lg bg-gradient-to-br from-indigo-500/10 to-violet-500/10 p-8 flex flex-col items-center justify-center h-32 md:h-44 lg:h-60 border border-white/10">
                            <Code className="w-12 h-12 md:w-16 md:h-16 text-indigo-400 mb-4" />
                            <p className="text-white/60 text-xs md:text-sm text-center">Design System</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Development",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        We build your solution using cutting-edge technologies, ensuring optimal performance, scalability, and maintainability.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-8 flex flex-col items-center justify-center h-32 md:h-44 lg:h-60 border border-white/10">
                            <Code className="w-12 h-12 md:w-16 md:h-16 text-cyan-400 mb-4" />
                            <p className="text-white/60 text-xs md:text-sm text-center">Clean Code</p>
                        </div>
                        <div className="rounded-lg bg-gradient-to-br from-violet-500/10 to-rose-500/10 p-8 flex flex-col items-center justify-center h-32 md:h-44 lg:h-60 border border-white/10">
                            <TestTube className="w-12 h-12 md:w-16 md:h-16 text-rose-400 mb-4" />
                            <p className="text-white/60 text-xs md:text-sm text-center">Agile Sprints</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Launch & Support",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        We deploy your application with zero downtime and provide comprehensive ongoing support.
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
                            ✅ Production Deployment
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
                            ✅ Performance Monitoring
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
                            ✅ 24/7 Technical Support
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
                            ✅ Regular Updates & Maintenance
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Security Patches & Optimization
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg bg-gradient-to-br from-rose-500/10 to-indigo-500/10 p-8 flex flex-col items-center justify-center h-32 md:h-44 lg:h-60 border border-white/10">
                            <Rocket className="w-12 h-12 md:w-16 md:h-16 text-rose-400 mb-4" />
                            <p className="text-white/60 text-xs md:text-sm text-center">Successful Launch</p>
                        </div>
                        <div className="rounded-lg bg-gradient-to-br from-amber-500/10 to-cyan-500/10 p-8 flex flex-col items-center justify-center h-32 md:h-44 lg:h-60 border border-white/10">
                            <Mail className="w-12 h-12 md:w-16 md:h-16 text-amber-400 mb-4" />
                            <p className="text-white/60 text-xs md:text-sm text-center">Ongoing Support</p>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return <Timeline data={processData} />;
}

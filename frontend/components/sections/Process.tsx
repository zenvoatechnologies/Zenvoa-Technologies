"use client";

import { ProcessSection } from "@/components/ui/how-we-do-it-process-overview";
import { Mail, MessageSquare, Lightbulb, Code, TestTube, Rocket } from "lucide-react";

export default function Process() {
    const processItems = [
        {
            icon: Mail,
            title: "Contact & Discovery",
            description: "Reach out to us with your vision. We'll schedule an initial call to understand your needs and goals.",
        },
        {
            icon: MessageSquare,
            title: "Consultation & Proposal",
            description: "We analyze your requirements and present a tailored proposal with timeline and budget.",
        },
        {
            icon: Lightbulb,
            title: "Strategy & Design",
            description: "Our experts craft a technical roadmap and UI/UX designs to visualize the final product.",
        },
        {
            icon: Code,
            title: "Development",
            description: "We build your solution using cutting-edge technologies, ensuring performance and scalability.",
        },
        {
            icon: TestTube,
            title: "Testing & QA",
            description: "Rigorous testing ensures your application is bug-free and performs flawlessly.",
        },
        {
            icon: Rocket,
            title: "Launch & Support",
            description: "We deploy your application and provide ongoing maintenance, updates, and 24/7 technical support.",
        },
    ];

    return (
        <ProcessSection
            subtitle="Our Model"
            title="How We Do It"
            description="We follow Agile methodologies to deliver exceptional results, working on a typical matrix of time, effort, and quality."
            buttonText="Contact Us"
            buttonLink="/contact"
            items={processItems}
        />
    );
}

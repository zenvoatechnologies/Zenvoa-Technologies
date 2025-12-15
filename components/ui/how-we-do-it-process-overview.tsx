import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

// Interface for individual process card props
interface ProcessCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    className?: string;
}

// Reusable Process Card Component
const ProcessCard: React.FC<ProcessCardProps> = ({ icon: Icon, title, description, className }) => (
    <div className={cn("group relative w-full rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all cursor-pointer duration-300 hover:border-indigo-500/60 hover:shadow-lg hover:shadow-indigo-500/20", className)}>
        {/* Decorative Line - Visible on larger screens */}
        <div className="absolute -left-[1px] top-1/2 hidden h-1/2 w-px -translate-y-1/2 bg-white/10 transition-colors group-hover:bg-indigo-500/60 md:block" />
        <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-white/10 transition-colors group-hover:bg-indigo-500/60 md:hidden" />

        {/* Icon Container */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg duration-300 border border-white/20 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 text-indigo-400 shadow-sm transition-all group-hover:from-indigo-500 group-hover:to-violet-500 group-hover:text-white group-hover:scale-110">
            <Icon className="h-6 w-6" />
        </div>

        {/* Content */}
        <div className="flex flex-col">
            <h3 className="mb-1 text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-white/70">{description}</p>
        </div>
    </div>
);

// Interface for the main section props
interface ProcessSectionProps {
    subtitle: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink?: string;
    items: ProcessCardProps[];
}

// Main Process Section Component
export const ProcessSection: React.FC<ProcessSectionProps> = ({
    subtitle,
    title,
    description,
    buttonText,
    buttonLink = "#",
    items,
}) => {
    return (
        <section className="w-full bg-transparent py-16 md:py-24">
            <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-3 md:gap-8 lg:gap-16">
                {/* Left Content */}
                <div className="flex flex-col items-start justify-center text-center md:col-span-1 md:text-left">
                    <span className="mb-2 text-sm font-medium uppercase tracking-widest bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                        {subtitle}
                    </span>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                        {title}
                    </h2>
                    <p className="mb-6 text-base text-white/70">
                        {description}
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="relative hover:scale-110 duration-300 transition-all cursor-pointer bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/80 animate-pulse hover:animate-none"
                    >
                        <Link href={buttonLink}>
                            {buttonText}
                            <ArrowUpRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>

                {/* Right Content - Grid of Process Cards */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:col-span-2">
                    {items.map((item, index) => (
                        <ProcessCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

import * as React from "react";
import { cn } from "@/lib/utils";

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
    imageUrl: string;
    imageAlt: string;
    logo?: React.ReactNode;
    title: string;
    status: string;
    overview: string;
    features: string;
    techStack: string;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
    (
        {
            className,
            imageUrl,
            imageAlt,
            logo,
            title,
            status,
            overview,
            features,
            techStack,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "group relative w-full max-w-sm overflow-hidden rounded-xl border border-white/10 bg-black shadow-lg",
                    "transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2",
                    className
                )}
                {...props}
            >
                {/* Background Image with Zoom Effect on Hover */}
                <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                {/* Content Container */}
                <div className="relative flex h-full min-h-[500px] flex-col justify-between p-6 text-white">
                    {/* Top Section: Logo & Status */}
                    <div className="flex h-40 items-start justify-between">
                        {logo && (
                            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-indigo-500/50 bg-black/30 backdrop-blur-sm">
                                {logo}
                            </div>
                        )}
                        <div className="px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/50 backdrop-blur-sm">
                            <span className="text-xs font-medium text-amber-400">{status}</span>
                        </div>
                    </div>

                    {/* Middle Section: Details (slides up on hover) */}
                    <div className="space-y-4 transition-transform duration-500 ease-in-out group-hover:-translate-y-8">
                        <div>
                            <h3 className="text-3xl font-bold text-white">{title}</h3>
                            <p className="text-sm text-white/80 mt-2">{overview}</p>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <h4 className="font-semibold text-indigo-400 text-sm">FEATURES</h4>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    {features}
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-violet-400 text-sm">TECH STACK</h4>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    {techStack}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);
ProjectCard.displayName = "ProjectCard";

export { ProjectCard };

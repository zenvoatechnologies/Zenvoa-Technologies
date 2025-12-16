"use client";

import { useEffect } from "react";
import Link from "next/link";
import { renderCanvas } from "@/components/ui/canvas";
import { ArrowRight, Plus, Shapes } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroCanvas() {
    useEffect(() => {
        renderCanvas();
    }, []);

    return (
        <section id="home" className="relative min-h-screen w-full bg-[#030303] overflow-hidden">
            <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 text-center">


                <div className="mb-10 mt-4 md:mt-6">
                    <div className="px-2">
                        <div className="relative mx-auto h-full max-w-5xl border border-white/10 p-6 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] md:px-12 md:py-16 bg-white/[0.02] rounded-3xl backdrop-blur-sm">
                            <h1 className="flex select-none flex-col px-3 py-2 text-center text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                                <Plus strokeWidth={3} className="absolute -left-3 -top-3 h-6 w-6 text-white/20" />
                                <Plus strokeWidth={3} className="absolute -bottom-3 -left-3 h-6 w-6 text-white/20" />
                                <Plus strokeWidth={3} className="absolute -right-3 -top-3 h-6 w-6 text-white/20" />
                                <Plus strokeWidth={3} className="absolute -bottom-3 -right-3 h-6 w-6 text-white/20" />
                                <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                                    Innovating the Future
                                </span>
                                <span className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
                                    of Tech
                                </span>
                            </h1>
                            <div className="mt-6 flex items-center justify-center gap-2">
                                <span className="relative flex h-2 w-2 items-center justify-center">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                                </span>
                                <p className="text-xs text-green-500 font-medium tracking-wide">Ready for new projects</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="mt-8 text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
                        We build <span className="text-white font-bold">digital experiences</span> that matter.
                    </h2>

                    <p className="mx-auto mb-12 mt-4 max-w-2xl px-6 text-sm text-white/40 sm:px-6 md:text-lg">
                        Zenvoa Technologies specializes in creating cutting-edge software solutions tailored to elevate your business.
                    </p>

                    <div className="flex justify-center gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="rounded-full h-12 px-8 text-base">
                                Start Project
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white">
                                Our Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <canvas
                className="pointer-events-none absolute inset-0 mx-auto opacity-40 mix-blend-screen"
                id="canvas"
            ></canvas>
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none z-10" />
        </section>
    );
}

"use client";

import { RevealImageList } from "../ui/reveal-images";

export default function Services() {
    return (
        <section id="services" className="container py-24 md:py-32">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Our Expertise
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                    Comprehensive digital solutions for modern businesses.
                </p>
            </div>
            <div className="flex justify-center items-center">
                <RevealImageList />
            </div>
        </section>
    );
}

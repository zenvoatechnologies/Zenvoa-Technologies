"use client";

import { ServiceCarousel, demoServices } from "@/components/ui/services-card";

export default function ServicesPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            <div className="text-left w-full max-w-6xl mb-12 pt-24">
                <h1 className="text-6xl font-bold tracking-tighter">Services.</h1>
            </div>
            <ServiceCarousel services={demoServices} />
        </div>
    );
}

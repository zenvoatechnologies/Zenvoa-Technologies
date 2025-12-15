"use client";

import type { Metadata } from "next";
import { ContactSection } from "@/components/ui/contact";
import { LocationMap } from "@/components/ui/expand-map";
import toast from "react-hot-toast";
import { useState } from "react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFormSubmit = async (data: any) => {
        setIsSubmitting(true);

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

            const response = await fetch(`${apiUrl}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                toast.success(result.message || 'Thank you for contacting us! We will get back to you soon.');
                return true; // Signal success to form component
            } else {
                toast.error(result.message || 'Something went wrong. Please try again.');
                return false;
            }
        } catch (error) {
            console.error('Contact form error:', error);
            toast.error('Failed to send message. Please check your connection and try again.');
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative">
            {/* Main Contact Form */}
            <ContactSection
                title="We can turn your dream project into reality"
                mainMessage="Let's talk! 👋"
                contactEmail="zenvoatechnologies@gmail.com"
                onSubmit={handleFormSubmit}
            />

            {/* Location Map Section */}
            <div className="relative py-20 flex items-center justify-center">
                <div className="flex flex-col items-center gap-8">
                    <p className="text-white/60 text-xs font-medium tracking-[0.2em] uppercase">Our Location</p>
                    <LocationMap
                        location="Karur, Tamil Nadu"
                        coordinates="10.9601° N, 78.0766° E"
                    />
                </div>
            </div>
        </div>
    );
}

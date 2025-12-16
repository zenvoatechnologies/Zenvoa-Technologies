import type { Metadata } from "next";
import AboutPage from "@/components/ui/about-page";

export const metadata: Metadata = {
    title: "About Us - Zenvoa Technologies",
    description: "Learn more about our mission to drive innovation.",
};


export default function About() {
    return <AboutPage />;
}

"use client";

import { motion } from "framer-motion";
import { PageHeading } from "@/components/ui/page-heading";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen py-24 md:py-32">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <PageHeading className="mb-4">
                        Privacy <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Policy</span>
                    </PageHeading>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-white/70 md:text-lg"
                    >
                        Last updated: December 16, 2025
                    </motion.p>
                </div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="prose prose-invert prose-indigo max-w-none"
                >
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                            <p className="text-white/70 leading-relaxed">
                                At Zenvoa Technologies, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                            <p className="text-white/70 leading-relaxed mb-3">
                                We may collect the following types of information:
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-4 mb-2">2.1 Personal Information</h3>
                            <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                                <li>Name and contact information (email address, phone number)</li>
                                <li>Company name and business information</li>
                                <li>Project requirements and specifications</li>
                                <li>Communication preferences</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-white mt-4 mb-2">2.2 Technical Information</h3>
                            <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                                <li>IP address and browser type</li>
                                <li>Device information and operating system</li>
                                <li>Pages visited and time spent on our website</li>
                                <li>Referring website addresses</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                            <p className="text-white/70 leading-relaxed mb-3">
                                We use the collected information for the following purposes:
                            </p>
                            <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                                <li>To provide and maintain our services</li>
                                <li>To respond to your inquiries and communicate with you</li>
                                <li>To process project requests and deliver solutions</li>
                                <li>To improve our website and services</li>
                                <li>To send promotional materials and updates (with your consent)</li>
                                <li>To analyze usage patterns and optimize user experience</li>
                                <li>To comply with legal obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
                            <p className="text-white/70 leading-relaxed mb-3">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                                <li><strong className="text-white">Service Providers:</strong> With trusted third-party service providers who assist in operating our website and conducting our business</li>
                                <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                                <li><strong className="text-white">Business Transfers:</strong> In connection with any merger, sale, or acquisition of our business</li>
                                <li><strong className="text-white">With Your Consent:</strong> When you have given explicit permission</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                            <p className="text-white/70 leading-relaxed">
                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security assessments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking Technologies</h2>
                            <p className="text-white/70 leading-relaxed mb-3">
                                We use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences. Types of cookies we use:
                            </p>
                            <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                                <li><strong className="text-white">Essential Cookies:</strong> Required for website functionality</li>
                                <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                                <li><strong className="text-white">Preference Cookies:</strong> Remember your settings and preferences</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
                            <p className="text-white/70 leading-relaxed">
                                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. When your information is no longer needed, we will securely delete or anonymize it.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">8. Your Rights</h2>
                            <p className="text-white/70 leading-relaxed mb-3">
                                You have the following rights regarding your personal information:
                            </p>
                            <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                                <li><strong className="text-white">Access:</strong> Request access to your personal information</li>
                                <li><strong className="text-white">Correction:</strong> Request correction of inaccurate information</li>
                                <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information</li>
                                <li><strong className="text-white">Objection:</strong> Object to processing of your information</li>
                                <li><strong className="text-white">Portability:</strong> Request transfer of your data to another service</li>
                                <li><strong className="text-white">Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
                            </ul>
                            <p className="text-white/70 leading-relaxed mt-3">
                                To exercise these rights, please contact us using the information provided below.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Links</h2>
                            <p className="text-white/70 leading-relaxed">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">10. Children's Privacy</h2>
                            <p className="text-white/70 leading-relaxed">
                                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">11. International Data Transfers</h2>
                            <p className="text-white/70 leading-relaxed">
                                Your information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Privacy Policy</h2>
                            <p className="text-white/70 leading-relaxed">
                                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on this page with a new "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
                            <p className="text-white/70 leading-relaxed mb-3">
                                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                            </p>
                            <div className="text-white/70 space-y-2 ml-4">
                                <p><strong className="text-white">Email:</strong> zenvoatechnologies@gmail.com</p>
                                <p><strong className="text-white">Phone:</strong> +91 93639 78578 / +91 79047 29229</p>
                                <p><strong className="text-white">Location:</strong> Karur, Tamil Nadu, India</p>
                            </div>
                        </section>

                        <section className="border-t border-white/10 pt-6 mt-8">
                            <p className="text-white/60 text-sm italic">
                                By using our website and services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}

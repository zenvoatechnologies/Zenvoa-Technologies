"use client";

import { motion } from "framer-motion";
import { PageHeading } from "@/components/ui/page-heading";

export default function TermsPage() {
    return (
        <main className="min-h-screen py-24 md:py-32">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <PageHeading className="mb-4">
                        Terms of <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Service</span>
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
                            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                            <p className="text-white/70 leading-relaxed">
                                By accessing and using Zenvoa Technologies' services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Services Description</h2>
                            <p className="text-white/70 leading-relaxed mb-3">
                                Zenvoa Technologies provides digital solutions including but not limited to:
                            </p>
                            <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                                <li>Web Development and Design</li>
                                <li>Mobile Application Development</li>
                                <li>E-Commerce Solutions</li>
                                <li>Brand Identity and Design</li>
                                <li>3D & Animation Services</li>
                                <li>Social Media Marketing</li>
                                <li>Brand Strategy & Consulting</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
                            <p className="text-white/70 leading-relaxed mb-3">
                                When using our services, you agree to:
                            </p>
                            <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                                <li>Provide accurate and complete information</li>
                                <li>Maintain the confidentiality of your account credentials</li>
                                <li>Notify us immediately of any unauthorized use of your account</li>
                                <li>Use our services in compliance with all applicable laws and regulations</li>
                                <li>Not engage in any activity that interferes with or disrupts our services</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property Rights</h2>
                            <p className="text-white/70 leading-relaxed">
                                All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of Zenvoa Technologies and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Project Deliverables</h2>
                            <p className="text-white/70 leading-relaxed mb-3">
                                For custom development projects:
                            </p>
                            <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                                <li>Deliverables will be defined in the project agreement</li>
                                <li>Timelines are estimates and may vary based on project complexity</li>
                                <li>Client feedback and approvals are required at designated milestones</li>
                                <li>Final delivery is subject to full payment of agreed fees</li>
                                <li>Source code ownership transfers upon full payment, unless otherwise specified</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Payment Terms</h2>
                            <p className="text-white/70 leading-relaxed mb-3">
                                Payment terms are as follows:
                            </p>
                            <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                                <li>Payment schedules will be outlined in individual project agreements</li>
                                <li>Invoices are due within the specified payment period</li>
                                <li>Late payments may incur additional fees</li>
                                <li>Work may be suspended for overdue payments</li>
                                <li>All fees are non-refundable unless otherwise stated in writing</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Confidentiality</h2>
                            <p className="text-white/70 leading-relaxed">
                                We respect the confidentiality of your information. Any confidential information shared during the course of our engagement will be protected and not disclosed to third parties without your consent, except as required by law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                            <p className="text-white/70 leading-relaxed">
                                Zenvoa Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. Our total liability shall not exceed the amount paid by you for the specific service in question.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">9. Warranty Disclaimer</h2>
                            <p className="text-white/70 leading-relaxed">
                                Our services are provided "as is" without warranty of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, timely, secure, or error-free.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
                            <p className="text-white/70 leading-relaxed">
                                Either party may terminate services with written notice. Upon termination, you must pay for all services rendered up to the termination date. We reserve the right to terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these Terms of Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
                            <p className="text-white/70 leading-relaxed">
                                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page. Your continued use of our services after such modifications constitutes your acceptance of the updated terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law</h2>
                            <p className="text-white/70 leading-relaxed">
                                These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in India.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
                            <p className="text-white/70 leading-relaxed mb-3">
                                If you have any questions about these Terms of Service, please contact us:
                            </p>
                            <div className="text-white/70 space-y-2 ml-4">
                                <p><strong className="text-white">Email:</strong> zenvoatechnologies@gmail.com</p>
                                <p><strong className="text-white">Phone:</strong> +91 93639 78578 / +91 79047 29229</p>
                                <p><strong className="text-white">Location:</strong> India</p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}

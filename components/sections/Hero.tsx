"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "../ui/button"

const Hero = () => {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background py-20 text-center">
            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <h1 className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-5xl font-bold tracking-tighter text-transparent sm:text-7xl md:text-8xl lg:text-9xl">
                        Zenvoa <br className="hidden sm:block" /> Technologies
                    </h1>
                    <p className="mx-auto max-w-[42rem] text-lg text-muted-foreground sm:text-xl md:text-2xl">
                        Empowering businesses with cutting-edge digital solutions. We transform
                        ideas into reality through innovation and design.
                    </p>
                </motion.div >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col gap-4 min-[400px]:flex-row"
                >
                    <Link href="/contact">
                        <Button size="lg" className="h-12 px-8 text-lg">
                            Get Started
                        </Button>
                    </Link>
                    <Link href="/projects">
                        <Button size="lg" variant="outline" className="h-12 px-8 text-lg">
                            View Work
                        </Button>
                    </Link>
                </motion.div>
            </div >

            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        </section >
    );
}

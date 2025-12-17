import { ShaderAnimation } from "@/components/ui/shader-animation";
import { BlurFade } from "@/components/ui/blur-fade";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import { Circle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Shader Background - extends to absolute top */}
      <div className="relative w-full h-screen overflow-hidden -mt-32">
        {/* Shader Animation Background - starts from absolute top */}
        <ShaderAnimation />

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pt-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge with BlurFade */}
              <BlurFade delay={0.1} inView>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12 backdrop-blur-sm">
                  <Circle className="h-2 w-2 fill-rose-500/80" />
                  <span className="text-sm text-white/60 tracking-wide">
                    Zenvoa Technologies
                  </span>
                </div>
              </BlurFade>

              {/* Title with BlurFade */}
              <BlurFade delay={0.2} inView>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                    Innovating the Future
                  </span>
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                    of Tech
                  </span>
                </h1>
              </BlurFade>

              {/* Description with BlurFade */}
              <BlurFade delay={0.3} inView>
                <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                  Crafting exceptional digital experiences through
                  innovative design and cutting-edge technology.
                </p>
              </BlurFade>

              {/* Animated Contact Button with BlurFade */}
              <BlurFade delay={0.4} inView>
                <Link href="/contact">
                  <button className="group relative inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-rose-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] active:scale-95">
                    {/* Animated gradient overlay */}
                    <span className="absolute inset-0 bg-gradient-to-r from-rose-600 via-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

                    {/* Button content */}
                    <span className="relative z-10">Start Your Project</span>
                    <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

                    {/* Shine effect */}
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                  </button>
                </Link>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>

      <Services />
      <Process />
    </main>
  );
}





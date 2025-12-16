import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroGeometric
        badge="Zenvoa Technologies"
        title1="Innovating the Future"
        title2="of Tech"
      />
      <Services />
      <Process />
    </main>
  );
}

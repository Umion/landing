import MiniNavbar from "@/components/mini-navbar/MiniNavbar";
import { HeroGeometric } from "@/components/shape-background/ShapeBackground";
import Image from "next/image";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Image
        src="/logo.svg"
        width={229}
        height={60}
        className="absolute left-8 top-6 z-10"
        alt="logo"
      />
      <MiniNavbar />
      <div className="min-h-screen bg-[url('/main.jpg')] flex justify-center items-center bg-cover bg-center">
        <HeroGeometric />

        <div className="relative pt-20 max-w-[55%] container mx-auto  px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full  border border-white/[0.08] mb-8 md:mb-12">
              <Circle className="h-2 w-2 fill-rose-500/80" />
              <span className="text-sm text-white/60 tracking-wide">
                Real Estate Company
              </span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 ">
                  Your dream home in Miami starts here
                </span>
              </h1>
            </div>

            <div>
              <p className="text-base sm:text-lg md:text-xl text-white/40 mb-5 leading-relaxed font-light tracking-wide max-w-[612px] mx-auto px-4">
                Luxury properties. Smart investments. Local expertise you can
                trust.
              </p>
            </div>
            {/* <button className="relative bottom-[-20px] text-xl font-semibold  md:px-12 md:py-3 cursor-pointer sm:px-3  sm:text-sm border border-[#333] bg-gradient-to-b from-[#F0BB2B] to-[#C67E15] text-white rounded-full hover:border-white/50 hover:text-white transition-colors duration-200 w-full sm:w-auto ">
              Get a free consultation
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

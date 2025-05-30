import MiniNavbar from "@/components/mini-navbar/MiniNavbar";
import { HeroGeometric } from "@/components/shape-hero/ShapeHero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <MiniNavbar />
      <div className="min-h-screen bg-[url('/main.jpg')] flex justify-center items-center bg-cover bg-center">
        <div className="w-[70%]">
          <HeroGeometric
            badge="Real Estate Company"
            title2="Your dream home in Miami starts here"
          />
        </div>
      </div>
    </div>
  );
}

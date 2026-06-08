
import { HeroSection } from "@/sections/HeroSection";
import  Navbar  from "@/sections/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
        <Navbar/>
        <HeroSection/>
   </main>
  );
}

import HeroSection from "@/components/HeroSection";
import MainHeader from "@/components/MainHeader";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-background min-h-screen w-full py-8 px-20">
      <Navbar/>
      <MainHeader/>
      <HeroSection/>
    </div>
  )
}

import Image from "next/image";
import { Playwrite_US_Modern } from "next/font/google";

const playwrite = Playwrite_US_Modern({
  weight: "200",
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <section className="mainGridContainer my-10">
      <div className="bg-[#1a1a1a] rounded-2xl shadow-md shadow-black grid1 flex justify-between text-white py-7 px-10 gap-16">
        <div className="flex flex-col items-end">
          <div>
            <h1 className="font-concert text-7xl z-10 before:content-[''] px-3 before:bg-[#FF4C29] before:absolute relative before:h-[40%] before:w-full before:bottom-0 before:blur-custom before:rounded-full before:z-[-1] before:left-0 w-fit">Fit to code,</h1>
            <h1 className="font-concert text-7xl z-10 before:content-[''] px-3 before:bg-[#FF4C29] before:absolute relative before:h-[40%] before:w-full before:bottom-0 before:blur-custom before:rounded-full before:z-[-1] before:left-0 w-fit"> Built to Lead.</h1>
          </div>
          <p className="font-playwrite text-xs w-fit my-3">
            Blending technology with a problem-solving mindset,
            <br /> Driven by curiosity and continuous growth,
            <br /> Balancing strength and intellect in every pursuit,
            <br /> Always striving to build and improve.
          </p>
        </div>
        <div className="relative group flex-1 top-[-0.5rem]">
          <Image src="/profile3.jpg" alt="profile 1" height={1000} width={1000} className="rounded-full border-[#F8D210] border-solid border-[6px] h-44 w-44 absolute z-10"/>
          <Image src="/profile4.jpg" alt="profile 2" height={1000} width={1000} className="rounded-full border-[#00A8E8] border-solid border-[6px] h-44 w-44 absolute top-20 left-28"/>
          <Image src="/heart.png" alt="heart" height={65} width={65} className="absolute top-[9rem] left-20 z-10 bg-[#121212] rounded-full p-2 border-[#FF4C29] border-[3px]"/>
        </div>
      </div>
      <div className="bg-[#1a1a1a] rounded-2xl shadow-md shadow-black"></div>
      <div className="bg-[#1a1a1a] rounded-2xl shadow-md shadow-black"></div>
      <div className="bg-[#1a1a1a] rounded-2xl shadow-md shadow-black grid4"></div>
    </section>
  );
}

import Image from "next/image";
import { Playwrite_US_Modern } from "next/font/google";

const playwrite = Playwrite_US_Modern({
  weight: "200",
  subsets: ["latin"],
});

export default function MainHeader() {
  return (
    <section className="text-white items-end flex flex-col w-fit mx-auto my-4">
      <div className="relative group">
        <h1
          className="font-concert text-7xl w-fit z-10 px-3 before:content-[''] before:bg-[#F8D210] before:absolute relative before:h-1/2 before:w-full before:bottom-[-0.4rem] before:blur-custom before:rounded-full before:z-[-1] before:left-0"
          style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.40)" }}
        >
          Full Stack Developer
        </h1>
      </div>
      <div className=" w-fit my-4 group">
        <a href="#Contact" className="flex gap-1 items-center justify-center group-hover:animate-bounce group-active:opacity-70 transtion-all duration-300 group-active:animate-none">
            <h5 className="font-playwrite w-fit text-xs">GET IN TOUCH</h5>
            <Image
              src={"/Right Arrow.png"}
              width={100}
              height={100}
              className="h-6 w-6 transition-all duration-300"
              alt="right arrow"
            />
        </a>
        <hr className="group-active:opacity-70"/>
      </div>
    </section>
  );
}

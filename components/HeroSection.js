import Image from "next/image";
import { Playwrite_US_Modern } from "next/font/google";

const playwrite = Playwrite_US_Modern({
  weight: "200",
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <section className="mainGridContainer my-10">
      <div className="bg-[#1a1a1a] rounded-2xl shadow-md shadow-black grid1 flex justify-between text-white py-7 px-10 gap-16 items-center">
        <div className="flex flex-col items-end">
          <div>
            <h1 className="font-concert text-7xl z-10 before:content-[''] px-3 before:bg-[#FF4C29] before:absolute relative before:h-[40%] before:w-full before:bottom-0 before:blur-custom before:rounded-full before:z-[-1] before:left-0 w-fit">
              Fit to code,
            </h1>
            <h1 className="font-concert text-7xl z-10 before:content-[''] px-3 before:bg-[#FF4C29] before:absolute relative before:h-[40%] before:w-full before:bottom-0 before:blur-custom before:rounded-full before:z-[-1] before:left-0 w-fit">
              {" "}
              Built to Lead.
            </h1>
          </div>
          <p className="font-playwrite text-xs w-fit my-3">
            Blending technology with a problem-solving mindset,
            <br /> Driven by curiosity and continuous growth,
            <br /> Balancing strength and intellect in every pursuit,
            <br /> Always striving to build and improve.
          </p>
        </div>
        <div className="relative group flex-1 top-[-8.5rem] left-5">
          <Image
            src="/profile3.jpg"
            alt="profile 1"
            height={1000}
            width={1000}
            className="rounded-full border-[#F8D210] border-solid border-[6px] h-48 w-48 absolute z-10"
          />
          <Image
            src="/profile4.jpg"
            alt="profile 2"
            height={1000}
            width={1000}
            className="rounded-full border-[#00A8E8] border-solid border-[6px] h-48 w-48 absolute top-20 left-28"
          />
          <Image
            src="/heart.png"
            alt="heart"
            height={75}
            width={75}
            className="absolute top-[9.8rem] left-20 z-10 bg-[#121212] rounded-full p-2 border-[#FF4C29] border-[3px]"
          />
        </div>
      </div>
      <div className="bg-[#1a1a1a] rounded-2xl shadow-md shadow-black">
        <div className="flex flex-wrap gap-5 py-4 px-6 justify-center">
          <Image
            src={"/nextjs.png"}
            alt="tech-stack"
            width={100}
            height={100}
            className="h-[5.6rem] w-[5.6rem]"
          />
          <Image
            src={"/python.png"}
            alt="tech-stack"
            width={100}
            height={100}
            className="h-[5.6rem] w-[5.6rem] mt-12"
          />
          <Image
            src={"/react-native.png"}
            alt="tech-stack"
            width={100}
            height={100}
            className="h-[5.6rem] w-[5.6rem]"
          />
          <Image
            src={"/vs-code.png"}
            alt="tech-stack"
            width={100}
            height={100}
            className="h-[5.6rem] w-[5.6rem]"
          />
          <Image
            src={"/github.png"}
            alt="tech-stack"
            width={100}
            height={100}
            className="h-[5.6rem] w-[5.6rem] mt-12"
          />
          <Image
            src={"/c++.png"}
            alt="tech-stack"
            width={100}
            height={100}
            className="h-[5.6rem] w-[5.6rem]"
          />
        </div>
      </div>
      <div className="bg-[#1a1a1a] rounded-2xl shadow-md shadow-black justify-center items-center flex overflow-hidden relative">
        <Image
          src={"/road.png"}
          alt="road-map"
          height={80}
          width={600}
          className="-rotate-12"
        />
        <div className="absolute flex-col top-12 left-2">
          <h4 className="text-white font-playwrite">
            Stared journey as a web developer
          </h4>
          <div className="relative left-[50%]">
            <div className="h-16 w-[0.1rem] bg-[#808080] before:content-[''] before:absolute before:h-2 before:w-2 before:rounded-full before:bg-[#808080] before:bottom-0 before:left-[-0.18rem]"></div>
          </div>
        </div>
        <div className="absolute flex-col justify-center -bottom-8">
          <h4 className="text-white font-playwrite">
            Worked on freelance projects
          </h4>
          <div className="relative left-[50%] top-[-5rem]">
            <div className="h-14 w-[0.1rem] bg-[#808080] before:content-[''] before:absolute before:h-2 before:w-2 before:rounded-full before:bg-[#808080] before:top-0 before:left-[-0.18rem]"></div>
          </div>
        </div>
        <div className="absolute flex-col justify-center right-6 top-4">
          <h4 className="text-white font-playwrite">
            Became CTO at RYM Grenergy
          </h4>
          <div className="relative left-[50%]">
            <div className="h-16 w-[0.1rem] bg-[#808080] before:content-[''] before:absolute before:h-2 before:w-2 before:rounded-full before:bg-[#808080] before:bottom-0 before:left-[-0.18rem]"></div>
          </div>
        </div>
      </div>
      <div className="bg-[#1a1a1a] rounded-2xl shadow-md shadow-black grid4 flex px-5 items-center justify-center">
        <div>
          <Image
            src={"/sticker1.png"}
            alt="sticker1"
            height={300}
            width={300}
          />
          <Image
            src={"/sticker2.png"}
            alt="sticker1"
            height={130}
            width={130}
            className="mx-16 my-5"
          />
        </div>
        <Image
          src={"/sticker3.png"}
          alt="sticker1"
          height={180}
          width={250}
          className="m-4 mx-0"
        />
        <Image
          src={"/sticker4.png"}
          alt="sticker1"
          height={100}
          width={100}
          className="h-32 w-32 translate-y-9"
        />
        <Image
          src={"/sticker5.png"}
          alt="sticker1"
          height={100}
          width={100}
          className="h-32 w-32 -translate-y-14"
        />{" "}
      </div>
    </section>
  );
}

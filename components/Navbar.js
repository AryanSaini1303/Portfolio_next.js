import Image from "next/image";

export default function Navbar() {
  return (
    <section className="bg-foreground flex justify-between w-1/2 text-white mx-auto items-center p-2 rounded-full font-concert shadow-md shadow-black">
      <div className="h-10 w-10 bg-green-500 rounded-full shadow-inner"><Image src="/panda.png" height={100} width={100} alt="panda"/>
      </div>
      <ul className="flex justify-between w-1/2 gap-6">
        <li className="relative group active:opacity-50 transition-all duration-150">
          <a href="#Achievements">
            Achievements{" "}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full origin-center"></div>
          </a>
        </li>
        <li className="relative group active:opacity-50 transition-all duration-150">
          <a href="#Testimonials">
            Testimonials{" "}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full origin-center"></div>
          </a>
        </li>
        <li className="relative group active:opacity-50 transition-all duration-150">
          <a href="#Experience">
            Experience{" "}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full origin-center"></div>
          </a>
        </li>
        <li className="relative group active:opacity-50 transition-all duration-150">
          <a href="#Contact">
            Contact{" "}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full origin-center"></div>
          </a>
        </li>
      </ul>
      <a href="/Resume.pdf" download className="rounded-full">
        <h2 className="bg-black py-2 px-4 rounded-full opacity-70 hover:opacity-100 active:opacity-50 transition-all">
          Resume
        </h2>
      </a>
    </section>
  );
}

import { NavBar } from "@/components/common/index";
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full h-full absolute text-white">
      <Image
        src='/980238.png'
        fill
        alt="Picture of a keyboard"
      />
      <div className="px-28 z-10 w-full absolute">
        <NavBar />
        <div className="w-1/3 py-28">
          <p className="text-cyan-400 mb-6">Welcome to the right place</p>
          <p className="text-3xl font-bold">Write your own story with the best experience on our highly customizable mechanical keyboards</p>
          <p className="pt-6 text-md font-serif">Our company has a long history of serving the most demanding clients and always providing the experience that your hands deserve to get the most out of it regardless of your schedule.</p>
        </div>
      </div>
      <div className="w-full h-1/3 z-0 bg-gradient-to-b from-gray-900 absolute"></div>
      <div className="w-full h-full z-0 bg-gradient-to-r from-gray-950 absolute"></div>
    </div>
  );
}

import { NavBar } from "@/components/common/index";

export default function Home() {
  return (
    <div className="w-full h-full absolute text-white">
      <div className="px-28 z-10 w-full absolute">
        <NavBar />
        <div className="w-1/3 py-28">
          <p className="text-cyan-600">Welcome to the right place</p>
          <p className="text-3xl font-bold">Write your own story with the best experience with our highly customizable mechanical keyboards</p>
          <p className="pt-6 text-md font-serif">Our company has a long history of serving the most demanding clients and always providing the experience that your hands deserve to get the most out of it regardless of your schedule.</p>
        </div>
      </div>
      <div className="w-1/2 h-full z-0 bg-gradient-to-r from-gray-800 absolute"></div>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/980238.png" fill alt="Picture of a keyboard" />
      <div className="w-full h-1/3 z-0 bg-gradient-to-b from-gray-900 absolute"></div>
      <div className="w-full h-screen z-0 bg-gradient-to-r from-gray-950 absolute"></div>
      <div className="h-screen relative md:px-28 sm:px-2">
        <div className="z-10 w-auto absolute text-white">
          <div className="md:w-1/3 sm:w-auto sm:py-72 md:py-52 sm:px-10 md:px-0">
            <p className="text-cyan-400 mb-6">Welcome to the right place</p>
            <p className="text-3xl font-bold">
              Write your own story with the best experience on our highly
              customizable mechanical keyboards
            </p>
            <p className="pt-6 text-md font-serif">
              Our company has a long history of serving the most demanding
              clients and always providing the experience that your hands
              deserve to get the most out of it regardless of your schedule.
            </p>
          </div>
        </div>
      </div>
      <div className="h-1/3 px-28 bg-slate-400">
        <div className="w-auto h-auto">
          <p>This place counts</p>
        </div>
      </div>
    </div>
  );
}

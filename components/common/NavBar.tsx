import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <div className="flex justify-between py-2 fixed z-40 w-full text-white md:px-28 sm:px-2">
      <div className="flex justify-between w-1/2">
        <h2 className="md:text-2xl font-bold sm:text-3xl">LogoTowapo</h2>
        <div className="gap-3 flex sm:gap-1">
          <Button variant={"ghost"} className="rounded-xl md:text-base sm:text-xl sm:px-2 md:px-4">
            Home
          </Button>
          <Button variant={"ghost"} className="rounded-xl md:text-base sm:text-xl sm:px-2 md:px-4">
            Products
          </Button>
          <Button variant={"ghost"} className="rounded-xl md:text-base sm:text-xl sm:px-2 md:px-4">
            Contact
          </Button>
        </div>
      </div>
      <div className="flex gap-3">
        <Button variant={"ghost"} className="rounded-xl md:text-base sm:text-xl sm:px-2 md:px-4">
          Login
        </Button>
        <Button className="rounded-2xl bg-cyan-400 text-gray-900 hover:text-white sm:px-2 md:px-4 hover:bg-blue-600 md:text-base sm:text-xl">
          Sign Up
        </Button>
      </div>
    </div>
  );
}

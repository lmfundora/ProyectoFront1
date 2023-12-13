import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <div className="flex justify-between py-2">
      <div className="flex justify-between w-1/2">
        <h2 className="text-2xl font-bold">LogoTowapo</h2>
        <div className="gap-3 flex">
          <Button variant={'ghost'} className="rounded-xl">Home</Button>
          <Button variant={'ghost'} className="rounded-xl">Products</Button>
          <Button variant={'ghost'} className="rounded-xl">Contact</Button>
        </div>
      </div>
      <div className="flex gap-3">
        <Button variant={'ghost'} className="rounded-xl">Login</Button>
        <Button className="rounded-2xl bg-cyan-400 text-gray-900 hover:text-white hover:bg-blue-600">Sign Up</Button>
      </div>
    </div>
  );
}

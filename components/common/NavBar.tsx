import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <div className="flex justify-between py-2">
      <div className="flex justify-between w-1/2">
        <h2 className="text-2xl font-bold">LogoTowapo</h2>
        <div className="gap-3 flex">
          <Button variant={'ghost'}>Home</Button>
          <Button variant={'ghost'}>Products</Button>
          <Button variant={'ghost'}>Contact</Button>
        </div>
      </div>
      <div className="flex gap-3">
        <Button variant={'ghost'}>Login</Button>
        <Button className="rounded-2xl bg-cyan-600">Sign Up</Button>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import { links } from "../../constants/traverselink";
import Image from "next/image";
import { usePathname } from "next/navigation"; 
import { cn } from "../lib/utils";
export const Sidebar = () => {
  const pathname = usePathname()
  return (
    <section className="sticky top-0 left-0   p-6 pt-28 text-white flex flex-col h-screen w-fit bg-dark-1 justify-between max-sm:hidden lg:w-[260px]">
      <div className="flex flex-col gap-6">
        {links.map((link:any)=>{
          const isactive = (pathname === link.route)
          console.log(pathname,"   ",isactive)
          return (
            <Link key={link.label} className={cn("flex gap-4 p-4 items-center justify-start rounded-lg",{
              "bg-blue-600":isactive
            })} href={link.route}>
              <Image 
                src = {link.imgUrl}
                alt={link.label}
                height={24}
                width={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">{link.label}</p>
            </Link>
          )
        })}
      </div>
    </section>
  );
};

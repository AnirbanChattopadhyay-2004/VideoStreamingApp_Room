"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter} from "./ui/sheet"
import { links } from "../../constants/traverselink";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import { useState } from "react";

export const MobileNavigation = () => {
  const pathname = usePathname()
  return (   <section className="bg-dark-1 md:hidden max-w-[264px]">
        <Sheet>
        <SheetTrigger asChild >
            <Image
                src = "./icons/hamburger.svg"
                alt="Hamburger"
                height={32}
                width={32}
                className="cursor-pointer"
            />
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-dark-1 border-black">
            <Link href={"/"} className="flex justify-start items-center gap-4">
                <Image
                     src = "./icons/logo.svg"
                     alt="Logo"
                     height={32}
                     width={32}
                />
                <p className="font-extrabold text-[24px] text-white">Room</p>
            </Link>
            <section className="flex h-full p-6 pt-28 ">
            <div className="flex flex-col gap-6 w-full ">
                {links.map((link:any)=>{
                const isactive = (pathname === link.route)
                console.log(pathname,"   ",isactive)
                return (
                    <SheetClose asChild>

                    <Link key={link.label} className={cn("flex gap-4 p-4 items-center justify-start rounded-lg",{
                    "bg-blue-600":isactive
                    })} href={link.route}>
                    <Image 
                        src = {link.imgUrl}
                        alt={link.label}
                        height={24}
                        width={24}
                    />
                    <p className="text-lg font-semibold text-white">{link.label}</p>
                    </Link>
                    </SheetClose>
          )
        })}
      </div>
            </section>
        </SheetContent>
        </Sheet>
    </section>
    
      )
    }
    

  
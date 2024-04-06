import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { LuBook, LuGavel } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";

export default function TopBar() {
  return (
    <div className="border-b-2 w-full bg-white h-24 flex items-center justify-between sm:hidden">
      <Link href={"#"} className="cursor-pointer ml-4">
        <Image src={"/LogoIcon.png"} alt="LogoIcon" width={40} height={40} />
      </Link>
      <Sheet>
        <SheetTrigger>
          <div className="block cursor-pointer p-2 mr-4 sm:hidden hover:bg-slate-200 transition-all rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg>
          </div>
        </SheetTrigger>
        <SheetContent>
          <div className="flex items-center mt-5 justify-center flex-col">
            <Link
              href={"/Home"}
              className=" cursor-pointer p-4 w-fit hover:bg-slate-200 rounded-full flex gap-3 font-semibold text-lg"
            >
              <HiOutlineHome className="w-6 h-6" />{" "}
              <span className="">Home</span>
            </Link>
            <Link
              href={"/Feedback"}
              className="cursor-pointer p-4 w-fit hover:bg-slate-200 rounded-full flex gap-3 font-semibold text-lg"
            >
              <VscFeedback className="w-6 h-6" />{" "}
              <span className="">Feedback</span>
            </Link>
            <Link
              href={"/About"}
              className="p-4 w-fit cursor-pointer  hover:bg-slate-200 rounded-full flex gap-3 font-semibold text-lg"
            >
              <BsInfoCircle className="w-6 h-6" />{" "}
              <span className="">About</span>
            </Link>
            <Link
              href={"/Report"}
              className="p-4 cursor-pointer w-fit hover:bg-slate-200 rounded-full flex gap-3 font-semibold text-lg"
            >
              <LuGavel className="w-6 h-6" /> <span className="">Report</span>
            </Link>
            <Link
              href={"/Rules"}
              className="p-4 w-fit cursor-pointer hover:bg-slate-200 rounded-full flex gap-3 font-semibold text-lg"
            >
              <LuBook className="w-6 h-6" />
              <span className="">Rules</span>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

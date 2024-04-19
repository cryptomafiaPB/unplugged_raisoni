"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { LuBook, LuGavel } from "react-icons/lu";
import { MdOutlineCreate } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";

function SideBar() {
  const [body, setBody] = useState("");
  const { toast } = useToast();
  const router = useRouter();

  const requestPost = async () => {
    try {
      if (!body) {
        toast({
          title: "Post cannot be empty!",
          variant: "destructive",
        });
        return;
      }

      const res = await axios.post("/api/newpost", {
        body,
      });
      setBody("");
      toast({
        title: "Your Post was posted successfully",
        description: "Refresh to view your Post",
      });
    } catch (err) {
      console.log(err);
      toast({
        title: "An Error Occured while posting your Post",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      router.push("/");
    }
  };
  return (
    <div className="bg-white border-r-2 fixed z-1 overflow-x-hidden left-0 top-0 hidden sm:flex items-center gap-2 flex-col sm:w-20 h-screen md:w-48 lg:w-80">
      <Link href={"/"} className="logo">
        <Image
          src={"/Logo.png"}
          alt="logo"
          width={150}
          height={150}
          className="hidden md:block"
        />
        <Image
          src={"/LogoIcon.png"}
          alt="LogoIcon"
          width={40}
          height={40}
          className="mt-4 block md:hidden"
        />
      </Link>
      <Link
        href={"/"}
        className="transition-all cursor-pointer p-4 w-fit hover:bg-slate-200 rounded-full flex gap-3 font-semibold text-lg"
      >
        <HiOutlineHome className="w-6 h-6" />
        <span className="hidden md:block">Home</span>
      </Link>
      <Link
        href={"/Feedback"}
        className="cursor-pointer transition-all  p-4 w-fit hover:bg-slate-200 rounded-full flex gap-3 font-semibold text-lg"
      >
        <VscFeedback className="w-6 h-6" />
        <span className="hidden md:block">Feedback</span>
      </Link>
      <Link
        href={"/About"}
        className="p-4 w-fit cursor-pointer transition-all  hover:bg-slate-200 rounded-full flex gap-3 font-semibold text-lg"
      >
        <BsInfoCircle className="w-6 h-6" />
        <span className="hidden md:block">About</span>
      </Link>
      <Link
        href={"/Report"}
        className="p-4 cursor-pointer w-fit transition-all hover:bg-slate-200 rounded-full flex gap-3 font-semibold text-lg"
      >
        <LuGavel className="w-6 h-6" />{" "}
        <span className="hidden md:block">Report</span>
      </Link>
      <Link
        href={"/Rules"}
        className="p-4 w-fit cursor-pointer transition-all hover:bg-slate-200 rounded-full flex gap-3 font-semibold text-lg"
      >
        <LuBook className="w-6 h-6" />
        <span className="hidden md:block">Rules</span>
      </Link>
      <div className="p-4 w-fit cursor-pointer justify-center bg-blue-500 rounded-full flex gap-3 font-semibold text-lg hover:bg-blue-400 transition-all">
        <Dialog>
          <DialogTrigger className="flex gap-3">
            <MdOutlineCreate className="w-6 h-6" style={{ color: "#fff" }} />
            <span className="hidden md:block text-white">Post</span>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px">
            <DialogHeader>Write a Post</DialogHeader>
            <div>
              <Textarea
                value={body}
                placeholder="Whats happening in Raisoni?"
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <DialogFooter>
              <Button
                onClick={() => {
                  requestPost();
                  console.log(body);
                }}
                disabled={!body}
                className="bg-blue-500 disabled:bg-slate-500"
              >
                Post
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default SideBar;

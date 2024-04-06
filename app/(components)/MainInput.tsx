"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiImageAdd, BiVideo } from "react-icons/bi";

function MainInput() {
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const requestPost = async () => {
    try {
      setLoading(true);

      if (!body) {
        toast({
          title: "Post cannot be empty!",
          variant: "destructive",
        });
        return;
      }

      await axios.post("/api/newpost", {
        body,
      });

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
      setLoading(false);
      router.push("/");
    }
  };
  return (
    <div className="w-full h-44 border-b-2 flex">
      <div className="w-16">
        <Image
          src={"/UserIcon.svg"}
          className="m-5"
          alt="UserIcon"
          width={50}
          height={50}
        />
        {/* <PiUserCircleLight className="w-12 h-12 m-4" /> */}
      </div>
      <div className="w-full p-8 lg:w-2/3">
        <Textarea
          placeholder="Whats happening is raisoni?"
          onChange={(e) => {
            setBody(e.target.value);
          }}
          className="font-semibold mb-2"
        />
        <div className="w-full flex mb-2 justify-between items-center">
          <div className="flex items-center gap-4">
            <BiImageAdd
              className="w-10 h-10 rounded cursor-pointer hover:bg-slate-200 p-2"
              onClick={() => {
                toast({
                  description: "Functionality not available yet....",
                });
                console.log("Toast");
              }}
            />

            <BiVideo
              className="w-10 h-10 rounded cursor-pointer hover:bg-slate-200 p-2"
              onClick={() => {
                toast({
                  description: "Functionality not available yet....",
                });
                console.log("Toast");
              }}
            />
          </div>
          <Button
            onClick={() => {
              requestPost();
              console.log(body);
            }}
            disabled={!body}
            aria-disabled={loading}
            className="disabled:bg-slate-500"
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MainInput;

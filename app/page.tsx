"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiImageAdd, BiVideo } from "react-icons/bi";
import SideBar from "./(components)/SideBar";
import TopBar from "./(components)/TopBar";
import MainInput from "./(components)/MainInput";
import Post from "./(components)/Post";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { PostType } from "./api/newpost/route";

export default function Home() {
  const [post, setPost] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const [body, setBody] = useState("");
  const [loadingmain, setLoadingmain] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const res = await axios.get("/api/post");
        setPost(res.data);
        console.log(res);
        setLoading(false);
      } catch (err) {
        toast({
          title: "An Error Occured while fetching prompts",
          description: "Please try again later",
          variant: "destructive",
        });
      }
    };
    getAllPosts();
  }, [toast]);

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

      const res = await axios.post("/api/newpost", {
        body,
      });
      setBody("");
      setPost(res.data);
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
  const reverseMessage = [...post].reverse();

  return (
    <main className="sm:flex">
      <TopBar />
      <SideBar />
      {/* <section className="w-full h-40 border-b-2 flex"> */}
      <section className="w-full flex flex-col">
        {/* <MainInput /> */}

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
              value={body}
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
                      variant: "destructive",
                    });
                    console.log("Toast");
                  }}
                />

                <BiVideo
                  className="w-10 h-10 rounded cursor-pointer hover:bg-slate-200 p-2"
                  onClick={() => {
                    toast({
                      description: "Functionality not available yet....",
                      variant: "destructive",
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
                aria-disabled={loadingmain}
                className="disabled:bg-slate-500"
              >
                Post
              </Button>
            </div>
          </div>
        </div>

        {!loading ? (
          reverseMessage.map((post, index) => <Post key={index} {...post} />)
        ) : (
          <h1>Loading</h1>
        )}
      </section>
    </main>
  );
}

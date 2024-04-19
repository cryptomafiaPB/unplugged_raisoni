"use client";
import { Button } from "@/components/ui/button";
import SideBar from "@/app/(components)/SideBar";
import TopBar from "@/app/(components)/TopBar";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ArrowBigLeft } from "lucide-react";
import Post from "@/app/(components)/Post";
import MainInput from "@/app/(components)/MainInput";
import { BiImageAdd, BiVideo } from "react-icons/bi";
import { Textarea } from "@/components/ui/textarea";

function Comments() {
  const [post, setPost] = useState([]);
  const params = useParams();
  const [comments, setComments] = useState([]);
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [loadingComment, setLoadingComment] = useState(false);
  const [commentLoading, setCommentLoading] = useState(true);
  const [body, setBody] = useState("");
  const getAllComments = async () => {
    try {
      const res = await axios.get(`/api/comment/${params.postid}`);
      setComments(res.data);
      console.log(comments);
      setCommentLoading(false);
    } catch (error) {
      toast({
        title: "An Error Occured while fetching Comments of the post",
        description: "Please try again later",
        variant: "destructive",
      });
    }
  };
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get(`/api/post/${params.postid}`);
        setPost(res.data);
        console.log(post);
        setLoading(false);
      } catch (err) {
        toast({
          title: "An Error Occured while fetching prompts",
          description: "Please try again later",
          variant: "destructive",
        });
      }
    };
    getPosts();
    getAllComments();
  }, []);
  console.log(post, comments);
  const postId = post.id;
  const requestComment = async () => {
    try {
      setLoadingComment(true);

      if (!body) {
        toast({
          title: "Post cannot be empty!",
          variant: "destructive",
        });
        return;
      }

      await axios.post(`/api/comment/${params.postid}`, {
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
      getAllComments();
    }
  };
  const reversedComments = [...comments].reverse();
  return (
    <main className="sm:flex">
      <TopBar />
      <SideBar />
      <section className="w-full flex flex-col sm:ml-20 md:ml-48 lg:ml-80">
        <Link className="w-full" href={"/"}>
          <Button className="m-4">
            <ArrowBigLeft />
          </Button>
        </Link>
        {!loading ? (
          <>
            <div className="flex bg-slate-200   gap-x-4 p-4 md:p-6 border-b border-l hover:bg-slate-100 transition-all">
              <Link href={`/post/${post.id}`} className="flex-shrink-0">
                <span className="AvatarRoot inline-flex items-center justify-center overflow-hidden w-12 h-12 rounded-full bg-slate-900">
                  <Image
                    className="AvatarImage w-100 h-100 object-cover"
                    alt="John Doe"
                    width={48}
                    height={48}
                    src={"/UserIcon.svg"}
                  />
                </span>
                {/* </a> */}
              </Link>
              <div className="flex flex-col flex-1">
                <Link href={`/post/${post.id}`} className="flex">
                  <div className="flex flex-1 gap-x-1 text-sm">
                    <span className="text-slate-900 font-bold">Raisonikar</span>
                    <span className="text-slate-600 font-medium">@GHR</span>·
                    <span className="text-slate-600 font-medium">
                      {postId.substring(20)}
                    </span>
                  </div>
                </Link>
                <Link
                  href={`/post/${post.id}`}
                  className="text-sm text-slate-900 mb-4 m-1"
                >
                  {post.body}
                </Link>
                <div>
                  <ul className="flex gap-x-10 xl:gap-x-14 text-xs text-slate-700 [&amp;_li:first-child]:hidden [&amp;_li:first-child]:lg:flex [&amp;_li]:flex [&amp;_li]:items-center [&amp;_li]:gap-x-2 [&amp;_li:xl]:gap-x-3 ">
                    <li className="flex items-center cursor-pointer gap-2 hover:bg-slate-200 p-1 rounded-full transition-all">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="w-5 h-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                        ></path>
                      </svg>
                      {comments.length}
                    </li>

                    <li
                      onClick={() => {}}
                      className="flex items-center gap-2 cursor-pointer hover:bg-red-200 p-1 rounded-full transition-all"
                    >
                      {/* <Heart isClick={isClick} onClick={() => setClick(!isClick)} /> */}
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="w-5 h-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        ></path>
                      </svg>
                      {post.likes}
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer  hover:bg-slate-200 p-1 rounded-full transition-all">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="w-5 h-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <button
                  className="IconButton hover:bg-slate-200 rounded-full cursor-pointer"
                  aria-label="Customize options"
                  type="button"
                  id="radix-:r12:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
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
                  placeholder="Replay to this post..."
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
                      requestComment();
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
            {!commentLoading
              ? reversedComments.map((post, index) => (
                  <Post className="m-2" key={index} {...post} />
                ))
              : Array.from({ length: 4 }).map((_, index) => (
                  <div className="flex flex-col gap-3" key={index}>
                    <Skeleton className="h-[30px]" />
                    <Skeleton className="h-[20px] w-[250px] bg-slate-300" />
                    <div>
                      <Skeleton className="h-[50px] bg-slate-300" />
                    </div>
                  </div>
                ))}
          </>
        ) : (
          Array.from({ length: 4 }).map((_, index) => (
            <div className="flex flex-col gap-3" key={index}>
              <Skeleton className="h-[30px]" />
              <Skeleton className="h-[20px] w-[250px] bg-slate-300" />
              <div>
                <Skeleton className="h-[50px] bg-slate-300" />
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  );
}

export default Comments;

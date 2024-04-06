"use client";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PostType } from "../api/newpost/route";
import axios from "axios";

function Post({ id, body, likes, createdAt, updatedAt }: PostType) {
  const { toast } = useToast();
  const [like, setLike] = useState(likes);
  const [comment, setComment] = useState();
  const likedPost = async () => {
    try {
      const res = await axios.get(`/api/liked/${id}`);
      setLike(res.data.likes);
      toast({
        description: "Liked the post ❤️",
        variant: "default",
      });
      console.log(res);
    } catch (error) {
      toast({
        title: "An Error Occured while liking the post",
        description: "Please try again later",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="flex gap-x-4 p-4 md:p-6 border-b border-l hover:bg-slate-100 transition-all">
      <div className="flex-shrink-0">
        <a
          className="ImageTrigger inline-flex h-12 w-12 items-center justify-center rounded-full overflow-hidden bg-white"
          href="https://twitter.com/royquilor"
          target="_blank"
          rel="noreferrer noopener"
          data-state="closed"
        >
          <span className="AvatarRoot inline-flex items-center justify-center overflow-hidden w-12 h-12 rounded-full bg-slate-900">
            <Image
              className="AvatarImage w-100 h-100 object-cover"
              alt="John Doe"
              width={48}
              height={48}
              src={"/UserIcon.svg"}
            />
          </span>
        </a>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex">
          <div className="flex flex-1 gap-x-1 text-sm">
            <span className="text-slate-900 font-bold">Raisonikar</span>
            <span className="text-slate-600 font-medium">@GHR</span>·
            <span className="text-slate-600 font-medium">
              {id.substring(20)}
            </span>
          </div>
        </div>
        <div className="text-sm text-slate-900 mb-4">{body}</div>
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
              2
            </li>

            <li
              onClick={() => {
                likedPost();
              }}
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
              {like}
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
  );
}

export default Post;

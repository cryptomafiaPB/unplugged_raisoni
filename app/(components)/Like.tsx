// // "use client";
// import { useToast } from "@/components/ui/use-toast";
// import React, { useState } from "react";
// import { PostType } from "../api/newpost/route";
// import axios from "axios";

// function Like({ id, likes }: PostType) {
//   const { toast } = useToast();
//   const [like, setLike] = useState(likes);
//   const [comment, setComment] = useState();
//   const likedPost = async () => {
//     try {
//       const res = await axios.get(`/api/liked/${id}`);
//       setLike(res.data.likes);
//       toast({
//         description: "Liked the post ❤️",
//         variant: "default",
//       });
//       console.log(res);
//     } catch (error) {
//       toast({
//         title: "An Error Occured while liking the post",
//         description: "Please try again later",
//         variant: "destructive",
//       });
//     }
//   };
//   return (
//     <div
//       onClick={() => {
//         likedPost();
//       }}
//       className="flex items-center gap-2 cursor-pointer hover:bg-red-200 p-1
//     rounded-full transition-all"
//     >
//       <div />
//       {/* <Heart isClick={isClick} onClick={() => setClick(!isClick)} /> */}
//       <svg
//         stroke="currentColor"
//         fill="none"
//         strokeWidth="1.5"
//         viewBox="0 0 24 24"
//         aria-hidden="true"
//         className="w-5 h-5"
//         height="1em"
//         width="1em"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//         ></path>
//       </svg>
//       {like}EDIT
//     </div>
//   );
// }

// export default Like;

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/PrismaDB"

export interface PostType {
    body: string;
    likes: number;
    createdAt: Date;
    updatedAt: Date;
    id: string;
}

export const POST = async (req: Request) => {
    try {

        const { body, likes }: PostType = await req.json()

        const newPost = await prisma.post.create({
            data: {
                body,
                likes
            }
        })
        const posts = await prisma.post.findMany()

        return new Response(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response("Internal Server POST Error", { status: 500 })
    }
}

export const GET = async (req: Request, res: Response) => {
    try {
        return new Response("This is a GET request", { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response("Internal Server GET Error", { status: 500 })
    }
}

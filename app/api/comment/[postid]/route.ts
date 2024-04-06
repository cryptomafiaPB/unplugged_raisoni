import prisma from "@/lib/PrismaDB";



export const POST = async (req: Request, { params }: any) => {
    try {
        const { body, likes } = await req.json()

        const newComment = await prisma.comment.create({
            data: {
                body,
                likes,
                postId: params.postid
            }
        })

        return new Response(JSON.stringify(newComment), { status: 200 })
    } catch (error) {
        console.error(error);
        return new Response("Internal server error", { status: 500 })
    }
}

export const GET = async (req: Request, { params }: any) => {
    try {
        const comments = await prisma.comment.findMany({
            where: {
                postId: params.postid
            }
        })

        return new Response(JSON.stringify(comments), { status: 200 })
    } catch (error) {
        console.error(error);
        return new Response("Internal server error", { status: 500 })
    }
}
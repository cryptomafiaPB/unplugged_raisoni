import prisma from "@/lib/PrismaDB"

export const GET = async (req: Request, { params }: any) => {
    try {
        // Find the post by ID and increment the like count
        const updatedPost = await prisma.post.update({
            where: { id: params.postid },
            data: { likes: { increment: 1 } },
        });

        return new Response(JSON.stringify(updatedPost), { status: 200 })
    } catch (err) {
        console.log(err);
        return new Response("Internal Server Error", { status: 500 })
    }
}
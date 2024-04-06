import prisma from "@/lib/PrismaDB"

export const GET = async (req: Request, { params }: any) => {
    try {
        const prompts = await prisma.post.findUnique({
            where: {
                id: params.postid
            }
        })

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (err) {
        console.log(err);
        return new Response("Internal Server Error", { status: 500 })
    }
}
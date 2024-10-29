import prisma from "@/lib/PrismaDB"

export const GET = async (req: Request) => {
    try {
        const posts = await prisma.post.findMany()

        return new Response(JSON.stringify(posts), { status: 200 })
    } catch (err) {
        console.log(err);
        return new Response("Internal Server Error", { status: 500 })
    }
}



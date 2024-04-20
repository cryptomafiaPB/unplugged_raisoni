import prisma from "@/lib/PrismaDB";
export const GET = async (req: Request) => {
    try {
        const comments = await prisma.comment.findMany()

        return new Response(JSON.stringify(comments), { status: 200 })
    } catch (error) {
        console.error(error);
        return new Response("Internal server error", { status: 500 })
    }
}
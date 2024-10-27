import prisma from "@/lib/PrismaDB"


export const GET = async (req: Request, { params }: any) => {
    const postsPerPage = 15;
    try {
        const skip = (params.pageid - 1) * postsPerPage;
        const take = postsPerPage;

        const posts = await prisma.post.findMany({
            skip,
            take,
            orderBy: {
                createdAt: 'desc', // Adjust the ordering as needed
            },
        });

        if (posts.length === 0) {
            return new Response("No posts found", { status: 404 })
        }

        return new Response(JSON.stringify(posts), { status: 200 })
    } catch (err) {
        console.log(err);
        return new Response("Internal Server Error", { status: 500 })
    }
}

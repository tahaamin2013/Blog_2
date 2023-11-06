import prisma from '../lib/prismadb'



export default async function getBlogs(
) {
  try {

    const blog = await prisma.blog.findMany({
      orderBy: {
        createdAt: 'desc'
      },
    });

    const safeblogs = blog.map((blog) => ({
      ...blog,
      createdAt: blog.createdAt.toISOString(),
    }));

    return safeblogs;
  } catch (err: any) {
    throw new Error(err);
  }
}
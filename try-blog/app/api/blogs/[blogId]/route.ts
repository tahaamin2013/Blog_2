import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from '../../../lib/prismadb'


interface IParams {
    blogId?:string
}



export async function DELETE(
    request:Request, {
        params
    }: {params:IParams}
) {
    const currentUser = await getCurrentUser()


    if(!currentUser) {
        return NextResponse.error()
    }

    const {blogId} = params


    if(!blogId || typeof blogId !== 'string') {
        throw new Error('Invalid Id')
    }

    const blog = await prisma.blog.deleteMany({
        where: {
            id:blogId,
            userId:currentUser.id
        }
    });

    return NextResponse.json(blog)
}

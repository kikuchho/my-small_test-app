import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
//@represents the root of the project 
import prisma from "@/prisma/client";



// we only have to make sure any variable that doesn't have default
// have a correct value 
const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
})

export async function  POST(request: NextRequest) {
    const body = await request.json();
    //using zod to validate the request 

    const validation = createIssueSchema.safeParse(body)

    if(!validation.success)
    {
        return NextResponse.json(validation.error.errors, { status: 400});

    }

    const newIssue = prisma.issues.create({
        data: { title: body.title, description: body.description}
    }); 

    return  NextResponse.json(newIssue, { status: 201} )

}
"use server"
import prisma  from "@/lib/prisma"
import { hash } from 'bcryptjs';

type Inputs = {
    name: string
    email: string
    password: string
}

export const Register = async (data: Inputs) => {

    console.log(data)
    const hashedPassword = await hash(data.password, 10);
    try {
         const userExists = await prisma.user.findUnique({
            where: {
                email: data.email,
            },
        });
        if (userExists) {
            return { ok:false, message: "User already exists" };
        }
        const user = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashedPassword,
            },
        });
        return { ok:true, message: "User created successfully", user };

    } catch (error) {
        console.error('Registration error:', error instanceof Error ? error.message : error);
        return { ok: false, message: "An unexpected error occurred" };
      }

};
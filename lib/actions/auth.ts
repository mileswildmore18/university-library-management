// call on the server side
"use server";

import { eq } from "drizzle-orm";
import {db} from "@/database/drizzle";
import {users} from "@/database/schema";
import { hash } from "bcryptjs";

const signUp= async (params: AuthCredentials) => {
    const { fullName, email, universityId, password, universityCard } = params;

    // check if the user already exists
    const existingUser = await db
        .select()
        .from(users)
        .where(eq(users.email, email))
        .limit(1);
    // if the user already exists, throw an error
    if (existingUser.length > 0) {
       return { success: false, message: "User already exists" };
    }

    const hashedPassword = await hash(password, 10);
    // try to add a new user
    try {
        await db.insert(users).values({
            fullName,
            email,
            universityId,
            password: hashedPassword,
            universityCard,
        })
    // display error message if the user is not added
    } catch (error) {
        console.log(error, "Signup error");
        return { success: false, error: "Signup error" };
    }
};
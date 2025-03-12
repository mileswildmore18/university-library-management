// call on the server side
"use server";

import { eq } from "drizzle-orm";
import {db} from "@/database/drizzle";
import {users} from "@/database/schema";
import { hash } from "bcryptjs";
import {signIn} from "@/auth";

// Add sign in with the user's credentials
const signInWithCredentials = async (params: Pick<AuthCredentials, 'email' | 'password'>) => {
    const { email, password } = params;
    // try to find the user
    try {
    // check if the user exists or information is correct or not
        const result = await signIn('credentials', {
            email,
            password,
            redirect: false
        });

        if(result?.error) {
            return { success: false, error: result.error };
        }

        return { success: true }
    } catch (error) {
        // display error message and return to sign in
        console.log(error, "Sign in error");
        return { success: false, error: "Sign in error" };
    }
}

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
        });

        // sign in the user that is added in the database
        await signInWithCredentials({ email, password });

        return { success: true }
    // display error message if the user is not added
    } catch (error) {
        console.log(error, "Signup error");
        return { success: false, error: "Signup error" };
    }
};
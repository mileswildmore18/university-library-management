// Provide secret authentication
import NextAuth, { User } from "next-auth"

import CredentialsProvider from "next-auth/providers/credentials"
import {db} from "@/database/drizzle";
import {users} from "@/database/schema";
import {eq} from "drizzle-orm";
import {compare} from "bcryptjs";

// Check for credentials
export const {handlers, signIn, signOut, auth} = NextAuth({
    session: {
        strategy: 'jwt',
    },
    // Check if email and password is valid
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }
                // Check for user
                const user = await db.select()
                    .from(users)
                    .where(eq(users.email, credentials.email.toString()))
                    .limit(1);

                if (user.length === 0) return null;

                // Check for password
                const isPasswordValid = await compare(
                    credentials.password.toString(),
                    user[0].password);
                // Check if password is not valid
                if (!isPasswordValid) return null;
                // Return user's information
                return {
                    id: user[0].id.toString(),
                    email: user[0].email,
                    name: user[0].fullName,
                } as User;
            }
        }),
    ],
})
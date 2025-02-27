import {z} from "zod";

// Add validations for user signing up
export const signInSchema = z.object({
    // Add information that requires 3 characters to create a new username along with email and university and card
    fullName: z.string().min(3),
    email: z.string().email(),
    universityId: z.coerce.number(),
    // university card cannot be empty
    universityCard: z.string().nonempty('University Card is required'),
    // password must be at least 8 characters
    password: z.string().min(8),
})
// Add validations for user signing in
export const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

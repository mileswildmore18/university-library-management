"use client"

import {zodResolver} from "@hookform/resolvers/zod";
import {DefaultValues, FieldValues, SubmitHandler, useForm, UseFormReturn} from "react-hook-form"
import {z, ZodType} from "zod";

import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"

// Add the auth form generic type with default function of T
interface Props<T extends FieldValues> {
    schema: ZodType<T>;
    defaultValues: T;
    // Check if credentials from user fills are correct on sign in or sign up
    onSubmit: (data: T) => Promise<{ success: boolean, error?: string }>;
    type: 'SIGN_IN | SIGN_UP';
}

const AuthForm = <T extends FieldValues>({type, schema, defaultValues, onSubmit}: Props<T>) => {
    const isSignIn = type === "SIGN_IN";
    // 1. Define your form.
    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    });

    // 2. Define a submit handler.
    const handleSubmit: SubmitHandler<T> = async (data) => {
    }
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-white">
                {isSignIn ? "Welcome back to BookWise" : "Create your library account"}
            </h1>
            {/* Add the form */}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
};
export default AuthForm

"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import {DefaultValues, FieldValues, SubmitHandler, useForm, UseFormReturn} from "react-hook-form"
import { z, ZodType } from "zod"
// Add the auth form generic type with default function of T
interface Props<T extends FieldValues> {
    schema: ZodType<T>;
    defaultValues: T;
    // Check if credentials from user fills are correct on sign in or sign up
    onSubmit: (data: T) => Promise<{success: boolean, error?: string}>;
    type: 'SIGN_IN | SIGN_UP';
}

const AuthForm = <T extends FieldValues>({ type, schema, defaultValues, onSubmit}: Props<T>) => {
    // 1. Define your form.
    const form: UseFormReturn<T>=useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    });

    // 2. Define a submit handler.
    const handleSubmit: SubmitHandler<T>= async (data) => {}
    return (
        <div>AuthForm -- {type}</div>
    )
}
export default AuthForm

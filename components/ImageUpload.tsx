'use client'

import { IKImage, ImageKitProvider, IKUpload, } from "imagekitio-next";
import config from "@/lib/config";

// Upload image securely
const authenticator = async () => {
    // Check if the authenticator is accepted or if there is an error
    try {
        const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`, );

        // Check if the server gets a response
        if(!response.ok) {
            const errorText = await response.text();
            // Throw an error message if response fails
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }
        // Get response that returns the data
        const data = await response.json();

        const { signature, expire, token } = data;

        return { token, expire, signature };
    } catch (error: any) {
     throw new Error(`Authentication request failed: ${error.message}`)
    }
}

const ImageUpload = () => {
    return (
        <div>ImageUpload</div>
    )
}
export default ImageUpload

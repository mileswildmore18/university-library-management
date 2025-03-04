'use client'

import {IKImage, ImageKitProvider, IKUpload,} from "imagekitio-next";
import config from "@/lib/config";
import {useRef, useState} from "react";
import Image from "next/image";

// Get the imagekit configuration
const {env: {imagekit: {publicKey, urlEndpoint}}} = config;


// Upload image securely
const authenticator = async () => {
    // Check if the authenticator is accepted or if there is an error
    try {
        const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`,);

        // Check if the server gets a response
        if (!response.ok) {
            const errorText = await response.text();
            // Throw an error message if response fails
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }
        // Get response that returns the data
        const data = await response.json();

        const {signature, expire, token} = data;

        return {token, expire, signature};
    } catch (error: any) {
        throw new Error(`Authentication request failed: ${error.message}`)
    }
}

const ImageUpload = () => {
    // Add image reference
    const ikUploadRef = useRef(null);
    const [file, setFile] = useState<{ filePath: string} | null> (null);

    const onError = () => {}
    const onSuccess = () => {}
    // Add Image Upload
    return <ImageKitProvider
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticator={authenticator}>
    {/*  Hide the upload button uploading the image and provide success or error messages uploading the file */}
    <IKUpload
        className="hidden"
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        fileName="test-upload.png"
    />
        {/* Add upload button*/}
        <button className="upload-btn" onClick={(e) => {
            e.preventDefault();
            // Make button open user's computer browser for image
            if(ikUploadRef.current) {
                // @ts-ignore
                ikUploadRef.current?.click();
            }
        }}>
            <Image
                src="/icons/upload.svg"
                alt="upload-icon"
                width={20}
                height={20}
                className="object-contain"
            />
            <p className="text-base text-light-100">Upload a File</p>

            {file && <p className="upload-filename">{file.filePath}</p>}
        </button>

        {file && (
            <IKImage
                alt={file.filePath}
                path={file.filePath}
                width={500}
                height={500}
            />
        )}
    </ImageKitProvider>
}
export default ImageUpload

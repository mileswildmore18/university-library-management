import ImageKit from "imagekit";
import config from "@/lib/config";
import {NextResponse} from "next/server";

// Get the imagekit configuration
const {env: {imagekit: {publicKey, urlEndpoint, privateKey}}} = config;

// Create a new ImageKit instance
const imagekit = new ImageKit({
    publicKey,
    privateKey,
    urlEndpoint,
});

// Gather information for authentication
export async function GET() {
    return NextResponse.json(imagekit.getAuthenticationParameters());
}
import type {Metadata} from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import localFont from "next/font/local";
import {ReactNode} from "react";

// Setup the fonts
const ibmPlexSans = localFont({
    src: [
        {path: "/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal"},
        {path: "/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal"},
        {path: "/fonts/IBMPlexSans-SemiBold.ttf", weight: "600", style: "normal"},
        {path: "/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal"},
    ],
});

const bebasNeue = localFont({
    src: [
        {path: "/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal"},
    ],
    variable: "--bebas-neue",
});


// Add the metadata
export const metadata: Metadata = {
    title: "BookWise",
    description: "BookWise is a book borrowing university library management solution",
};
// Create the layout for the fonts
const RootLayout = ({ children }: { children: ReactNode}) => {
    return (
        <html lang="en">
        <body
            className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
        >
        {children}

        <Toaster />
        </body>
        </html>
    );
}

export default RootLayout;
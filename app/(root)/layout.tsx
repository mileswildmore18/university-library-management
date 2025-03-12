import {ReactNode} from 'react'
import Header from "@/components/Header";
import {auth} from "@/auth";
import {redirect} from "next/navigation"
import {red} from "next/dist/lib/picocolors";

// Set up the layout of the main page
const Layout = async ({children}: { children: ReactNode }) => {

    const session = await auth();
    // Redirect to sign in is user is not logged in
    if (!session) redirect('/sign-in');
    return (
        <main className="root-container">
            <div className="mx-auto max-w-7xl">
                <Header/>
                <div className="mt-20 pb-20">
                    {children}
                </div>
            </div>
        </main>
    )
};


export default Layout

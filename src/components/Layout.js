import React from "react";
import { useRouter } from 'next/router';
import Navbar from "./Navbar";

const Layout = ({children, interestsSave}) => {

    const router = useRouter();
    const showNavbar = router.pathname !== '/interest-edit';


    return (
        <>
            <div>
                {showNavbar && <Navbar />}
                <main>{children}</main>
            </div>
        </>
    )
}

export default Layout
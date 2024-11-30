import Styles from "./login.module.css"

import { useBackground } from "@/context/BackgroundContext";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useProfile } from "@/context/ProfileContext";
import { useRouter } from "next/router";

import { loginUser } from "@/services/authService";
import BlindGoldIcon, {EyeGoldIcon} from "@/components/Icons";

export default function login () {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState("123man@ai.com")
    const [showPassword, setShowPassword] = useState(false);

    const { syncProfile } = useProfile();
    const { login } = useAuth();
    const {setBackground} = useBackground();
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedEmail = localStorage.getItem('email') || 'user@example.com'; // Default email if not set
            setEmail(storedEmail);
        }
    })

    useEffect(() => {
        setBackground("bg-default");        

    }, [setBackground])

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const { responseData, matchedEmail } = await loginUser({ username, password });
            await login({ email: matchedEmail, username, password, responseData });
            await syncProfile();
            await router.push('/');
            console.log("pushed")
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    

    return (
        <>
            {/** LOGIN CENTER CONTAINER */}
            <div className="w-10/12 h-screen m-auto flex flex-col gap-8 justify-center">

                <h1 className="text-3xl font-bold">Login</h1>

                <form onSubmit={handleLogin}>
                <div className="flex flex-col gap-4">
                    <input  className="p-6 rounded-lg white-6" 
                            type="text"
                            placeholder="Enter Username/Email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                             />

                    <div className="w-full relative flex justify-center items-center">
                        <input  className="p-6 w-full rounded-lg white-6" 
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
                        <button className="h-full px-4 absolute right-5 cursor-pointer" type="button" onClick={togglePasswordVisibility}>
                            
                            {
                                showPassword 
                                ? <EyeGoldIcon className="size-6"/>
                                : <BlindGoldIcon className="size-6"/>
                            }
                            
                        </button>
                    </div>
                
                
                <button className={` ${Styles.button1} `} type="submit" >Login</button>

                </div>
                </form>

                <p className="mt-20 text-center">No Account? <a className="text-gold underline" href="/register">Register Here</a></p>

            </div>
        </>
    )
}
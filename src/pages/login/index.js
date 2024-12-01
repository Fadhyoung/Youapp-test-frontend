import Styles from "./login.module.css"
import Link from "next/link";

import { useBackground } from "@/context/BackgroundContext";
import Modal from "@/components/Modals";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useProfile } from "@/context/ProfileContext";
import { useRouter } from "next/router";

import { loginUser } from "@/services/authService";
import BlindGoldIcon, {EyeGoldIcon} from "@/components/Icons";

export default function Login () {

    // LOCAL STATE
    const [loginInput, setLoginInput] = useState('');
    const [password, setPassword] = useState('');
    const [isEmail, setIsEmail] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState("")

    const { syncProfile } = useProfile();
    const { login } = useAuth();
    const {setBackground} = useBackground();
    const router = useRouter();

    // SET THE BACKGROUND BASE ON USER INTERACE DESIGN
    useEffect(() => {
        setBackground("bg-default");       
    }, [setBackground])

    // HANDLE LOGIN: POST DATA THROUGH SERVICE -> LGIN DATA THROUGH AUTHCONTEXT -> SNYCRONIZE PROFILE THROUGH PROFILECONTEXT -> PUSH TO PAGES
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const isEmail = /\S+@\S+\.\S+/.test(loginInput);
            console.log(isEmail)
            const { responseData, matchedEmail } = await loginUser({ isEmail, loginInput, password });            
            await login({ loginInput, password, responseData });            
            console.log("Login Success")
            await router.push('/');            
        } catch (error) {
            console.error('Login failed', error);
            setMessage(localStorage.getItem("fetch_message"));
            setLoginInput(""); setPassword("");
            setShowModal(true)
        }
    };

    // TOGGLE PASSWORD VISIBILITY
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    

    return (
        <>
            {/** LOGIN CENTER CONTAINER */}

            {/* MODAL */}
            {showModal && (
                    <Modal showModal={showModal} onClose={() => setShowModal(false)} message={message} />
                )}

            <div className="w-10/12 h-screen m-auto flex flex-col gap-8 justify-center">

                <h1 className="text-3xl font-bold text-white">Login</h1>

                <form onSubmit={handleLogin}>
                <div className="flex flex-col gap-4">
                    <input  className="p-6 rounded-lg text-white-30 bg-white-6" 
                            type="text"
                            placeholder="Enter Username/Email"
                            value={loginInput || ''}
                            onChange={(e) => setLoginInput(e.target.value)}
                             />

                    <div className="w-full relative flex justify-center items-center">
                        <input  className="p-6 w-full rounded-lg text-white-30 bg-white-6" 
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Password" 
                                value={password || ''}
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
                
                
                <button className={` ${Styles.button1} text-white `} type="submit" >Login</button>

                </div>
                </form>

                <p className="mt-20 text-center text-white">No Account? <Link className="text-gold underline" href="/register">Register Here</Link></p>

            </div>
        </>
    )
}
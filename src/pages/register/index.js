import styles from "./register.module.css";
import BlindGoldIcon, {EyeGoldIcon} from "@/components/Icons";
import Modal from "@/components/Modals";

import { useRouter } from "next/router";
import Link from "next/link";

import { useState } from "react";

import { registerUser } from "@/services/authService";

export default function Register () {

    // LOCAL STATE
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState("")
    const [isFormValid, setIsFormValid] = useState(false);
    const router = useRouter();

    // HANDLE REGISTER
    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            setShowModal(true);
            setEmail("");setUsername("");setPassword("");setConfirmPassword("");
            return;
        } else {

        const isValid = username.trim() && email.trim() && password.trim();
        setIsFormValid(isValid);

        if (!isValid) {
            setMessage("Fill all the input"); setShowModal(true); setShowModal(true); 
            setEmail("");setUsername("");setPassword("");setConfirmPassword("");; return;}

        try {
            const response = await registerUser({ email, username, password });
            console.log(response.message);
            setMessage(localStorage.getItem("fetch_message"));
            setEmail("");setUsername(""); setPassword("");setConfirmPassword("")
            setShowModal(true)
            await router.push('/login');
        } catch (error) {
            console.error('Registration failed', error);
            setMessage(localStorage.getItem("fetch_message"));
            setEmail("");setUsername(""); setPassword("");setConfirmPassword("")
            setShowModal(true)
        }}
    };

    // TOGGLE EYE VISIBILITY
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <>
            {/** REGISTER CENTER CONTAINER */}
            <div className="w-full h-full m-auto relative">

            {/* MODAL */}
            {showModal && (
                    <Modal showModal={showModal} onClose={() => setShowModal(false)} message={message} />
                )}

            <div className="w-10/12 h-full m-auto flex flex-col gap-8 justify-center">

                <h1 className="text-3xl font-bold text-white">Register</h1>

                <form onSubmit={handleRegister}>
                <div className="flex flex-col gap-4">

                    <input  className="p-6 rounded-lg text-white-30 bg-white-6" 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                             />

                    <input  className="p-6 rounded-lg text-white-30 bg-white-6" 
                            type="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter Username"
                             />         

                    <div className="relative flex items-center justify-between rounded-lg bg-white-6">
                        <input  className="w-full p-6 bg-transparent text-white-30" 
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Create Password" 
                                />
                        <button className="h-full px-4 absolute right-5 cursor-pointer" type="button" onClick={togglePasswordVisibility}>
                            
                            {
                                showPassword 
                                ? <EyeGoldIcon className="size-6"/>
                                : <BlindGoldIcon className="size-6"/>
                            }
                            
                        </button>
                    </div>

                    <div className="relative flex items-center justify-between rounded-lg bg-white-6">
                        <input  className="w-full p-6 bg-transparent text-white-30" 
                                type={showPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password" 
                                />
                        <button className="h-full px-4 absolute right-5 cursor-pointer" type="button" onClick={togglePasswordVisibility}>
                            
                            {
                                showPassword 
                                ? <EyeGoldIcon className="size-6"/>
                                : <BlindGoldIcon className="size-6"/>
                            }
                            
                        </button>
                    </div>

                
                <button className={`mt-10 ${styles.button1} text-white`} type="submit" >Register</button>

                </div>
                </form>

                <p className="mt-5 text-center text-white">Have an account? <Link className="text-gold underline" href="/login">Login Here</Link></p>

            </div>
            </div>
        </>
    )
}
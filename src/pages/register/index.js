import styles from "./register.module.css";
import BlindGoldIcon, {EyeGoldIcon} from "@/components/Icons";
import { useRouter } from "next/router";
import Link from "next/link";

import { useState } from "react";



import { registerUser } from "@/services/authService";

export default function Register ({}) {

    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            console.error('Passwords do not match');
            setShowModal(true);
            return; // Exit the function early if validation fails
        } else {

        try {
            const response = await registerUser({ email, username, password });
            console.log(response.message);
            await router.push('/login');
        } catch (error) {
            console.error('Registration failed', error);
        }}
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <>
            {/** LOGIN CENTER CONTAINER */}
            <div className="w-10/12 h-full m-auto flex flex-col gap-8 justify-center">

                <h1 className="text-3xl font-bold">Register</h1>

                <form onSubmit={handleRegister}>
                <div className="flex flex-col gap-4">

                    <input  className="p-6 rounded-lg white-6" 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                             />

                    <input  className="p-6 rounded-lg white-6" 
                            type="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter Username"
                             />         

                    <div className="relative flex items-center justify-between rounded-lg white-6">
                        <input  className="w-full p-6 bg-transparent" 
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

                    <div className="relative flex items-center justify-between rounded-lg white-6">
                        <input  className="w-full p-6 bg-transparent" 
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

                
                <button className={`mt-10 ${styles.button1}`} type="submit" >Register</button>

                </div>
                </form>

                <p className="mt-5 text-center">Have an account? <Link className="text-gold underline" href="/login">Login Here</Link></p>

            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Passwords do not match!</p>
                        <button onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}

        </>
    )
}
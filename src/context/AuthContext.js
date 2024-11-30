import React, { createContext, useState, useEffect, useContext } from 'react';
import Router, { useRouter } from 'next/router';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [accessToken, setAccessToken] = useState(null);

    const router = useRouter();

    useEffect(() => {
        const token = sessionStorage.getItem('access_token');
        if (token) {
          setAccessToken(token);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
    }, []);

    const login = async ({ email, username, password, responseData = {} }) => {

        console.log("Enter register service with email of: ", email)
        console.log("token: ", responseData.access_token)

        try {        
            const access_token  = responseData.access_token;
            sessionStorage.setItem('access_token', access_token);
            setAccessToken(access_token);
            console.log("responses: ", responseData)
            setUser({ email, username });
            setIsAuthenticated(true);
            router.replace('/');
            window.history.pushState(null, '', '/');
        } catch (error) {
            console.error('Login error:', error.responseData?.data || error.message);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        setAccessToken(null);
        setUser(null);
        setIsAuthenticated(false);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, accessToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

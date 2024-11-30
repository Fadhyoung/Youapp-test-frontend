import "@/styles/globals.css";
import { BackgroundProvider } from "@/context/BackgroundContext";
import { Inter } from 'next/font/google';
import Layout from "@/components/Layout";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { ProfileProvider } from "@/context/ProfileContext";
import { useRouter } from "next/router";

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});


function AuthGuard({ children }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  

  useEffect(() => {

    const publicRoutes = ['/login', '/register'];

    if (!isAuthenticated && !publicRoutes.includes(router.pathname)) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated && router.pathname !== '/login') {
      return null;
  }

  return children;
}

export default function App({ Component, pageProps }) {

  return (
      <BackgroundProvider>
        <AuthProvider>
          <AuthGuard >
            <ProfileProvider>
              <Layout>
                <main className={inter.className}>
                  <Component {...pageProps} />
                </main>
              </Layout>
            </ProfileProvider>
          </AuthGuard>
        </AuthProvider>
      </BackgroundProvider>
  );
}
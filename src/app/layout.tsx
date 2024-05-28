'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { createContext, useEffect, useState } from 'react';
import { getCurrentUser } from "@/actions/session";

const inter = Inter({ subsets: ["latin"] });

export const UserContext = createContext<{ user: any, setUser: any } | undefined>(undefined);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState(undefined);

  const loadUser = async () => {
    setUser(await getCurrentUser());
  }

  useEffect(() => {
    loadUser();
  }, [])

  return (
    <html lang="en">
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <body className={inter.className}>
          <header>
            <nav>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/login">Login</Link>
                </li>
              </ul>
            </nav>

            {user && <div>
              Me: {user.name}
            </div>}
          </header>
          {children}
        </body>
      </UserContext.Provider>
    </html>
  );
}

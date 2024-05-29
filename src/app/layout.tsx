import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import AuthContext from "@/components/AuthContext";
import { getCurrentUser } from "@/actions/session";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let user = await getCurrentUser();

  return (
    <html lang="en">
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
        </header>
        <AuthContext initialUser={user}>
          {children}
        </AuthContext>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import AuthContext from "@/components/AuthContext";
import { getCurrentUserID } from "@/lib/helpers";
import { cookies } from 'next/headers'
import Users from "@/models/Users";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth_token = cookies().get('auth_token')?.value;

  let user = undefined;

  if (auth_token) {
    user = await Users.findOne({
      _id: await getCurrentUserID(auth_token as string)
    });
    user = JSON.parse(JSON.stringify(user));
  }

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

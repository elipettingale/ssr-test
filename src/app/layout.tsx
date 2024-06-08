import { Inter } from "next/font/google";
import "@/styles/global.css";
import AuthContext from "@/components/AuthContext";
import { getCurrentUser } from "@/actions/session";
import Header from "@/components/Header";

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
        <Header />
        <AuthContext initialUser={user}>
          <main>
            {children}
          </main>
        </AuthContext>
      </body>
    </html>
  );
}

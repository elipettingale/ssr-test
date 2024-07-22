"use client";

import { logout } from "@/actions/session";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {}

export default function Logout({}: Props) {
    const router = useRouter();

    useEffect(() => {
        const handleLogout = async function() {
            await logout();
        }

        handleLogout();
        router.push('/');
    }, [])
  
  return null;
}

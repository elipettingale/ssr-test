import { Context } from "@/components/AuthContext";
import { useContext } from "react";

export default function useAuth() {
  const authContext = useContext(Context);
  return [authContext?.user, authContext?.setUser];
}

import { UserContext } from "@/app/layout";
import { useContext } from "react";

export default function useUser() {
  const userContext = useContext(UserContext);
  return [userContext?.user, userContext?.setUser];
}

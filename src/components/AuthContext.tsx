"use client";

import { createContext, useState } from "react";

interface Props {
  initialUser: any;
  children: any;
}

export const Context = createContext<{ user: any; setUser: any } | undefined>(
  undefined
);

export default function AuthContext({ initialUser, children }: Props) {
  const [user, setUser] = useState(initialUser);

  return (
    <Context.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </Context.Provider>
  );
}

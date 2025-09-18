"use client";

import User from "@/models/user";
import { createContext, useContext, useEffect, useState } from "react";

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}
interface UserProviderProps {
  children: React.ReactNode;
  userData: null;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export const UserProvider = ({ children, userData }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    setUser(userData);
  }, [userData]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

import { createContext } from "react";

export interface AuthPayload {
  token: string;
  user: {
    id: string;
    username: string;
  };
}

export const UserContext = createContext<any>(null);
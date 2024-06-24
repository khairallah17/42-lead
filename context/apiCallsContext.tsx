"use client"
import { createContext } from "react";
import { TUser } from "@/types/index";

interface IApiFunctions {
    getUsers: () => Promise<TUser[]>,
    searchQuery: string,
    setSearchQuery: (value: string) => void,
    getUserById: (id: string) => Promise<TUser>,
    user: TUser,
    setUser: (value: TUser) => void
}

const apiCallsContext = createContext<IApiFunctions>({
    searchQuery: "",
    getUsers: async () => ([] as TUser[]),
    getUserById: async (id: string) => ({} as TUser)
} as IApiFunctions)

export default apiCallsContext
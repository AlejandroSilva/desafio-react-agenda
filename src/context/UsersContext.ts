import { Context, createContext } from "react"

import { User } from "../services/UsersApi.ts"

export interface UsersContextProps {
    users: User[]
    currentPage: number
    fetchPage: (page: number) => void
}

// force to set the defaultValue to undefined
export const UsersContext: Context<UsersContextProps | undefined> = createContext<UsersContextProps | undefined>(undefined)

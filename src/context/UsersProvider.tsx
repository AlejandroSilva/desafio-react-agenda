import { FC, ReactElement, ReactNode, useEffect, useState } from "react"

import { UsersContext } from "./UsersContext.ts"
import UsersApi, { User } from "../services/UsersApi.ts"

interface UsersProviderProps {
    children?: ReactNode
}

export const UsersProvider: FC<UsersProviderProps> = ({ children }): ReactElement => {
    const [currentPage, setCurrentPage] = useState<number>(0)
    const [users, setUsers] = useState<User[]>([])

    const fetchPage = (page: number = 1): void => {
        setCurrentPage(page)
        UsersApi.getUsers(page)
            .then(users => {
                setUsers(users)
                return users
            })
            .then(console.log)
    }

    useEffect(() => {
        fetchPage(0)
    }, [])

    return (
        <UsersContext.Provider value={{
            users,
            currentPage,
            fetchPage,
        }} >
            {children}
        </UsersContext.Provider>
    )
}
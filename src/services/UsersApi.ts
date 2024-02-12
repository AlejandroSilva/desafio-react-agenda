import { SERVER_ADDRESS } from "../utils/constants.ts"

export interface User {
    description: string
    id: number
    name: string
    photo: string
}

const UsersApi = {
    getUsers: (page: number, limit: number = 10): Promise<User[]> => {
        return fetch(`${SERVER_ADDRESS}/api/users?_page=${page}&_limit=${limit}`, {})
            .then((res: Response) => res.json())
    }
}

export default UsersApi
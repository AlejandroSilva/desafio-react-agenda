import { FC, ReactElement } from "react"

import { useUsersContext } from "../context"

interface UsersTableProps {}

const UsersTable: FC<UsersTableProps> = (): ReactElement => {
    const { users, fetchPage } = useUsersContext()

    return (
        <>
            <table>
                <tbody>
                {users.length == 0 && (
                    <tr>
                        <td>Sin datos</td>
                    </tr>
                )}
                {users.map(user => (
                    <tr key={user.id}>
                        <td>
                            <img src={user.photo} alt={user.name}/>
                        </td>
                        <td>
                            <a href="#">{user.name}</a>
                        </td>
                        <td>
                            <button>X</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={() => fetchPage(1)}>1</button>
            <button onClick={() => fetchPage(2)}>2</button>
            <button onClick={() => fetchPage(3)}>3</button>
            <button onClick={() => fetchPage(4)}>4</button>
        </>
    )
}

export { UsersTable }

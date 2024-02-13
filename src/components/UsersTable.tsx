import { FC, ReactElement } from "react"
import { Avatar, Space, Table, TableProps } from "antd"
import { DeleteOutlined, UserOutlined } from "@ant-design/icons"

import { useUsersContext } from "../context"
import { User } from "../services/UsersApi.ts"

interface UsersTableProps {
    showSuccess: (content: string) => void
    showError: (content: string) => void
}

const getColumns = (deleteHandler: (id: number) => void): TableProps<User>['columns'] => ([
    {
        title: 'Nombre',
        key: 'name',
        render: (_, record) => (
            <Space size="middle">
                <Avatar
                    size={48}
                    src={record.photo}
                    // UserOutlined icon as an image fallback
                    icon={<UserOutlined />}
                />
                <a>{record.name}</a>
            </Space>
        )
    }, {
        title: 'Descripción',
        dataIndex: 'description',
    }, {
        title: 'Acciones',
        key: 'id',
        render: (_, record) => (
            <DeleteOutlined
                style={{ fontSize: '24px' }}
                onClick={() => deleteHandler(record.id)}
            />
        )
    }
])

const UsersTable: FC<UsersTableProps> = ({ showSuccess, showError }): ReactElement => {
    const { tableUsers, tablePagination, fetchPage, deleteUser } = useUsersContext()
    const deleteHandler = (id: number) => {
        deleteUser(id)
            .then(() => showSuccess('Usuario eliminado correctamente'))
            .catch(() => showError('Ocurrio un error al eliminar'))
    }

    return (
        <Table
            columns={getColumns(deleteHandler)}
            rowKey={'id'}
            dataSource={tableUsers}
            pagination={{
                ...tablePagination,
                onChange: (newPage) => fetchPage(newPage)
            }}
        />
    )
}

export { UsersTable }

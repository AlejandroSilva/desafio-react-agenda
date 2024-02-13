import { FC, ReactElement } from "react"

import { UsersProvider } from "../context"
import { UsersTable } from "./UsersTable.tsx"

const App: FC = () : ReactElement => {
    return (
        <UsersProvider>
            <section>
                <h1>Agenda Previred - Mi agenda de contactos laboral</h1>
                <p>Aqui podrá encontrar o buscar todos sus contactos agregados, agregar nuevos contactos, y
                    eliminar contactos no deseados.</p>

                <button>Agregar Contacto</button>
                <input type="text"/>

                <UsersTable/>
            </section>
        </UsersProvider>
    )
}

export default App

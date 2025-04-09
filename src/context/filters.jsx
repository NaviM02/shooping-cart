import { createContext, useState } from "react"

// Crear Context --- El que se consume
export const FiltersContext = createContext()
 
// Crear Provider --- El que nos provee de acceso al contexto
export function FiltersProvider ({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        price: 0
    })

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}
        >
            {children}
        </FiltersContext.Provider>
    )
}

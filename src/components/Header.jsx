import { Filters } from "./Filters.jsx"

export function Header ({ changeFilters }){
    return (
        <header>
            <h1>Don Shop</h1>
            <Filters changeFilters={changeFilters} />
        </header>
    )
}
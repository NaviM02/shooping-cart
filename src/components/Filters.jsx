import { useState , useId } from "react"
import "./Filters.css"
import { useFilters } from "../hooks/useFilters"

export function Filters () {
    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            price: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
    
    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min="0"
                    max="1000"
                    onChange={handleChangeMinPrice}
                />
                <span>${filters.price}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="men's clothing">Ropa Masculina</option>
                    <option value="women's clothing">Ropa Femenina</option>
                    <option value="jewelery">Joyeria</option>
                    <option value="electronics">Electronicos</option>
                </select>
            </div>
        </section>
    )
}
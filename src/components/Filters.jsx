import { useState } from "react"
import "./Filters.css"

export function Filters ({ changeFilters }) {
    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        changeFilters(prevState => ({
            ...prevState,
            price: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        changeFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
    
    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Precio a partir de: </label>
                <input
                    type="range"
                    id="price"
                    min="0"
                    max="1000"
                    onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Categoria</label>
                <select id="category" onChange={handleChangeCategory}>
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
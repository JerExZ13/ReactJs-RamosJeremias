import React from 'react'
import items from '../data/Items'
import { useParams, Link } from 'react-router-dom'
const ItemDetailContainer = () => {
    const { itemId } = useParams()
    let item = items.filter(item => item.id == itemId)
    const {name, price, id, image} = item[0]

    const agregarAlCarrito = (producto) => {
        if (!localStorage.getItem('carrito')) {
            localStorage.setItem('carrito', JSON.stringify([]))
        }
    
        let carritoLS = JSON.parse(localStorage.getItem('carrito'))
    
        const enCarrito = carritoLS.find(prod => prod.id == producto.id)
    
        if (!enCarrito) {
            carritoLS.push({ ...producto, cantidad: 1 })
        } else {
            const carritoFiltrado = carritoLS.filter(prod => prod.id != producto.id)
            carritoLS = [...carritoFiltrado, { ...enCarrito, cantidad: enCarrito.cantidad + 1 }]
        }
    
        localStorage.setItem('cantidad', carritoLS.reduce((acc, prod) => acc + prod.cantidad, 0))
        localStorage.setItem('carrito', JSON.stringify(carritoLS))
    }

    return (
        <div className='flex justify-center items-center flex-col'>
            <div className='flex justify-between flex-col-reverse md:flex-row items-center md:w-[50%]'>
                <h1 className='font-bold text-2xl my-10'>{name}</h1>
                <Link to={`/`} className="inline-flex items-center px-3 py-2 text-sm font-medium mt-10 md:mt-0 text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Home
                </Link>
            </div>
            <img src={image} alt={name} className="px-10 md:px-0 md:w-[50%]" />
            <div className='flex justify-between flex-col-reverse md:flex-row items-center md:w-[50%]'>
            <p className='font-bold text-2xl my-10 text-green-500'>${price}</p>
                <button onClick={() => agregarAlCarrito(item[0])} className="inline-flex items-center px-3 py-2 text-sm font-medium mt-10 md:mt-0 text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemDetailContainer
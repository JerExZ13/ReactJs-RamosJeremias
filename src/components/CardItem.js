import React from 'react'
import items from '../data/Items'
import { Link } from 'react-router-dom'

const CardItem = ({item}) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={item.image} alt={item.name}/>
            </a>
            <div className="p-5">
                <div className='flex justify-between items-center'>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                    </a>
                    <p className="mb-3 text-xl  font-bold text-green-500">${item.price}</p>
                </div>
                <Link to={`item/${item.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Mas info
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
        </div>

    )
}

export default CardItem
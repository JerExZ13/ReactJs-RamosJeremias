import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import items from '../data/Items'
import CardWidhet from './CardWidhet'

const NavBar = () => {

  const [categorys, setCategorys] = useState([])

  const categoryFn = (arr) => {
    let norepeat = []

    arr.forEach(p => {
      if (!norepeat.includes(p.category)) {
        norepeat.push(p.category)
      }
    })

    setCategorys(norepeat)
  }

  let carritoLS = JSON.parse(localStorage.getItem('carrito'))
  let cantidad = JSON.parse(localStorage.getItem('cantidad'))
  let total = 0

  useEffect(() => {
    categoryFn(items)
  }, [])

  const imprimirCarrito = (arr) => {
    if ((arr != null)) {
      arr?.forEach(elemento => {
        total = total + (elemento.price * elemento.cantidad)
        localStorage.setItem('total', total)
      })
    }
  }

  imprimirCarrito(carritoLS)

  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
              </a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <Link to='/' className="btn btn-base-300 normal-case text-4xl">AQUA</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><Link to='/' className='bg-neutral text-white'>Nosotros</Link></li>
          <li tabIndex={0}>
            <a className='bg-neutral text-white'>
              Categorias
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-neutral text-white">
              <li className='uppercase'><Link to='/'>TODO</Link></li>
              {
                categorys?.map((item, index) => {
                  return <li className='uppercase' key={index}><Link to={`/category/${item}`}>{item}</Link></li>
                })
              }
            </ul>
          </li>
          <li><a className='bg-neutral text-white'>Contacto</a></li>
        </ul>
      </div>
      <div className="flex-none navbar-end">
        <div className="dropdown dropdown-end">
          <CardWidhet numItems={cantidad} />
          <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">{cantidad} Items</span>
              <span className="text-info">Subtotal: ${total}</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">Terminar compra</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default NavBar
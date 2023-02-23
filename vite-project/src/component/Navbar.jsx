import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul className='flex  pr-6 text-white font-semibold text-xl py-5  bg-blue-900'>
            <li><Link to ="/signup">Signup</Link></li>
            <li><Link to ="/login" className='ml-2'>login</Link></li>
            <li><Link to ="/addproduct" className='ml-2'>Addproduct</Link></li>
            <li><Link to ="/" className='ml-2'>product</Link></li>
            <li><Link to ="/product/:id" className='ml-2'>updateproduct</Link></li>
        </ul>
    </div>
  )
}

export default Navbar
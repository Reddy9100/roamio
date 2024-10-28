import { Button } from '../../components/ui/button'
import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar bg-black h-[10vh] flex justify-between items-center">
            <h1 style={{fontFamily:'cursive'}} className='text-white ml-12 font-bold text-3xl'><span className='text-purple-500'>Roam</span>io</h1>
            <Button className="'border-purple-500 mr-12 rounded-md font-thin bg-transparent border p-2 hover:bg-purple-600 hover:transition-all duration-300 ease-in-out">Login</Button>
        </nav>
    </div>
  )
}

export default NavBar
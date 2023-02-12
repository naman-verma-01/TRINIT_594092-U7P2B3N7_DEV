import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <div className="relative shadow bg-black">
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"></div>

    <div className="w-full backdrop-blur-sm">
        <div className="relative z-1 h-16 mx-auto px-5 max-w-7xl flex items-center justify-between text-white">
            <Link className="text-2xl hover:text-cyan-400 transition-colors" href="/">CarbonFootprint</Link>

            <ul className="flex items-center gap-5">
                <li><Link to="/" className="hover:text-cyan-400 transition-colors">Dashboard</Link></li>
                <li><Link to="/login" className="hover:text-cyan-400 transition-colors">Login</Link></li>
                <li><Link to="/signup" className="hover:text-cyan-400 transition-colors">Sign Up</Link></li>
            </ul>
        </div>
    </div>
</div>
    </>
  )
}

export default Navbar

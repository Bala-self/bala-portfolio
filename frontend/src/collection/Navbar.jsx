import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { signOut } from 'firebase/auth'
import verify from '../assets/config/verify'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()


  const handleLogout = async () => {
    await signOut(verify)
    navigate('/login')
  }

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-white text-2xl font-bold">Balakrishnan M</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/Home" className="text-gray-100 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
            <NavLink to="/projects" className="text-gray-100 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</NavLink>
            <NavLink to="/about" className="text-gray-100 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</NavLink>
            <NavLink to="/blogs" className="text-gray-100 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blogs</NavLink>
            <NavLink to="/contact" className="text-gray-100 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            
            <button className="text-gray-100 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handleLogout}>Logout</button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-100 hover:text-white focus:outline-none">
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-indigo-600 px-4 pt-2 pb-4 space-y-2">
          <NavLink to="/Home" className="block text-gray-100 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
          <NavLink to="/projects" className="block text-gray-100 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</NavLink>
          <NavLink to="/about" className="block text-gray-100 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</NavLink>
           <NavLink to="/blogs" className="block text-gray-100 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blogs</NavLink>
          <NavLink to="/contact" className="block text-gray-100 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</NavLink>
          <button className="block w-full text-left text-gray-100 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar

import { Link, useNavigate } from 'react-router-dom'
import freeimg from './assets/free.png'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'
import verify from './assets/config/verify'
import { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

const Signup = () => {
  const [name, setName] = useState('')
  const [gmail, setGmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(verify, (user) => {
      if (user) {
        navigate('/Home')
      }
    })
    return () => unsubscribe()
  }, [navigate])

  async function handleSignup(e) {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(gmail)) {
      setError('Invalid email format!')
      return
    }
    const strongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (!strongPassword.test(password)) {
      setError('Password must be at least 8 characters long, include uppercase, lowercase, number, and special character.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match!')
      return
    }
    try {
      await createUserWithEmailAndPassword(verify, gmail, password)
      setSuccess(true)
      navigate('/Home')
    } catch (error) {
      setError('Invalid credentials!')
    }
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${freeimg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      <div className="relative flex gap-6 w-11/12 max-w-6xl z-10 mt-20">
        <div className="flex-1 backdrop-blur-lg bg-white/30 p-8 rounded-xl shadow-2xl max-w-md mx-auto">
          <h1 className="text-center text-3xl font-bold text-white mb-6">Signup</h1>
          <form className="space-y-4" onSubmit={handleSignup}>
            <div className="relative">
              <label htmlFor="name" className="text-white">Name</label>
              <input
                type="text"
                id="name"
                required
                value={name}
                className="w-full bg-white/70 text-gray-800 p-2 pl-10 rounded focus:outline-none"
                onChange={(e) => setName(e.target.value)}
              />
              <span className="absolute left-3 top-8 text-gray-500"><FaUser /></span>
            </div>
            <div className="relative">
              <label htmlFor="email" className="text-white">Email</label>
              <input
                type="email"
                id="email"
                required
                value={gmail}
                className="w-full bg-white/70 text-gray-800 p-2 pl-10 rounded focus:outline-none"
                onChange={(e) => setGmail(e.target.value)}
              />
              <span className="absolute left-3 top-8 text-gray-500"><FaEnvelope /></span>
            </div>
            <div className="relative">
              <label htmlFor="password" className="text-white">Password</label>
              <input
                type="password"
                id="password"
                required
                value={password}
                className="w-full bg-white/70 text-gray-800 p-2 pl-10 rounded focus:outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="absolute left-3 top-8 text-gray-500"><FaLock /></span>
              <p className="text-xs text-yellow-200 mt-1">
                Must be 8+ chars, include uppercase, lowercase, number & special character.
              </p>
            </div>
            <div className="relative">
              <label htmlFor="confirmPassword" className="text-white">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full p-2 pl-10 rounded focus:outline-none 
                  ${confirmPassword.length > 0 
                    ? password.startsWith(confirmPassword) 
                      ? 'bg-green-200 text-gray-800' 
                      : 'bg-red-200 text-gray-800' 
                    : 'bg-white/70 text-gray-800'}`}
              />
              <span className="absolute left-3 top-8 text-gray-500"><FaLock /></span>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold 
                           hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
              >
                Signup
              </button>
              <p className="mt-3 text-white">
                Already have an account?{" "}
                <Link to="/login" className="text-yellow-300 font-medium hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </form>

          {error && (
            <div className="mt-4 text-center bg-red-600 text-white py-2 rounded-lg shadow-md">
              <p>Email have a account already!</p>
            </div>
          )}
          {success && (
            <div className="mt-4 text-center bg-green-600 text-white py-2 rounded-lg shadow-md">
              Successfully signed up!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Signup

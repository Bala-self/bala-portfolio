import { Link, useNavigate } from 'react-router-dom'
import freeimg from './assets/free.png'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import verify from './assets/config/verify'
import { useState, useEffect } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

const Login = () => {
  const navigate = useNavigate()
  const [gmail, setGmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(null) 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(verify, (user) => {
      if (user) {
        navigate('/Home')
      }
    })
    return unsubscribe
  }, [navigate])

  async function handleLogin(e) {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(verify, gmail, password)
      setLoading(true)
      navigate('/Home')
    } catch (error) {
      setLoading(false)
      
    }
  }

  return (
    <div>
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${freeimg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <div className="relative flex gap-6 w-11/12 max-w-6xl z-10 mt-20">
          <div className="flex-1 backdrop-blur-lg bg-white/30 p-8 rounded-xl shadow-2xl max-w-md mx-auto">
            <h1 className="text-center text-3xl font-bold text-white mb-6">Login</h1>
            <form className="space-y-4" onSubmit={handleLogin}>
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
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold 
                             hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
                >
                  Login
                </button>
                <p className="mt-3 text-white">
                  Don’t have an account?{" "}
                  <Link to="/" className="text-yellow-300 font-medium hover:underline">
                    Signup
                  </Link>
                </p>
              </div>
            </form>

            {loading === false && (
              <div className="mt-4 text-center bg-red-600 text-white py-2 rounded-lg shadow-md">
                Wrong email or password
              </div>
            )}
            {loading === true && (
              <div className="mt-4 text-center bg-green-600 text-white py-2 rounded-lg shadow-md">
                Successfully logged in
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login


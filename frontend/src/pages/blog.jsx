import { useState, useEffect } from 'react'
import axios from 'axios'
import css3 from '../assets/logos/CSS3.png'
import firebase from '../assets/logos/Firebase.png'
import html5 from '../assets/logos/HTML5.png'
import git from '../assets/logos/Git.png'
import github from '../assets/logos/GitHub.png'
import express from '../assets/logos/Express.png'
import mongodb from '../assets/logos/MongoDB.png'
import nodejs from '../assets/logos/Node.js.png'
import react from '../assets/logos/React.png'
import tailwind from '../assets/logos/Tailwind CSS.png'
import js from '../assets/logos/JavaScript.png'
import Navbar from '../collection/Navbar'
import { onAuthStateChanged } from 'firebase/auth'
import verify from '../assets/config/verify'
import Footer from '../collection/Footer'

const Blogs = () => {
  const [subject, setSubject] = useState('')
  const [text, setText] = useState('')
  const [posts, setPosts] = useState([])
  const [theme, setTheme] = useState('light')
  const [currentUser, setCurrentUser] = useState(null)
  const [status, setStatus] = useState('idle')

  const logos = [css3, firebase, html5, git, github, express, mongodb, nodejs, react, tailwind, js]

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(verify, (user) => {
      setCurrentUser(user)
    })
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/blogs`)
        setPosts(res.data)
      } catch (error) {
        console.error('Error fetching blogs:', error)
      }
    }
    fetchBlogs()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    if (!subject || !text) return
    setStatus('saving')
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/blogs`, { subject, text, uid: currentUser.uid })
      setPosts([res.data, ...posts])
      setSubject('')
      setText('')
      setStatus('success')
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      console.error('Error creating blog:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const handleLike = async (id, index) => {
    if (!id) return
    try {
      const res = await axios.put(`${import.meta.env.VITE_API_URL}/blogs/${id}/like`)
      const updated = [...posts]
      updated[index].likes = res.data.likes
      setPosts(updated)
    } catch (error) {
      console.error('Error liking blog:', error)
    }
  }

  const handleDelete = async (id, index) => {
    if (!id) return
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/blogs/${id}`, { data: { uid: currentUser.uid } })
      const updated = posts.filter((_, i) => i !== index)
      setPosts(updated)
    } catch (error) {
      console.error('Error deleting blog:', error)
    }
  }

  const changeMode = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-indigo-900 text-white p-6 flex flex-col items-center relative">
        {/* Dark mode toggle */}
        <span id="darkmode" role="button" tabIndex="0" onClick={changeMode} onKeyDown={changeMode}>
          <div className="darkmode_icon cursor-pointer mb-6">
            {[...Array(8)].map((_, i) => <span key={i} className="ray"></span>)}
          </div>
        </span>

        <h1 className="text-4xl font-extrabold mb-8 tracking-wide">My Blogs</h1>

        {/* Blog form - only admin */}
        {currentUser && currentUser.uid === '2miqxfYbuqTYrCxI76z5EAlNkn62' && (
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/3 space-y-4 mb-12 bg-black/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-indigo-500"
          >
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Write your blog..."
              value={text}
              onChange={e => setText(e.target.value)}
              rows="5"
              className="w-full p-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              disabled={status === 'saving'}
              className={`w-full text-white px-6 py-3 rounded-lg font-semibold transition-transform duration-300 ease-in-out ${
                status === 'success' ? 'bg-green-500' :
                status === 'error' ? 'bg-red-500' :
                'bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 hover:shadow-lg'
              }`}
            >
              {status === 'saving' ? 'Saving...' :
               status === 'success' ? '✓ Blog Saved!' :
               status === 'error' ? '✗ Error Saving' :
               'Send'}
            </button>
          </form>
        )}

        {/* Blog posts */}
        <div className="w-full md:w-1/3 space-y-6 mb-16">
          {posts.map((post, index) => (
            <div key={index} className="p-6 bg-black/70 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 hover:border-indigo-500 transition">
              <h2 className="text-2xl font-bold mb-2 text-indigo-300">{post.subject}</h2>
              <p className="text-gray-300 mb-4">{post.text}</p>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleLike(post._id, index)}
                  className="bg-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                >
                  👍 Like {post.likes}
                </button>
                {currentUser?.uid === '2miqxfYbuqTYrCxI76z5EAlNkn62' && (
                  <button
                    onClick={() => handleDelete(post._id, index)}
                    className="bg-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                  >
                    🗑️ Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Logos carousel */}
        <div className="blogs-wrapper w-full md:w-1/2">
          <div className="inner grid grid-cols-2 md:grid-cols-3 gap-6" style={{ '--quantity': logos.length }}>
            {logos.map((logo, index) => (
              <div key={index} className="card bg-black/60 rounded-xl shadow-lg flex items-center justify-center p-4 hover:scale-105 transition" style={{ '--index': index, '--color-card': '142, 202, 252' }}>
                <div className="img">
                  <img src={logo} alt={`logo-${index}`} className="w-20 h-20 object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blogs

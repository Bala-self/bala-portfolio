import contvideo from '../assets/cont.mp4'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Contact = () => {
  const [showCard, setShowCard] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(true)
    }, 6000)
    return () => clearTimeout(timer)
  }, [])

const [name , setName] = useState('')
const [email , setEmail] = useState('')
const [message , setMessage] = useState('')
const [status, setStatus] = useState('idle')




  const handleSubmit = async () => {
    setStatus('sending')
    try {
      const res = await axios.post('http://localhost:4000/contact', { name, email, message });
      if (res.data.message === 'success') {
        setStatus('success')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  

















  return (
    <section id="contact" className="relative min-h-screen text-white flex items-center justify-center">
      <video
        src={contvideo}
        autoPlay
        muted
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      ></video>

      <div className="absolute inset-0 bg-black/40"></div>

      {showCard && (
  <div className="relative md:absolute md:left-40 md:right-40 md:top-4 md:bottom-4 w-full md:w-1/3 
                  flex items-center justify-center p-6 md:p-8 bg-black/70 backdrop-blur-md 
                  rounded-2xl shadow-2xl z-10 jello-horizontal">
    <div className="max-w-md w-full">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Get in Touch</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded bg-white/70 text-gray-800 focus:outline-none"
         onChange={(e) => setName(e.target.value)}/>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-white/70 text-gray-800 focus:outline-none"
         onChange={(e) => setEmail(e.target.value)}/>
        <textarea
          placeholder="Message"
          rows="4"
          className="w-full p-3 rounded bg-white/70 text-gray-800 focus:outline-none"
         onChange={(e) => setMessage(e.target.value)}/>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={status === 'sending'}
          className={`w-full text-white px-6 py-3 rounded-full font-semibold transition-transform duration-300 ease-in-out ${
            status === 'success' ? 'bg-green-500' :
            status === 'error' ? 'bg-red-500' :
            'bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 hover:shadow-lg'
          }`}
        >
          {status === 'sending' ? 'Sending...' : 
           status === 'success' ? '✓ Message Sent!' : 
           status === 'error' ? '✗ Error Sending' : 
           'Send Message'}
        </button>
      </div>
    </div>
  </div>
)}

    </section>
  )

}

export default Contact

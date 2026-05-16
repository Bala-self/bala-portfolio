import myimage from '../assets/myimg.png'

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-indigo-950 text-white">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-24">
        <div className="md:w-1/2 space-y-8">

         <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent 
               bg-gradient-to-r from-indigo-400 to-pink-500 text-pop-up-top"> 
               Hi, I'm Balakrishnan M
               </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-300">
            MERN Stack Developer
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I specialize in building full-stack web applications using MongoDB, Express, React, and Node.js. 
            My focus is on creating scalable, efficient, and user-friendly solutions with clean architecture, 
            premium UI design, and seamless backend integration.
          </p>
          <div className="flex space-x-6">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-8 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition">
              GET IN TOUCH
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition">
              VIEW RESUME
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 blur-lg opacity-70 animate-pulse"></div>
            <img
              src={myimage}
              alt="Profile"
              className="relative w-72 h-72 rounded-full border-4 border-indigo-500 shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio

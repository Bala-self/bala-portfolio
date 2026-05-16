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
import video from '../assets/vi.mp4'

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: html5 },
    { name: 'CSS3', icon: css3 },
    { name: 'JavaScript', icon: js },
    { name: 'Node.js', icon: nodejs },
    { name: 'React', icon: react },
    { name: 'Tailwind CSS', icon: tailwind },
    { name: 'Express.js', icon: express },
    { name: 'MongoDB', icon: mongodb },
    { name: 'Firebase', icon: firebase },
    { name: 'Git', icon: git },
    { name: 'GitHub', icon: github },
  ]

  return (
    <section
      id="skills"
      className="relative w-full min-h-dvh flex flex-col justify-center items-center px-4 sm:px-6 py-16 overflow-hidden"
    >

      {/* Background video — muted + playsInline required for mobile autoplay */}
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
        My Skills
      </h2>

      {/* Skills grid */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-5 md:gap-8 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center backdrop-blur-sm p-3 sm:p-5 rounded-xl border border-white/5 hover:border-indigo-500/40 hover:scale-105 transition duration-300"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-10 h-10 sm:w-14 sm:h-14 mb-2 sm:mb-3 drop-shadow-lg"
            />
            <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white text-center leading-tight">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Skills
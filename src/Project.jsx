import React from 'react';
import { motion } from 'framer-motion';
// Додадено: Импортирање на сликата директно
import UKIM from './assets/Logo-UKIM-big.png'; 
import Secure from './assets/istockphoto-2178739246-612x612.jpg';
import Portfolio from './assets/depositphotos_65828845-stock-photo-portfolio-written-on-notebook.jpg';
import Rubiks from  './assets/fancy-colorful-rubik-impossible-cube-puzzle-pictures-ai-generated-art_210643-1089.avif'

function Projects() {

  const projects = [
    {
      id: 1,
      title: "UKIM CAMPUS",
      stack: ["Java", "Android Studio", "OOP"],
      image: UKIM, 
      codeLink: "https://github.com/timko332/UKiM-CAMPUS",
      description: "A native Android navigation application tailored for university students. Integrates Google Maps API for interactive campus routing and leverages Firebase for robust backend data management. Built with Java focusing on clean architecture."
    },
    {
      id: 2,
      title: "Secure Chat",
      stack: ["Java", "Bluetooth API", "Sockets", "P2P"],
      image: Secure,
      codeLink: "https://github.com/timko332/Secure-Chat",
      description: "A peer-to-peer Android messaging application utilizing Bluetooth connectivity. Engineered secure, offline communication using Java socket programming, focusing on reliable device discovery and low-latency data transfer."
    },
    {
      id: 3,
      title: "Portfolio Website",
      stack: ["React", "Tailwind CSS", "Vite"],
      image: Portfolio,
      codeLink: "https://github.com/timko332/Portfolio",
      description: "A modern, bilingual portfolio showcasing my software engineering journey. Built with React and Tailwind CSS, featuring a custom Context API implementation for seamless English/Macedonian localization, responsive design, and fluid animations."
    },
    {
      id: 4,
      title: "Rubiks AI",
      stack: ["Python", "PyTorch", "Deep Learning", "NumPy"],
      image: Rubiks,
      codeLink: "https://github.com/timko332/Rubiks-Cube-AI",
      description: "An advanced AI-powered Rubik's Cube solver built with Python and PyTorch. Implements a custom Residual Network architecture utilizing Curriculum Learning and Experience Replay to achieve high-speed solving capabilities."
    },
  ];

  return (
    <div name="projects" className="w-full min-h-screen bg-[#0f172a] text-slate-300 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-16 text-center md:text-left"
        >
          <p className="text-4xl font-bold inline border-b-4 border-[#38bdf8] text-white">
            Featured Projects
          </p>
          <p className="py-6 text-lg max-w-2xl">
            Some things I've built. Hover over the cards to see the details or check out the code directly.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          
          {projects.map((project, index) => (

            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col md:flex-row gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >

              <div className="w-full md:w-3/5 relative group">
                
                <div className="bg-[#1e293b] h-8 rounded-t-xl flex items-center px-4 gap-2 border border-slate-700 border-b-0">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                <div className="relative overflow-hidden rounded-b-xl border border-slate-700 shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 opacity-80 hover:opacity-100 cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-[#38bdf8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              <div className={`w-full md:w-2/5 flex flex-col ${index % 2 === 1 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} items-center text-center`}>
                
                <h3 className="text-[#38bdf8] font-bold text-sm tracking-widest mb-2 uppercase">Featured Project</h3>
                <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
                
                <div className={`bg-[#112240] p-6 rounded-lg shadow-xl text-slate-300 text-sm leading-relaxed mb-6 border border-slate-700 ${index % 2 === 1 ? 'md:-mr-16 z-10' : 'md:-ml-16 z-10'} relative hover:border-[#38bdf8] transition-colors`}>
                  {project.description}
                </div>

                <ul className={`flex flex-wrap gap-4 text-xs font-mono text-slate-400 mb-8 ${index % 2 === 1 ? 'justify-end' : 'justify-start'}`}>
                  {project.stack.map((tech, i) => (
                    <li key={i} className="bg-[#1e293b] px-3 py-1 rounded-full text-[#38bdf8] border border-[#38bdf8]/20">
                        {tech}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-6">
                  <a href={project.codeLink} target="_blank" rel="noreferrer" className="text-white hover:text-[#38bdf8] transition-colors" title="View Code on GitHub">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                  </a>
                </div>

              </div>

            </motion.div>
          ))}
          
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mt-20"
        >
            <a 
              href="https://github.com/timko332" 
              target="_blank" 
              rel="noopener noreferrer"
            >
                <button className="text-white border-2 border-[#38bdf8] px-8 py-3 rounded-md hover:bg-[#38bdf8] hover:text-[#0f172a] font-bold transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                    See More on GitHub
                </button>
            </a>
        </motion.div>

      </div>
    </div>
  );
}

export default Projects;
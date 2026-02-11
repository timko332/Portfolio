import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLanguage } from './context/LanguageContext'; 
import ProfileImg from './assets/Timotej_Risteski.JPG'; 

function Home() {
  const { t } = useLanguage();

  return (
    <div name="home" className="w-full min-h-screen bg-[#0f172a] text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between min-h-screen">
        
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col justify-center md:w-1/2 space-y-6 pt-24 md:pt-0 pr-0 md:pr-10 z-10"
        >
            <p className="text-[#38bdf8] text-lg font-bold tracking-wide">
               {t.home.greeting}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
              Timotej Risteski
            </h1>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-400">
              {t.home.role}
            </h2>
            <p className="text-slate-400 py-4 max-w-lg text-lg leading-relaxed">
              {t.home.desc}
            </p>
            <div>
              <Link to="projects" smooth={true} duration={500}>
                <button className="group text-white border-2 border-[#38bdf8] px-6 py-3 my-2 flex items-center hover:bg-[#38bdf8] hover:border-[#38bdf8] hover:text-[#0f172a] transition-all duration-300 rounded-md font-bold text-lg cursor-pointer">
                  {t.home.btn}
                  <span className="group-hover:rotate-90 duration-300 ml-3">
                    ➜
                  </span>
                </button>
              </Link>
            </div>
        </motion.div>

        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="md:w-1/2 flex justify-center items-center mt-12 md:mt-0 relative"
        >
          <div className="relative w-auto max-w-xs md:max-w-md">
            <img
              src={ProfileImg} 
              alt="Timotej Risteski"
              className="block rounded-2xl w-full h-auto object-contain shadow-2xl border border-slate-700"
            />
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Home;

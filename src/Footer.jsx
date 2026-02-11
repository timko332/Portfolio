import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';
import { useLanguage } from './context/LanguageContext';

function Footer() {
  const { t } = useLanguage(); 

  const toggleHome = () => {
    scroll.scrollToTop();
  };


  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact }
  ];

  return (
    <footer className="bg-[#0f172a] border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 
                className="text-2xl font-bold text-white cursor-pointer tracking-wider"
                onClick={toggleHome}
            >
                Timotej Risteski
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                {t.footer.desc}
            </p>
          </motion.div>


          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-white font-bold text-lg mb-2">{t.footer.explore}</h3>
            <ul className="space-y-2">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <Link 
                            to={item.id}
                            smooth={true}
                            duration={500}
                            className="text-slate-400 hover:text-[#38bdf8] hover:translate-x-2 transition-all duration-300 cursor-pointer inline-block text-sm"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
          </motion.div>


          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-white font-bold text-lg mb-2">{t.footer.connect}</h3>
            <div className="flex space-x-4">
                
                <a 
                    href="https://github.com/timko332" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 bg-[#1e293b] rounded-full text-white hover:bg-[#38bdf8] hover:text-[#0f172a] transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>


                <a 
                    href="https://www.linkedin.com/in/timotej-risteski-a58199244/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 bg-[#1e293b] rounded-full text-white hover:bg-[#38bdf8] hover:text-[#0f172a] transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>

            </div>
          </motion.div>

        </div>


        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
            <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Timotej Risteski. {t.footer.rights}
            </p>
            
            <div 
                className="mt-4 md:mt-0 p-3 bg-[#38bdf8]/10 rounded-full cursor-pointer hover:bg-[#38bdf8] group transition-all duration-300"
                onClick={toggleHome}
            >
                 <svg className="w-5 h-5 text-[#38bdf8] group-hover:text-[#0f172a] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
            </div>
        </motion.div>

      </div>
      

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#38bdf8]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

    </footer>
  );
}

export default Footer;
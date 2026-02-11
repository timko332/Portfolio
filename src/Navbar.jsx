import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from './context/LanguageContext'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [scrollPercentage, setScrollPercentage] = useState(0);
  

  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };


  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed w-full z-50 top-0 start-0 border-b border-white/20 bg-[#0f172a]/80 backdrop-blur-md shadow-lg text-white transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between py-4 relative">
            
            <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
              onSetActive={handleSetActive}
            >
                <span className="self-center text-xl md:text-2xl font-bold whitespace-nowrap drop-shadow-md tracking-wide">
                  Timotej Risteski
                </span>
            </Link>


            <div className="hidden md:flex items-center gap-6">
                

                <button 
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-[#38bdf8] transition-colors border border-slate-600 px-3 py-1 rounded-full hover:border-[#38bdf8]"
                >
                    <span className={language === 'en' ? 'text-[#38bdf8]' : 'text-slate-500'}>EN</span>
                    <span className="text-slate-600">|</span>
                    <span className={language === 'mk' ? 'text-[#38bdf8]' : 'text-slate-500'}>MK</span>
                </button>

                <Link 
                  to="contact" 
                  smooth={true} 
                  duration={500} 
                  className="text-white bg-[#38bdf8] font-semibold rounded px-5 py-2 transition-all shadow-md hover:shadow-lg cursor-pointer hover:bg-white hover:text-black hover:-translate-y-0.5"
                >
                  {t.nav.contactMe}
                </Link>
            </div>


            <button 
              onClick={() => setIsOpen(!isOpen)}
              type="button" 
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white/80 rounded-lg md:hidden hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                 <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                 </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>

            <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
              <ul className="font-medium flex space-x-8">
                {navItems.map((item) => (
                    <li key={item.id}>
                     <Link 
                       to={item.id} 
                       smooth={true} 
                       duration={500} 
                       spy={true} 
                       offset={-80} 
                       activeClass="text-[#38bdf8] font-bold scale-110"
                       className="block py-2 px-3 rounded bg-transparent p-0 cursor-pointer hover:text-[#38bdf8] transition-all hover:scale-105"
                       onSetActive={handleSetActive}
                     >
                       {item.label}
                     </Link>
                   </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-[#0f172a] border-t border-white/10"
            >
              <ul className="flex flex-col p-4 font-medium space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link 
                      to={item.id} 
                      smooth={true} 
                      duration={500} 
                      spy={true} 
                      offset={-80} 
                      activeClass="text-[#38bdf8] font-bold"
                      className="block py-2 px-3 rounded hover:bg-white/10 hover:text-[#38bdf8] transition-colors cursor-pointer"
                      onClick={() => setIsOpen(false)}
                      onSetActive={handleSetActive}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                

                <li className="flex justify-center py-2">
                     <button 
                        onClick={toggleLanguage}
                        className="flex items-center gap-3 text-sm font-bold text-slate-300 border border-slate-600 px-4 py-2 rounded-full"
                    >
                        <span className={language === 'en' ? 'text-[#38bdf8]' : 'text-slate-500'}>English</span>
                        <span className="text-slate-600">|</span>
                        <span className={language === 'mk' ? 'text-[#38bdf8]' : 'text-slate-500'}>Македонски</span>
                    </button>
                </li>

                <li className="mt-2">
                    <Link 
                      to="contact"
                      smooth={true} 
                      duration={500}
                      className="block py-3 px-3 text-[#0f172a] bg-[#38bdf8] font-bold rounded-lg text-center shadow-lg cursor-pointer"
                      onClick={() => setIsOpen(false)}
                      onSetActive={handleSetActive}
                    >
                      {t.nav.contactMe}
                    </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>


      <div className="fixed right-1 top-24 bottom-8 w-1.5 z-40 hidden md:block">
         <div className="absolute right-0 top-0 h-full w-full bg-[#1e293b]/50 rounded-full"></div>
         <div 
            className="absolute right-0 top-0 w-full bg-[#38bdf8] shadow-[0_0_15px_#38bdf8] rounded-full"
            style={{ height: `${scrollPercentage}%` }}
         ></div>
         <div 
            className="absolute right-4 flex flex-col items-end pointer-events-none transition-all duration-100 ease-linear"
            style={{ 
              top: `${scrollPercentage}%`, 
              transform: 'translateY(-50%)' 
            }}
         >
             <div className="bg-[#38bdf8] text-[#0f172a] text-xs font-bold py-1 px-3 rounded-l-md shadow-lg uppercase tracking-wider whitespace-nowrap backdrop-blur-sm bg-opacity-90">
                {activeSection}
             </div>
             <div className="w-4 h-[2px] bg-[#38bdf8]"></div>
         </div>
      </div>
    </>
  )
}

export default Navbar
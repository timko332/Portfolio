import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './context/LanguageContext'; 

function About() {
  const { t } = useLanguage(); 

  return (
    <div name="about" className="w-full min-h-screen bg-[#0f172a] text-slate-300 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white inline-block border-b-4 border-[#38bdf8] pb-1">
            {t.about.title}
          </h2>
          <p className="py-6 text-lg max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>


        <div className="relative border-l-4 border-[#1e293b] ml-4 md:ml-10 space-y-12">
          
          {t.about.steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }} 
              transition={{ duration: 0.6, delay: index * 0.2 }} 
              className="relative pl-8 md:pl-12 group"
            >
              <span className="absolute -left-[14px] top-1 h-6 w-6 rounded-full bg-[#0f172a] border-4 border-[#38bdf8] group-hover:bg-[#38bdf8] transition-colors duration-300"></span>
              
              <h3 className="text-2xl font-bold text-white">{step.title}</h3>
              <span className="text-sm text-[#38bdf8] font-semibold tracking-wider">{step.tag}</span>
              <p className="mt-2 text-lg">
                {step.desc}
              </p>


              {index === 2 && (
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="bg-[#1e293b] text-[#38bdf8] px-3 py-1 rounded-full text-sm font-medium border border-[#38bdf8]/20">React</span>
                  <span className="bg-[#1e293b] text-[#38bdf8] px-3 py-1 rounded-full text-sm font-medium border border-[#38bdf8]/20">Tailwind</span>
                  <span className="bg-[#1e293b] text-[#38bdf8] px-3 py-1 rounded-full text-sm font-medium border border-[#38bdf8]/20">GitHub</span>
                </div>
              )}
            </motion.div>
          ))}

        </div>


        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
             {t.about.cards.map((card, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-4 border border-[#1e293b] rounded-lg hover:border-[#38bdf8] transition-colors duration-300"
                >
                    <h4 className="text-xl font-bold text-white">{card.title}</h4>
                    <p className="text-sm mt-2">{card.desc}</p>
                </motion.div>
             ))}
        </div>

      </div>
    </div>
  );
}

export default About;
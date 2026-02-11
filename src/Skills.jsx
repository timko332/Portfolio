import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useLanguage } from './context/LanguageContext'; 


const SkillCard = ({ name, percentage, description, variants }) => {
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + "%");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {

      const numericValue = parseInt(percentage);
      const controls = animate(count, numericValue, { duration: 1.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, percentage, count]);

  return (
    <motion.div 
      ref={ref}
      variants={variants}
      className="bg-[#1e293b] p-6 rounded-xl shadow-lg hover:shadow-[#38bdf8]/20 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex justify-between items-end mb-2">
        <h3 className="text-xl font-bold text-white">{name}</h3>

        <motion.span className="text-[#38bdf8] font-bold">
          {rounded}
        </motion.span>
      </div>

      <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">

        <motion.div 
          className="h-full bg-gradient-to-r from-blue-600 to-[#38bdf8] rounded-full shadow-[0_0_10px_#38bdf8]"
          initial={{ width: 0 }}
          whileInView={{ width: percentage }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        ></motion.div>
      </div>

      <p className="mt-4 text-sm text-slate-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

function Skills() {

  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <div name="skills" className="w-full min-h-screen bg-[#0f172a] text-slate-300 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center w-full h-full">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-[#38bdf8] text-white">
            {t.skills.title}
          </p>
          <p className="py-6 text-lg">
            {t.skills.subtitle}
          </p>
        </motion.div>


        <motion.div 
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-2 sm:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          
          {t.skills.list.map((skill) => (
            <SkillCard 
              key={skill.id}
              {...skill} 
              variants={cardVariants}
            />
          ))}

        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
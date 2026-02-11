import React, { useState } from 'react'; // Додадено useState
import { motion } from 'framer-motion';
import { useLanguage } from './context/LanguageContext';

function Contact() {
    const { t } = useLanguage();
    
    // Состојби за менаџирање на статусот на праќање
    const [status, setStatus] = useState("idle"); // idle, sending, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData(e.target);
        
        try {
            const response = await fetch("https://formsubmit.co/ajax/risteskitimotej@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("success");
                e.target.reset(); // Ресетирање на формата по успешно праќање
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div name="contact" className="w-full min-h-screen bg-[#0f172a] text-slate-300 py-24 flex justify-center items-center p-4">
            <div className="flex flex-col max-w-6xl w-full h-full">
                <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="pb-8 text-center"
                >
                    <p className="text-4xl font-bold inline border-b-4 border-[#38bdf8] text-white">
                        {t.contact.title}
                    </p>
                    <p className="py-6 text-lg">
                        {t.contact.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    {/* Лев дел - Информации */}
                    <motion.div 
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-center space-y-6"
                    >
                        <h3 className="text-3xl font-bold text-white">{t.contact.collabTitle}</h3>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            {t.contact.collabDesc}
                        </p>
                        
                        <div className="space-y-6 pt-4">
                            <div className="flex items-center space-x-4 group cursor-pointer">
                                <div className="p-3 bg-[#1e293b] rounded-full text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-[#0f172a] transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div>
                                    <p className="text-white font-bold group-hover:text-[#38bdf8] transition-colors">
                                        {t.contact.info.email}
                                    </p>
                                    <p className="text-slate-400 text-sm">risteskitimotej@gmail.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4 group cursor-pointer">
                                <div className="p-3 bg-[#1e293b] rounded-full text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-[#0f172a] transition-colors duration-300">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </div>
                                <div>
                                    <p className="text-white font-bold group-hover:text-[#38bdf8] transition-colors">
                                        {t.contact.info.socials}
                                    </p>
                                    <div className="flex gap-2 text-sm text-slate-400">
                                        <a href="https://www.linkedin.com/in/timotej-risteski-a58199244/" target="_blank" rel="noreferrer" className="hover:text-white underline">LinkedIn</a>
                                        <span>/</span>
                                        <a href="https://github.com/timko332" target="_blank" rel="noreferrer" className="hover:text-white underline">GitHub</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Десен дел - Форма */}
                    <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <form 
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4 bg-[#1e293b]/50 p-8 rounded-2xl border border-slate-700 shadow-2xl backdrop-blur-sm"
                        >
                            <input type="hidden" name="_captcha" value="false" />
                            
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-300 uppercase tracking-wide">
                                    {t.contact.labels.name}
                                </label>
                                <input 
                                    className="bg-[#0f172a] p-3 rounded-lg text-white border-2 border-transparent focus:border-[#38bdf8] focus:outline-none transition-colors" 
                                    type="text" 
                                    placeholder={t.contact.placeholders.name} 
                                    name="name" 
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-300 uppercase tracking-wide">
                                    {t.contact.labels.email}
                                </label>
                                <input 
                                    className="bg-[#0f172a] p-3 rounded-lg text-white border-2 border-transparent focus:border-[#38bdf8] focus:outline-none transition-colors" 
                                    type="email" 
                                    placeholder={t.contact.placeholders.email} 
                                    name="email" 
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-300 uppercase tracking-wide">
                                    {t.contact.labels.message}
                                </label>
                                <textarea 
                                    className="bg-[#0f172a] p-3 rounded-lg text-white border-2 border-transparent focus:border-[#38bdf8] focus:outline-none transition-colors resize-none" 
                                    name="message" 
                                    rows="6" 
                                    placeholder={t.contact.placeholders.message} 
                                    required
                                ></textarea>
                            </div>

                            <button 
                                disabled={status === "sending"}
                                className={`text-white border-2 border-[#38bdf8] bg-[#38bdf8]/10 hover:bg-[#38bdf8] hover:text-[#0f172a] px-4 py-3 my-4 mx-auto flex items-center rounded-lg font-bold text-lg transition-all duration-300 w-full justify-center shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] ${status === "sending" ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                                {status === "idle" && t.contact.btn}
                                {status === "sending" && "Праќање..."}
                                {status === "success" && "Пораката е пратена!"}
                                {status === "error" && "Грешка! Обиди се повторно."}
                            </button>
                            
                            {/* Порака за успех/грешка под копчето */}
                            {status === "success" && (
                                <p className="text-green-400 text-center text-sm font-bold">
                                    Ви благодариме! Ќе Ви одговорам набрзо.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>

                <div className="pt-20 text-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Timotej Risteski. {t.footer.rights}</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
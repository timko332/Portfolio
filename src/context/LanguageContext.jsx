import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
        contactMe: 'Contact Me',
      },
      home: {
        greeting: 'HI, MY NAME IS',
        role: "I'm a Computer Engineering Student.",
        desc: 'I am a Computer Technologies and Engineering student at FEEIT dedicated to bringing ideas to life through clean, efficient, and optimized code. I am currently focused on complex algorithmic design, advanced data structures, and developing high-performance software solutions from the ground up, including robust native Android applications and fully functional web platforms.',
        btn: 'View Work',
      },
      about: {
        title: 'My Journey',
        subtitle: 'From writing my first line of C code to developing robust Android and web applications. Here is how I became passionate about computer engineering.',
        steps: [
          { 
            title: 'FEEIT Student', 
            tag: 'ACADEMIC FOUNDATION', 
            desc: 'Currently studying Computer Technologies and Engineering. This is where I mastered the fundamentals: Algorithms, Data Structures, and Object-Oriented Programming with C and Java.' 
          },
          { 
            title: 'Expanding the Horizon', 
            tag: 'THE SHIFT', 
            desc: 'I realized that applying core programming logic to real-world user experiences is what excites me. I expanded my skill set beyond the console to include both modern web technologies and native Android app development.' 
          },
          { 
            title: 'Computer Engineering Focus', 
            tag: 'PRESENT DAY', 
            desc: 'Now I focus on building intelligent software solutions, from deep learning models and OS-level logic to scalable web and mobile applications.' 
          }
        ],
        cards: [
            { title: 'Problem Solver', desc: 'I enjoy breaking down complex problems into simple logic.' },
            { title: 'Fast Learner', desc: 'Adapting to new technologies and updates is my hobby.' },
            { title: 'Team Player', desc: 'Communication is just as important as code quality.' }
        ]
      },
      skills: {
        title: 'Skills & Proficiency',
        subtitle: 'My technical level and what I can do with each technology.',
        list: [
            { id: 1, name: 'C / C++', percentage: '90%', description: 'Strong academic foundation. Proficient in pointers, memory management, and data structures.' },
            { id: 2, name: 'React.js', percentage: '85%', description: 'Building interactive SPAs with Hooks, Context API, and custom reusable components.' },
            { id: 3, name: 'Java', percentage: '80%', description: 'Object-Oriented Programming (OOP), multi-threading, and building robust backend logic.' },
            { id: 4, name: 'Android Studio', percentage: '65%', description: 'Building native mobile applications using Java, XML, and integrating external APIs.' },
            { id: 5, name: 'JavaScript', percentage: '85%', description: 'Deep understanding of DOM manipulation, async/await, and functional programming.' },
            { id: 6, name: 'Python', percentage: '80%', description: 'Used for scripting, automation, and basic data analysis tasks.' },
            { id: 7, name: 'Git & GitHub', percentage: '90%', description: 'Version control, branching strategies, and team collaboration workflows.' },
            { id: 8, name: 'SQL / Databases', percentage: '80%', description: 'Designing schemas, writing complex queries, and managing relational data.' }
        ]
      },
      contact: {
        title: 'Contact',
        subtitle: 'Submit the form below or shoot me an email - I check it daily.',
        collabTitle: "Let's Collaborate",
        collabDesc: "I am currently looking for new opportunities to start and develop my career. I am highly motivated to work hard, learn, and refine my technical skills. If you have any questions or a potential job opportunity, my inbox is always open and I will respond as quickly as possible.",
        labels: { name: 'Name', email: 'Email', message: 'Message' },
        placeholders: { name: 'John Doe', email: 'john@example.com', message: 'Hey Timotej...' },
        btn: "Let's Talk",
        info: { email: 'Email Me', socials: 'Socials' }
      },
      footer: {
        desc: 'A passionate Computer Technologies student at FEEIT, building modern web applications and exploring the future of tech.',
        explore: 'Explore',
        connect: 'Connect',
        rights: 'All rights reserved.'
      }
    },
    mk: {
      nav: {
        home: 'Почетна',
        about: 'За Мене',
        skills: 'Вештини',
        projects: 'Проекти',
        contact: 'Контакт',
        contactMe: 'Контактирај Ме',
      },
      home: {
        greeting: 'ЗДРАВО, ЈАС СУМ',
        role: "Студент по Компјутерско Инженерство.",
        desc: 'Јас сум студент по Компјутерски технологии и инженерство на ФЕИТ, посветен на претворање на идеите во реалност преку чист, ефикасен и оптимизиран код. Моментално сум фокусиран на комплексен алгоритамски дизајн, напредни структури на податоци и развој на софтверски решенија со високи перформанси од самиот почеток, вклучувајќи робусни нативни Android апликации и целосно функционални веб платформи.',
        btn: 'Види Проекти',
      },
      about: {
        title: 'Моето Патување',
        subtitle: 'Од пишувањето на мојата прва линија C код до развивање на робусни Android и веб апликации. Еве како се роди мојата пасија за компјутерското инженерство.',
        steps: [
          { 
            title: 'ФЕИТ Студент', 
            tag: 'АКАДЕМСКА ОСНОВА', 
            desc: 'Моментално студирам Компјутерски Технологии и Инженерство. Тука ги совладав основите: Алгоритми, Податочни Структури и Објектно-Ориентирано Програмирање со C и Java.' 
          },
          { 
            title: 'Проширување на хоризонтите', 
            tag: 'ПРЕСВРТ', 
            desc: 'Сфатив дека примената на основната програмска логика во реални кориснички искуства е она што ме возбудува. Го проширив моето знаење надвор од конзолата за да вклучам и модерни веб технологии и развој на нативни Android апликации.' 
          },
          { 
            title: 'Фокус на компјутерско инженерство', 
            tag: 'ДЕНЕСКА', 
            desc: 'Сега се фокусирам на интелигентни софтверски решенија – од модели за длабоко учење и логика на оперативни системи, до скалабилни веб и мобилни апликации.' 
          }
        ],
        cards: [
            { title: 'Решавање Проблеми', desc: 'Уживам да разложувам комплексни проблеми на едноставна логика.' },
            { title: 'Брзо Учам', desc: 'Адаптирањето на нови технологии и апдејти ми е хоби.' },
            { title: 'Тимски Играч', desc: 'Комуникацијата е исто толку важна колку и квалитетот на кодот.' }
        ]
      },
      skills: {
        title: 'Вештини & Знаење',
        subtitle: 'Моето техничко ниво и што можам да направам со секоја технологија.',
        list: [
            { id: 1, name: 'C / C++', percentage: '90%', description: 'Силна академска основа. Одлично познавање на покажувачи, менаџирање со меморија и податочни структури.' },
            { id: 2, name: 'React.js', percentage: '85%', description: 'Градење интерактивни SPA со Hooks, Context API и прилагодени компоненти за повеќекратна употреба.' },
            { id: 3, name: 'Java', percentage: '80%', description: 'Објектно-ориентирано програмирање (ООП), multi-threading и градење робусна backend логика.' },
            { id: 4, name: 'Android Studio', percentage: '65%', description: 'Градење нативни мобилни апликации користејќи Java, XML и интегрирање на надворешни API.' },
            { id: 5, name: 'JavaScript', percentage: '85%', description: 'Длабоко разбирање на DOM манипулација, async/await и функционално програмирање.' },
            { id: 6, name: 'Python', percentage: '80%', description: 'Користен за скриптирање, автоматизација и основни задачи за анализа на податоци.' },
            { id: 7, name: 'Git & GitHub', percentage: '90%', description: 'Контрола на верзии, стратегии за гранење (branching) и текови на тимска соработка.' },
            { id: 8, name: 'SQL / Databases', percentage: '80%', description: 'Дизајнирање шеми, пишување комплексни прашалници (queries) и управување со релациони податоци.' }
        ]
      },
      contact: {
        title: 'Контакт',
        subtitle: 'Пополни ја формата или испрати ми емаил - проверувам секојдневно.',
        collabTitle: "Ајде да соработуваме",
        collabDesc: "Во моментов барам нови можности за почеток и развој на мојата кариера. Подготвен сум активно да работам, да учам и да ги усовршувам моите вештини во струката. Доколку имате прашање или понуда за работа, моето сандаче е секогаш отворено и ќе Ви одговорам најбрзо што можам.",
        labels: { name: 'Име', email: 'Емаил', message: 'Порака' },
        placeholders: { name: 'Твоето име', email: 'tvojot@email.com', message: 'Здраво Тимотеј...' },
        btn: "Испрати",
        info: { email: 'Емаил', socials: 'Мрежи' }
      },
      footer: {
        desc: 'Студент на ФЕИТ со пасија за градење на модерни веб апликации и истражување на иднината на технологијата.',
        explore: 'Истражи',
        connect: 'Поврзи се',
        rights: 'Сите права се задржани.'
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'mk' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
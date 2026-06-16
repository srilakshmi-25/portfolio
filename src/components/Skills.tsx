import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Brain,
  Cpu,
  Cloud,
  BarChart3,
  Globe,
  Users,
  Terminal
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
}

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <Terminal size={22} />,
      color: 'from-blue-500 to-cyan-500 text-blue-500',
      skills: ['Python', 'Java', 'SQL', 'HTML5 & CSS3'],
    },
    {
      title: 'Generative AI & LLMs',
      icon: <Brain size={22} />,
      color: 'from-purple-500 to-pink-500 text-purple-500',
      skills: [
        'LangChain',
        'RAG (Retrieval-Augmented Generation)',
        'FAISS Vector DB',
        'Groq LLM API',
        'Sentence Transformers',
        'Multi-Agent Systems',
        'Prompt Engineering',
      ],
    },
    {
      title: 'AI / ML Technologies',
      icon: <Cpu size={22} />,
      color: 'from-indigo-500 to-purple-500 text-indigo-500',
      skills: [
        'Scikit-learn',
        'SVM (Support Vector Machines)',
        'Supervised Learning',
        'Deep Learning',
        'Neural Networks',
        'Data Preprocessing',
      ],
    },
    {
      title: 'Cloud Computing',
      icon: <Cloud size={22} />,
      color: 'from-sky-500 to-blue-500 text-sky-500',
      skills: [
        'AWS EC2',
        'AWS S3',
        'AWS RDS',
        'AWS IAM',
        'Cloud Architecture',
        'AWS Cloud Foundations',
      ],
    },
    {
      title: 'Data & BI',
      icon: <BarChart3 size={22} />,
      color: 'from-amber-500 to-orange-500 text-amber-500',
      skills: [
        'Microsoft Power BI',
        'DAX (Data Analysis Expressions)',
        'MySQL Database',
        'ETL Pipelines',
        'Data Visualization',
        'Statistical Analysis',
      ],
    },
    {
      title: 'Web & Tools',
      icon: <Globe size={22} />,
      color: 'from-emerald-500 to-teal-500 text-emerald-500',
      skills: [
        'Streamlit',
        'Git & GitHub',
        'Jupyter Notebook',
        'ReportLab',
        'PyPDF2',
        'Vite',
      ],
    },
    {
      title: 'CS Fundamentals',
      icon: <Code size={22} />,
      color: 'from-teal-500 to-cyan-500 text-teal-500',
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (OOP)',
        'DBMS (Database Management Systems)',
      ],
    },
    {
      title: 'Soft Skills',
      icon: <Users size={22} />,
      color: 'from-rose-500 to-pink-500 text-rose-500',
      skills: [
        'Problem Solving',
        'Communication',
        'Team Collaboration',
        'Quick Learner',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-[#0b0f19] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white"
          >
            My Skills
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1.5 bg-brand-500 rounded-full mx-auto mt-4 origin-center"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto"
          >
            An overview of the programming languages, database technologies, artificial intelligence frameworks, and cloud systems I work with.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-panel p-6 rounded-3xl flex flex-col justify-between hover:shadow-xl hover:shadow-brand-500/5 dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Header Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 transition-colors group-hover:bg-brand-50 dark:group-hover:bg-brand-900/10 ${category.color.split(' ').pop()}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                    {category.title}
                  </h3>
                </div>

                {/* Skills tags list */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-2.5 py-1 text-xs font-medium bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-800/60 rounded-lg group-hover:border-slate-200 dark:group-hover:border-slate-700/80 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Aesthetic indicator bar on bottom */}
              <div className="mt-5 w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full w-0 group-hover:w-full bg-gradient-to-r ${category.color.split(' ').slice(0, 2).join(' ')} transition-all duration-700 ease-out`} />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

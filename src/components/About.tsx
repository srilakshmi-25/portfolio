import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Calendar } from 'lucide-react';

export const About: React.FC = () => {
  const education = [
    {
      degree: 'B.Tech in Data Science',
      institution: 'Anil Neerukonda Institute of Technology & Sciences (ANITS)',
      duration: '2023 – 2027',
      grade: 'CGPA: 9.4 / 10',
      description: 'Consistently ranked among the top academic performers. Coursework includes Data Structures & Algorithms, Machine Learning, Deep Learning, Cloud Computing, DBMS, Data Analytics, and OOP.',
    },
    {
      degree: 'Class XII (PCM)',
      institution: 'Sri Chaitanya Junior College',
      duration: '2021 – 2023',
      grade: 'Aggregate: 96.7%',
      description: 'Board of Intermediate Education, Andhra Pradesh. Specialized in Physics, Chemistry, and Mathematics.',
    },
    {
      degree: 'Class X',
      institution: 'AP Residential School',
      duration: '2020 – 2021',
      grade: 'Aggregate: 99.5%',
      description: 'Board of Secondary Education, Andhra Pradesh. Achieved department honors for outstanding academic performance.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0c1220] transition-colors duration-300">
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
            About Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1.5 bg-brand-500 rounded-full mx-auto mt-4 origin-center"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Summary Column */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 rounded-3xl"
            >
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">
                Professional Profile
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                I am a results-driven Data Science undergraduate with a passion for designing predictive models, training machine learning classifiers, and deploying scalable architectures. I love using technology to solve concrete, real-world problems.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                My work spans classical machine learning, deep neural networks, and generative AI systems (RAG, FAISS, and multi-agent setups). I pair these with cloud computing expertise, utilizing AWS resources (S3, EC2, RDS) to build resilient web architectures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel p-8 rounded-3xl"
            >
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">
                Career Objective
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Seeking a challenging internship in Data Science, AI/ML, or Cloud Computing. Eager to collaborate with engineering teams, apply my technical skills, and deliver robust software systems that add measurable value to end users.
              </p>
            </motion.div>
          </div>

          {/* Right Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 rounded-3xl"
            >
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <BookOpen className="text-brand-500" size={20} />
                Education Details
              </h3>

              {/* Timeline */}
              <div className="relative pl-6 sm:pl-8 border-l border-slate-200 dark:border-slate-800 space-y-8">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline Node Badge */}
                    <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-brand-500 shadow-sm">
                      <GraduationCap size={16} />
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                          {item.degree}
                        </h4>
                        <span className="inline-flex items-center text-xs text-brand-500 font-semibold bg-brand-50 dark:bg-brand-900/20 px-2 py-0.5 rounded-md self-start sm:self-center">
                          {item.grade}
                        </span>
                      </div>

                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {item.institution}
                      </p>

                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <Calendar size={12} />
                        <span>{item.duration}</span>
                      </div>

                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

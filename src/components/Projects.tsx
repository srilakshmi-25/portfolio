import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Bot, Cpu, Database, BarChart3, CheckCircle2 } from 'lucide-react';

const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface Project {
  title: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  tech: string[];
  achievements: string[];
  github: string;
  live?: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'AI Interview Preparation Agent',
      category: 'Generative AI & Multi-Agent',
      icon: <Bot className="text-purple-500" size={24} />,
      description: 'An intelligent interview preparation platform that analyzes resumes against job descriptions, computes skill-gaps, and simulates personalized interview pipelines.',
      tech: ['Python', 'Streamlit', 'Google Gemini API', 'ReportLab', 'PyPDF2', 'Multi-Agent Architecture'],
      achievements: [
        'Built resume-to-job analysis with skill gap checks and readiness scoring.',
        'Generates customized HR and technical questions with model answers.',
        'Implements automated PDF roadmap downloads using ReportLab.',
        'Deployed securely on Streamlit Cloud with multi-agent orchestration.',
      ],
      github: 'https://github.com/srilakshmi-25',
      live: 'https://streamlit.io', // Placeholder for streamlit cloud deployment
    },
    {
      title: 'AI-Powered PDF Chatbot using RAG',
      category: 'Generative AI & LLMs',
      icon: <Cpu className="text-indigo-500" size={24} />,
      description: 'A Retrieval-Augmented Generation chatbot enabling real-time conversations with uploaded PDF documents through highly optimized semantic retrieval.',
      tech: ['Python', 'LangChain', 'Groq API', 'FAISS Vector DB', 'Hugging Face Embeddings', 'Streamlit'],
      achievements: [
        'Integrated Sentence Transformers (all-MiniLM-L6-v2) for semantic search.',
        'Connected Groq LLM API for low-latency, high-speed chatbot inference.',
        'Applied prompt engineering strategies to eliminate AI hallucinations.',
        'Engineered an interactive Streamlit UI for dynamic document uploading.',
      ],
      github: 'https://github.com/srilakshmi-25',
      live: 'https://streamlit.io',
    },
    {
      title: 'Virtual Library Management System',
      category: 'Cloud Architecture & Web',
      icon: <Database className="text-sky-500" size={24} />,
      description: 'A highly available, cloud-native library management system engineered to host books and online digital media securely in the cloud.',
      tech: ['AWS (S3, EC2, RDS)', 'Python', 'MySQL', 'HTML5', 'CSS3'],
      achievements: [
        'Architected core system utilizing AWS S3 (storage) and EC2 (hosting).',
        'Configured AWS RDS MySQL database with strict IAM permissions.',
        'Designed a responsive interface for quick digital asset retrieval.',
        'Applied cloud scaling best practices to ensure high service availability.',
      ],
      github: 'https://github.com/srilakshmi-25',
    },
    {
      title: 'Interactive Data Analytics Dashboard',
      category: 'Data Engineering & BI',
      icon: <BarChart3 className="text-amber-500" size={24} />,
      description: 'An end-to-end business intelligence dashboard detailing business operations performance through automated ETL pipelines.',
      tech: ['Power BI', 'DAX', 'Microsoft Excel', 'MySQL', 'ETL Processes'],
      achievements: [
        'Created high-performance data cleaning and ETL scripts in Power BI.',
        'Wrote custom DAX expressions for complex KPI calculations.',
        'Designed rich dashboard layouts, improving analytics user experience.',
        'Integrated MySQL database for automated, self-service data updates.',
      ],
      github: 'https://github.com/srilakshmi-25',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-[#0c1220] transition-colors duration-300">
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
            Featured Projects
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
            A curated list of projects that demonstrate my experience in artificial intelligence, machine learning, cloud infrastructure, and data analytics.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:shadow-2xl hover:shadow-brand-500/5 dark:hover:shadow-black/50 transition-all duration-300 border border-slate-100 dark:border-slate-800/40 relative group overflow-hidden"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-slate-100 dark:bg-slate-800/70 rounded-2xl group-hover:bg-brand-50 dark:group-hover:bg-brand-900/10 transition-colors duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2.5 py-1 rounded-full">
                    Completed
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Key Contributions & Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((ach, aIndex) => (
                      <li key={aIndex} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle2 size={16} className="text-brand-500 mt-0.5 flex-shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Part */}
              <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-2 py-0.5 text-xs font-semibold bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-500 transition-colors gap-1.5"
                  >
                    <GithubIcon size={16} />
                    Codebase
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-500 transition-colors gap-1.5"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

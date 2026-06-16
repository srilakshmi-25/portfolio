import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Award, ShieldCheck, Code } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50 dark:bg-[#0b0f19] transition-colors duration-300">
      {/* Background blobs for premium depth */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-brand-100 dark:bg-brand-900/10 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="md:col-span-7 text-center md:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 text-xs font-semibold tracking-wide"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Available for Internships
            </motion.div>

            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white leading-tight tracking-tight"
              >
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-brand-500 via-indigo-600 to-violet-500 dark:from-brand-400 dark:via-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
                  Polumuru Sri Lakshmi
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300 font-display"
              >
                B.Tech Data Science Undergraduate · ANITS
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              Results-driven student with hands-on expertise in Java, machine learning, Generative AI (LangChain, RAG), and AWS Cloud. Passionate about engineering intelligent models, data pipelines, and scalable cloud solutions.
            </motion.p>

            {/* Quick stats badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center md:justify-start gap-3 pt-2"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-400">
                <Code size={14} className="text-brand-500" />
                <span>300+ LeetCode Solved</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-400">
                <Award size={14} className="text-indigo-500" />
                <span>AWS Certified Foundations</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-400">
                <ShieldCheck size={14} className="text-violet-500" />
                <span>HackerRank 5-Star (Python/Java)</span>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-brand-500 to-indigo-600 hover:from-brand-600 hover:to-indigo-700 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all duration-200 active:scale-95 group"
              >
                Let's Connect
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resume.docx"
                download="Polumuru_SriLakshmi_Resume.docx"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right Image Column */}
          <div className="md:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80"
            >
              {/* Decorative backgrounds */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500 to-violet-500 rounded-3xl rotate-6 blur-md opacity-20 dark:opacity-40 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500 to-emerald-500 rounded-3xl -rotate-6 blur-md opacity-10 dark:opacity-30"></div>
              
              {/* Photo Frame Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900 group">
                <img
                  src={profileImg}
                  alt="Polumuru Sri Lakshmi"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <p className="text-white text-sm font-semibold tracking-wide">Visakhapatnam, India</p>
                </div>
              </div>

              {/* Floating tech nodes */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 dark:border-slate-700 animate-float">
                <span className="text-xl">🐍</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 dark:border-slate-700 animate-float-delayed">
                <span className="text-xl">☁️</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

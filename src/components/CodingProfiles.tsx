import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Code2 } from 'lucide-react';

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

const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

interface ProfileCard {
  name: string;
  url: string;
  icon: React.ReactNode;
  stat: string;
  description: string;
  hoverColor: string;
  shadowColor: string;
}

export const CodingProfiles: React.FC = () => {
  const profiles: ProfileCard[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/srilakshmi-polumuru-ab333a359/',
      icon: <LinkedinIcon size={28} className="text-[#0077B5]" />,
      stat: 'Data Science Student',
      description: 'Professional networking, industry connections, and career updates.',
      hoverColor: 'hover:border-[#0077B5]/30 hover:bg-[#0077B5]/5',
      shadowColor: 'group-hover:shadow-[#0077B5]/10',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/srilakshmi-25',
      icon: <GithubIcon size={28} className="text-slate-900 dark:text-white" />,
      stat: 'Open Source Portfolio',
      description: 'Code repositories, AI Interview agents, RAG projects, and contributions.',
      hoverColor: 'hover:border-slate-800/30 dark:hover:border-slate-200/20 hover:bg-slate-50 dark:hover:bg-slate-800/20',
      shadowColor: 'group-hover:shadow-slate-500/10',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/SrilakshmiPolumuru/',
      icon: <Code2 size={28} className="text-[#FFA116]" />,
      stat: '300+ Problems Solved',
      description: 'Algorithmic efficiency, data structures mastery, and daily challenges.',
      hoverColor: 'hover:border-[#FFA116]/30 hover:bg-[#FFA116]/5',
      shadowColor: 'group-hover:shadow-[#FFA116]/10',
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/srilakshmipolum',
      icon: <Award size={28} className="text-[#2EC866]" />,
      stat: '5-Star (Python & Java)',
      description: 'Problem solving credentials, verified skills badges, and syntax challenges.',
      hoverColor: 'hover:border-[#2EC866]/30 hover:bg-[#2EC866]/5',
      shadowColor: 'group-hover:shadow-[#2EC866]/10',
    },
  ];

  return (
    <section id="profiles" className="py-20 bg-white dark:bg-[#0c1220] transition-colors duration-300">
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
            Coding Profiles
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
            Check out my performance, open-source repositories, and problem-solving badges across various platforms.
          </motion.p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`glass-panel p-6 rounded-3xl flex flex-col justify-between border border-slate-100 dark:border-slate-800/40 shadow-sm transition-all duration-300 group ${profile.hoverColor} ${profile.shadowColor} hover:shadow-xl hover:-translate-y-1`}
            >
              <div>
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl group-hover:scale-105 transition-transform duration-300">
                    {profile.icon}
                  </div>
                  <ArrowUpRight size={18} className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  {profile.name}
                </h3>

                <p className="text-xs font-semibold text-brand-500 mt-1">
                  {profile.stat}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                  {profile.description}
                </p>
              </div>

              {/* Dynamic Action Trigger Label */}
              <div className="pt-5 flex items-center text-xs font-bold text-slate-500 group-hover:text-brand-500 transition-colors gap-1">
                <span>Visit Profile</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

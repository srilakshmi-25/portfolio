import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, CheckCircle, GraduationCap, Users2, Code2 } from 'lucide-react';

interface Achievement {
  title: string;
  metric: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export const Achievements: React.FC = () => {
  const list: Achievement[] = [
    {
      title: 'LeetCode Problem Solving',
      metric: '300+ Solved',
      description: 'Solved standard interview problems spanning arrays, binary search, dynamic programming, graphs, and trees.',
      icon: <Code2 size={24} />,
      color: 'from-orange-500/10 to-amber-500/10 text-orange-500 dark:text-amber-400',
    },
    {
      title: 'HackerRank Badges',
      metric: '5-Star Java & Python',
      description: 'Awarded gold badges for coding efficiency, syntax mastery, data structures, and script debugging.',
      icon: <Trophy size={24} />,
      color: 'from-emerald-500/10 to-green-500/10 text-emerald-500 dark:text-emerald-400',
    },
    {
      title: 'Competitive Chess',
      metric: 'District Champion',
      description: 'Prize-winning player at the district and university levels. Highlights analytical logic, strategic planning, and patience.',
      icon: <Trophy size={24} />,
      color: 'from-rose-500/10 to-pink-500/10 text-rose-500 dark:text-pink-400',
    },
    {
      title: 'AWS Workshop Organizer',
      metric: '200+ Participants',
      description: 'Designed curriculum and successfully facilitated a hands-on workshop on AWS cloud deployment basics.',
      icon: <Users2 size={24} />,
      color: 'from-blue-500/10 to-indigo-500/10 text-blue-500 dark:text-indigo-400',
    },
    {
      title: 'Academic Performance',
      metric: '9.4 B.Tech CGPA',
      description: 'Consistently ranked among the top department performers at ANITS. Aggregate 99.5% in Class X and 96.7% in Class XII.',
      icon: <GraduationCap size={24} />,
      color: 'from-violet-500/10 to-purple-500/10 text-violet-500 dark:text-purple-400',
    },
    {
      title: 'Hackathon Coordinator',
      metric: 'National Level',
      description: 'Coordinated technical events, speaker tracks, and workspace logistics for national level programming hackathons.',
      icon: <CheckCircle size={24} />,
      color: 'from-teal-500/10 to-emerald-500/10 text-teal-500 dark:text-emerald-400',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-50 dark:bg-[#0b0f19] transition-colors duration-300">
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
            Achievements & Awards
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
            Milestones reflecting technical consistency, competitive logic, academic drive, and leadership capabilities.
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass-panel p-6 rounded-3xl flex items-start gap-4 border border-slate-100 dark:border-slate-800/40 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon Frame */}
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${ach.color} flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                {ach.icon}
              </div>

              {/* Text details */}
              <div className="space-y-1">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  {ach.title}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  {ach.metric}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

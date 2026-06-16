import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckSquare, Award, BadgeCheck } from 'lucide-react';

interface Job {
  role: string;
  organization: string;
  duration: string;
  bullets: string[];
}

interface Certification {
  name: string;
  issuer: string;
  description: string;
}

export const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      role: 'Cloud Computing Intern',
      organization: 'Andhra Pradesh State Skill Development Corporation (APSSDC)',
      duration: '2024',
      bullets: [
        'Deployed and configured scalable cloud environments utilizing Amazon EC2, S3, and RDS resources.',
        'Applied IAM roles and cloud security configurations following AWS infrastructure best practices.',
        'Trained in core cloud architectural design: high availability, fault tolerance, scalability, and cost optimization.',
      ],
    },
    {
      role: 'Technical Workshop Facilitator – Cloud Computing',
      organization: 'ANITS Data Science Department',
      duration: '2024',
      bullets: [
        'Designed curriculum and delivered hands-on AWS training to a group of 200+ undergraduate students.',
        'Presented core deployment models (IaaS, PaaS, SaaS) and conducted live AWS console demonstrations.',
        'Mentored student groups in deploying basic web servers and static websites on Amazon Web Services.',
      ],
    },
  ];

  const certifications: Certification[] = [
    {
      name: 'AWS Cloud Foundations',
      issuer: 'Amazon Web Services (AWS)',
      description: 'Validation of knowledge in core AWS services, security, architecture, pricing, and support.',
    },
    {
      name: 'AWS Cloud Practitioner Essentials',
      issuer: 'Amazon Web Services (AWS)',
      description: 'Foundational understanding of AWS cloud concepts, global infrastructure, and security best practices.',
    },
    {
      name: 'HackerRank Problem Solving Certification',
      issuer: 'HackerRank',
      description: 'Certified proficiency in data structures, algorithmic techniques, and problem-solving structures.',
    },
    {
      name: 'HackerRank Gold Badge – Python (5-star)',
      issuer: 'HackerRank',
      description: 'Advanced ranking reflecting high-speed coding and language syntax mastery in Python.',
    },
    {
      name: 'HackerRank Gold Badge – Java (5-star)',
      issuer: 'HackerRank',
      description: 'Earned for core syntax, OOP, and data structures challenges in the Java learning track.',
    },
    {
      name: 'HackerRank Java & Python Certifications',
      issuer: 'HackerRank',
      description: 'Certified verification of OOP concepts, language structures, memory management, and debugging.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-[#0b0f19] transition-colors duration-300">
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
            Experience & Certifications
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
          
          {/* Left Column: Work Experience */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 rounded-3xl"
            >
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
                <Briefcase className="text-brand-500" size={20} />
                Work & Leadership
              </h3>

              {/* Jobs Timeline */}
              <div className="relative pl-6 border-l border-slate-200 dark:border-slate-800 space-y-8">
                {jobs.map((job, index) => (
                  <div key={index} className="relative">
                    {/* Bullet */}
                    <div className="absolute -left-[35px] top-1.5 w-6 h-6 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-brand-500 shadow-sm">
                      <Briefcase size={12} />
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h4 className="text-base font-bold text-slate-900 dark:text-white font-display">
                          {job.role}
                        </h4>
                        <span className="inline-flex items-center text-xs text-slate-500 dark:text-slate-400 font-medium bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded-md self-start sm:self-center gap-1">
                          <Calendar size={10} />
                          {job.duration}
                        </span>
                      </div>
                      
                      <p className="text-xs font-semibold text-brand-500">
                        {job.organization}
                      </p>

                      <ul className="space-y-2 pt-2">
                        {job.bullets.map((b, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <CheckSquare size={14} className="text-brand-500/80 mt-0.5 flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 rounded-3xl"
            >
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Award className="text-brand-500" size={20} />
                Certifications & Badges
              </h3>

              {/* Grid of Certs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2 }}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/50 flex flex-col justify-between hover:shadow-md transition-all duration-200"
                  >
                    <div>
                      <div className="flex items-center gap-1.5 text-brand-500 mb-2">
                        <BadgeCheck size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          {cert.issuer}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display leading-tight">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                        {cert.description}
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

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePortfolio } from '../../context/PortfolioContext';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();
  const { portfolio } = usePortfolio();

  const filters = ['All', 'Full Stack', 'Frontend', 'Backend'];

  // Default icon for projects from DB (no icon stored)
  const defaultIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>;

  const staticProjects = [
    {
      id: 1,
      title: 'Cloudonix',
      description: 'Full-stack cloud media management platform supporting image, video, and PDF upload with automatic URL generation, processing 500+ assets with third-party API integration.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Redis', 'JWT', 'REST API', 'Cloudflare', 'Render'],
      category: 'Full Stack',
      color: 'from-blue-500/20 to-cyan-500/20',
      accent: '#60A5FA',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 18a5 5 0 0 0-3.09-9.37A7 7 0 1 0 3 18h14z" />
          <polyline points="12 12 12 18" /><polyline points="9 15 12 18 15 15" />
        </svg>
      ),
      github: 'https://github.com/Shivam-75',
      live: '#',
      period: 'May – Jun 2026',
    },
    {
      id: 2,
      title: 'Gate Entry System – Parampara Fest',
      description: 'QR-code-based gate entry system with 2-factor verification and 3-tier RBAC panels (Admin, Teacher, Student) deployed on AWS EC2 with Elastic Load Balancer. Scaled to handle 7,000+ concurrent student verifications.',
      tags: ['MERN Stack', 'JWT', 'RBAC', 'AWS EC2', 'ELB', 'ASG'],
      category: 'Full Stack',
      color: 'from-purple-500/20 to-pink-500/20',
      accent: '#A78BFA',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      github: 'https://github.com/Shivam-75',
      live: '#',
      period: 'Feb – Mar 2026',
    },
    {
      id: 3,
      title: 'Food Token System – Parampara Fest',
      description: 'QR-based digital food token system eliminating 100% duplicate meal access; managed real-time meal distribution workflow for 7,000+ students across 3 vendor stations. 3-panel RBAC system reducing manual processing time by 60%.',
      tags: ['MERN Stack', 'JWT', 'RBAC', 'AWS EC2', 'ELB', 'ASG'],
      category: 'Full Stack',
      color: 'from-emerald-500/20 to-teal-500/20',
      accent: '#34D399',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
      github: 'https://github.com/Shivam-75',
      live: '#',
      period: 'Feb – Mar 2026',
    },
    {
      id: 4,
      title: 'SaveLife & MediaAssist AI',
      description: 'End-to-end blood bank management system with AI-powered donor-recipient matching algorithm via Gemini API, reducing manual matching time by 70%. Real-time blood inventory tracking with JWT-secured 3-role authentication.',
      tags: ['MERN Stack', 'JWT', 'Gemini API', 'REST API', 'MongoDB'],
      category: 'Full Stack',
      color: 'from-rose-500/20 to-red-500/20',
      accent: '#FB7185',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      github: 'https://github.com/Shivam-75',
      live: '#',
      period: 'Nov – Dec 2025',
    },
    {
      id: 5,
      title: 'npm i cloudonix',
      description: 'Published open-source Node.js SDK abstracting cloud media upload and URL generation APIs. Earned NPM Verified Contributor badge with active community adoption.',
      tags: ['Node.js', 'Cloud SDK', 'REST API Wrapper', 'Open Source', 'NPM'],
      category: 'Backend',
      color: 'from-orange-500/20 to-yellow-500/20',
      accent: '#FB923C',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0v24h24V0H0zm19.2 19.2H4.8V4.8h14.4v14.4zM8 8v8h3.2v-6.4h1.6V16H16V8H8z" />
        </svg>
      ),
      github: 'https://github.com/Shivam-75',
      live: 'https://www.npmjs.com/package/cloudonix',
      period: 'May – Jun 2026',
    },
    {
      id: 6,
      title: 'npx crt-server',
      description: 'Authored and maintain a Node.js CLI package with 1,400+ weekly active users; auto-scaffolds production-ready backend architecture with cluster mode, multithreading, and configurable middleware stack.',
      tags: ['Node.js', 'CLI Tool', 'Open Source', 'NPM', 'Author & Maintainer'],
      category: 'Backend',
      color: 'from-sky-500/20 to-indigo-500/20',
      accent: '#38BDF8',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      github: 'https://github.com/Shivam-75',
      live: 'https://www.npmjs.com/package/crt-server',
      period: 'Nov – Dec 2025',
    },
  ];

  // Use DB projects if available, else static
  const projects = portfolio?.projects?.length
    ? portfolio.projects.map((p, i) => ({ ...p, id: p._id || i, icon: defaultIcon }))
    : staticProjects.map((p, i) => ({ ...p, id: `static-${i}` }));

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);


  return (
    <section id="project" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[120px]" style={{ background: 'radial-gradient(circle, #3b82f6, transparent)', top: '30%', left: '-5%' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] blur-[100px]" style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)', bottom: '20%', right: '5%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, design, and problem-solving.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-10 px-4">
          <div className="flex flex-wrap justify-center gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-600/80 to-cyan-600/80 text-white shadow-lg shadow-blue-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden hover:border-white/[0.12] transition-all duration-500 hover:-translate-y-1"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Top Gradient */}
              <div className={`h-40 bg-gradient-to-br ${project.color} relative flex items-center justify-center`}>
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ color: project.accent }}
                >
                  {project.icon}
                </div>

                {/* Category badge */}
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-medium border border-white/[0.1]">
                  {project.category}
                </span>

                {/* Hover overlay links */}
                <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm hidden md:flex items-center justify-center gap-3 transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200 cursor-pointer" title="GitHub">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200 cursor-pointer" title="Live Demo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                  </a>
                  <button onClick={() => navigate(`/project/${project.id}`)} className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-blue-500/40 hover:border-blue-400/50 transition-all duration-200 cursor-pointer" title="More Details">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                  </button>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-white/[0.04] text-gray-400 text-xs border border-white/[0.06] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Mobile action buttons (visible on mobile/tablet, hidden on desktop) */}
                <div className="flex md:hidden items-center gap-2 mt-4 pt-4 border-t border-white/[0.06]">
                  {project.github && project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-300 text-xs font-semibold hover:bg-white/[0.08] transition-colors duration-200">
                      GitHub
                    </a>
                  )}
                  {project.live && project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold shadow-md">
                      Live
                    </a>
                  )}
                  <button onClick={() => navigate(`/project/${project.id}`)} className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/[0.08] border border-white/[0.1] text-white text-xs font-semibold">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-300 text-sm font-medium hover:bg-white/[0.08] hover:border-white/[0.15] hover:text-white transition-all duration-300 cursor-pointer group">
            View All Projects
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

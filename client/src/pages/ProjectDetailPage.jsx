import { useParams, useNavigate } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';

// Static fallback projects (same as Projects.jsx)
const staticProjects = [
  {
    id: 'static-0',
    title: 'Cloudonix',
    description: 'Full-stack cloud media management platform supporting image, video, and PDF upload with automatic URL generation, processing 500+ assets with third-party API integration.',
    longDescription: 'Cloudonix is a full-stack cloud media management platform built with the MERN stack. It supports image, video, and PDF uploads with automatic URL generation via Cloudflare Workers. The system processes 500+ assets and integrates Redis for caching to ensure fast retrieval. Secure authentication via JWT access + refresh tokens protects all routes.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Redis', 'JWT', 'REST API', 'Cloudflare', 'Render'],
    category: 'Full Stack', accent: '#60A5FA',
    github: 'https://github.com/Shivam-75', live: '#', period: 'May – Jun 2026',
    location: '', date: '', screenshots: [],
  },
  {
    id: 'static-1',
    title: 'Gate Entry System – Parampara Fest',
    description: 'QR-code-based gate entry system with 2-factor verification and 3-tier RBAC panels (Admin, Teacher, Student) deployed on AWS EC2 with Elastic Load Balancer.',
    longDescription: 'A production-level gate entry system built for the Parampara college fest. Implements QR-code-based 2-factor verification with a 3-tier RBAC system (Admin, Teacher, Student). Deployed on AWS EC2 with Elastic Load Balancer and Auto Scaling Group to handle 7,000+ concurrent student verifications reliably.',
    tags: ['MERN Stack', 'JWT', 'RBAC', 'AWS EC2', 'ELB', 'ASG'],
    category: 'Full Stack', accent: '#A78BFA',
    github: 'https://github.com/Shivam-75', live: '#', period: 'Feb – Mar 2026',
    location: '', date: '', screenshots: [],
  },
  {
    id: 'static-2',
    title: 'Food Token System – Parampara Fest',
    description: 'QR-based digital food token system eliminating 100% duplicate meal access for 7,000+ students across 3 vendor stations.',
    longDescription: 'A digital food token system that replaced physical tokens at the Parampara college festival. QR-based distribution eliminated 100% duplicate meal access. Managed real-time meal distribution across 3 vendor stations for 7,000+ students. The 3-panel RBAC system (Admin, Vendor, Student) reduced manual processing time by 60%.',
    tags: ['MERN Stack', 'JWT', 'RBAC', 'AWS EC2', 'ELB', 'ASG'],
    category: 'Full Stack', accent: '#34D399',
    github: 'https://github.com/Shivam-75', live: '#', period: 'Feb – Mar 2026',
    location: '', date: '', screenshots: [],
  },
  {
    id: 'static-3',
    title: 'SaveLife & MediaAssist AI',
    description: 'End-to-end blood bank management system with AI-powered donor-recipient matching algorithm via Gemini API.',
    longDescription: 'SaveLife is a comprehensive blood bank management system with an AI-powered donor-recipient matching algorithm using the Gemini API, reducing manual matching time by 70%. It features real-time blood inventory tracking with JWT-secured 3-role authentication (Admin, Donor, Hospital). A ChatGPT-powered Medicine Assistant helps users with health suggestions.',
    tags: ['MERN Stack', 'JWT', 'Gemini API', 'REST API', 'MongoDB'],
    category: 'Full Stack', accent: '#FB7185',
    github: 'https://github.com/Shivam-75', live: '#', period: 'Nov – Dec 2025',
    location: 'Gorakhpur', date: '25 / 10 / 2025', screenshots: [],
  },
  {
    id: 'static-4',
    title: 'npm i cloudonix',
    description: 'Published open-source Node.js SDK abstracting cloud media upload and URL generation APIs.',
    longDescription: 'An open-source Node.js SDK that abstracts cloud media upload and URL generation APIs into a simple interface. Published on NPM and earned the NPM Verified Contributor badge. The package has active community adoption with users across multiple projects leveraging it for media management workflows.',
    tags: ['Node.js', 'Cloud SDK', 'REST API Wrapper', 'Open Source', 'NPM'],
    category: 'Backend', accent: '#FB923C',
    github: 'https://github.com/Shivam-75', live: 'https://www.npmjs.com/package/cloudonix', period: 'May – Jun 2026',
    location: '', date: '', screenshots: [],
  },
  {
    id: 'static-5',
    title: 'npx crt-server',
    description: 'Node.js CLI package with 1,400+ weekly active users; auto-scaffolds production-ready backend architecture.',
    longDescription: 'A Node.js CLI tool that auto-scaffolds a production-ready backend with cluster mode, multithreading, and configurable middleware stack in seconds. Authored and actively maintained, the package has grown to 1,400+ weekly active users. It generates Express.js backend boilerplate with JWT auth, MongoDB setup, and structured folder architecture.',
    tags: ['Node.js', 'CLI Tool', 'Open Source', 'NPM', 'Author & Maintainer'],
    category: 'Backend', accent: '#38BDF8',
    github: 'https://github.com/Shivam-75', live: 'https://www.npmjs.com/package/crt-server', period: 'Nov – Dec 2025',
    location: '', date: '', screenshots: [],
  },
];

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { portfolio } = usePortfolio();

  // Find project — first check DB projects, then static
  let project = null;
  if (portfolio?.projects?.length) {
    project = portfolio.projects.find((p) => p._id === id || String(p._id) === id);
  }
  if (!project) {
    // Check static by id string or index
    project = staticProjects.find((p) => p.id === id) || staticProjects[parseInt(id, 10)];
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#070b14] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-4">Project not found.</p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all"
          >
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  const screenshots = project.screenshots || [];

  return (
    <div className="min-h-screen bg-[#070b14] text-white">
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[120px]" style={{ background: 'radial-gradient(circle, #3b82f6, transparent)', top: '-10%', left: '-5%' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[100px]" style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)', bottom: '10%', right: '5%' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 mb-8 group cursor-pointer"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </button>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.05] border border-white/[0.08] text-gray-300">
              {project.category}
            </span>
            {project.period && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-400">
                {project.period}
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Cover Image */}
        {project.coverImage && (
          <div className="mb-10 rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl">
            <img src={project.coverImage} alt={project.title} className="w-full h-auto object-cover" />
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Long Description */}
          <div className="lg:col-span-2">
            {project.longDescription && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 rounded-full bg-gradient-to-b from-blue-400 to-cyan-400 inline-block" />
                  About This Project
                </h2>
                <div className="space-y-4">
                  {project.longDescription.split('\n').filter(Boolean).map((para, i) => (
                    <p key={i} className="text-gray-300 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {(project.tags || []).map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-gray-300 text-sm border border-white/[0.06] font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar: Meta Info + Links */}
          <div className="space-y-4">
            {/* Location & Date */}
            {(project.location || project.date) && (
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                {project.location && (
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">Location</p>
                      <p className="text-white text-sm font-medium">{project.location}</p>
                    </div>
                  </div>
                )}
                {project.date && (
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📅</span>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">Date</p>
                      <p className="text-white text-sm font-medium">{project.date}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Action Links */}
            <div className="space-y-3">
              {project.live && project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                  Live Demo
                </a>
              )}
              {project.github && project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-300 font-semibold text-sm hover:bg-white/[0.08] hover:text-white transition-all duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Screenshots Gallery */}
        {screenshots.length > 0 && (
          <div className="border-t border-white/[0.06] pt-12">
            <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full bg-gradient-to-b from-purple-400 to-pink-400 inline-block" />
              Screenshots
            </h2>
            <div className="space-y-10">
              {screenshots.map((shot, index) => {
                const url = typeof shot === 'string' ? shot : shot?.url;
                const caption = typeof shot === 'string' ? '' : shot?.caption;
                if (!url) return null;
                return (
                  <div key={index} className="group">
                    <div className="rounded-2xl overflow-hidden border border-white/[0.06] shadow-xl hover:border-white/[0.1] transition-all duration-300">
                      <img
                        src={url}
                        alt={caption || `Screenshot ${index + 1}`}
                        className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                      />
                    </div>
                    {caption && (
                      <p className="text-gray-400 text-sm mt-3 text-center italic px-4">
                        {caption}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Back Button */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-300 hover:text-white hover:bg-white/[0.08] text-sm font-medium transition-all duration-300 cursor-pointer group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;

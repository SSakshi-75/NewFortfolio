import { useState } from 'react';
import heroAvatar from '../../assets/shivam-photo.jpg';
import { usePortfolio } from '../../context/PortfolioContext';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');
  const { portfolio } = usePortfolio();
  const about = portfolio?.about;

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'tools', label: 'Tools' },
  ];

  const skills = about?.skills?.length ? about.skills : [
    { name: 'React / Next.js', level: 90, color: 'from-blue-500 to-cyan-400' },
    { name: 'JavaScript (ES6+) / Core Java', level: 88, color: 'from-yellow-400 to-orange-400' },
    { name: 'Node.js / Express', level: 88, color: 'from-green-400 to-emerald-500' },
    { name: 'MongoDB / MySQL / Redis', level: 82, color: 'from-purple-400 to-pink-400' },
    { name: 'AWS EC2 / ELB / ASG / Docker', level: 75, color: 'from-orange-400 to-amber-400' },
    { name: 'JWT / OAuth 2.0 / RBAC', level: 85, color: 'from-cyan-400 to-blue-500' },
  ];

  const tools = about?.tools?.length ? about.tools : [
    { name: 'VS Code', icon: '💻', desc: 'Primary IDE' },
    { name: 'Figma', icon: '🎨', desc: 'UI/UX Design' },
    { name: 'Postman', icon: '📮', desc: 'API Testing' },
    { name: 'GitHub', icon: '🐙', desc: 'Version Control' },
    { name: 'AWS Console', icon: '☁️', desc: 'Cloud Deployment' },
    { name: 'Docker', icon: '🐳', desc: 'Containerization' },
    { name: 'Render / Vercel', icon: '▲', desc: 'Hosting' },
    { name: 'Gemini API', icon: '🤖', desc: 'AI Integration' },
  ];

  const timeline = about?.timeline?.length ? about.timeline : [
    { year: 'Jan 2026', title: 'ERP Operations Assistant', desc: 'Administered academic ERP system at Institute of Technology and Management handling 1,000+ student records with 99% data integrity.' },
    { year: 'May 2026', title: 'Cloudonix – Cloud Media Platform', desc: 'Full-stack cloud media management platform with Redis caching (40% load reduction) and JWT + RBAC security.' },
    { year: 'Nov 2025', title: 'NPM Author – crt-server', desc: 'Authored and maintain a Node.js CLI package with 1,400+ weekly active users; auto-scaffolds production-ready backend architecture.' },
  ];

  const quickInfo = about?.quickInfo?.length ? about.quickInfo : [
    { label: 'Name', value: 'Shivam Pandey', icon: '👤' },
    { label: 'Location', value: 'Gorakhpur, UP, India', icon: '📍' },
    { label: 'Experience', value: '1+ Year', icon: '💼' },
    { label: 'Availability', value: 'Open to Work', icon: '✅' },
    { label: 'Education', value: 'BCA – Computer Science', icon: '🎓' },
    { label: 'Contact', value: '+91-6386000621', icon: '📞' },
  ];

  const bio = about?.bio || "Hello! I'm Shivam Pandey, a Full-Stack Developer based in Gorakhpur, India. I specialize in building production-grade web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).";
  const bio2 = about?.bio2 || "I'm an NPM Verified Open Source Contributor maintaining two published packages with 1,400+ weekly active users. I have demonstrated expertise in RESTful API design, JWT & OAuth 2.0 authentication, Redis caching (40% load reduction), role-based access control (RBAC), and microservices architecture.";
  const bio3 = about?.bio3 || "I have hands-on cloud deployment experience with AWS EC2, Elastic Load Balancer (ELB), Auto Scaling Group (ASG), and Docker. Proficient in AI-assisted development using Generative AI, Prompt Engineering, and Cursor AI.";

  const profilePhoto = portfolio?.hero?.profilePhoto;


  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[100px]" style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)', top: '20%', right: '5%' }} />
        <div className="absolute w-[300px] h-[300px] rounded-full opacity-[0.03] blur-[80px]" style={{ background: 'radial-gradient(circle, #3b82f6, transparent)', bottom: '10%', left: '10%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Get To Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A passionate developer who loves turning ideas into reality through clean code and creative design.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left - Image & Timeline */}
          <div className="lg:w-5/12">
            {/* Image Card */}
            <div className="relative mb-10">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/[0.08] bg-white/[0.02]">
                <img src={profilePhoto || heroAvatar} alt="Shivam" className="w-full aspect-square object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent" />
                
                {/* Overlay info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-1">Shivam Pandey</h3>
                  <p className="text-gray-300 text-sm">Full Stack Developer</p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-blue-500/30 rounded-tr-2xl" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-2xl" />
            </div>

            {/* Journey Timeline */}
            <div className="space-y-1">
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round"><path d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
                </span>
                My Journey
              </h3>
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-4 group">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.4)] group-hover:scale-125 transition-transform duration-300" />
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-gray-200 dark:bg-white/[0.08] my-1" />}
                  </div>
                  <div className="pb-6">
                    <span className="text-blue-400 text-xs font-semibold">{item.year}</span>
                    <h4 className="text-white text-sm font-semibold mt-0.5">{item.title}</h4>
                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Tabs Content */}
          <div className="lg:w-7/12">
            {/* Tab Navigation */}
            <div className="flex gap-1 p-1 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] mb-8 w-fit">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600/80 to-cyan-600/80 text-gray-900 dark:text-white shadow-lg shadow-blue-500/20'
                      : 'text-gray-400 hover:text-blue-600 dark:hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content: About */}
            {activeTab === 'about' && (
              <div className="space-y-6 animate-fade-in-up" style={{ animationDuration: '0.4s' }}>
                <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-white/[0.06]">
                  <p className="text-gray-300 leading-relaxed mb-4">{bio}</p>
                  <p className="text-gray-400 leading-relaxed mb-4">{bio2}</p>
                  <p className="text-gray-400 leading-relaxed">{bio3}</p>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {quickInfo.map((info) => (
                    <div key={info.label} className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.06] hover:bg-gray-100 dark:hover:bg-white/[0.04] hover:border-gray-300 dark:hover:border-white/[0.1] transition-all duration-300 group">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{info.icon}</span>
                        <div>
                          <p className="text-gray-500 text-xs">{info.label}</p>
                          <p className="text-white text-sm font-medium">{info.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab Content: Skills */}
            {activeTab === 'skills' && (
              <div className="space-y-5 animate-fade-in-up" style={{ animationDuration: '0.4s' }}>
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-200 text-sm font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-xs font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out shadow-sm`}
                        style={{
                          width: `${skill.level}%`,
                          animation: `grow-width-${index} 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                          animationDelay: `${index * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}

                {/* Skill Categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  {[
                    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML5/CSS3'], color: 'blue' },
                    { category: 'Backend', items: ['Node.js', 'Express', 'REST API', 'GraphQL', 'Socket.io'], color: 'green' },
                    { category: 'Database', items: ['MongoDB', 'MySQL', 'Redis', 'Mongoose ODM'], color: 'purple' },
                    { category: 'Cloud & DevOps', items: ['AWS EC2', 'ELB', 'ASG', 'Docker', 'Vercel', 'Render'], color: 'orange' },
                  ].map((cat) => (
                    <div key={cat.category} className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.06] hover:bg-gray-100 dark:hover:bg-white/[0.04] transition-all duration-300">
                      <h4 className="text-white text-sm font-semibold mb-2">{cat.category}</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.items.map((item) => (
                          <span key={item} className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-white/[0.04] text-gray-600 dark:text-gray-400 text-xs border border-white/[0.06]">{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab Content: Tools */}
            {activeTab === 'tools' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-in-up" style={{ animationDuration: '0.4s' }}>
                {tools.map((tool) => (
                  <div key={tool.name} className="group p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.06] hover:bg-gray-200 dark:hover:bg-white/[0.05] hover:border-gray-300 dark:hover:border-white/[0.12] hover:scale-105 transition-all duration-300 text-center cursor-default">
                    <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform duration-300">{tool.icon}</span>
                    <h4 className="text-white text-sm font-semibold mb-0.5">{tool.name}</h4>
                    <p className="text-gray-500 text-xs">{tool.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

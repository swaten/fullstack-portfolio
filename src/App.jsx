import React from 'react';
import { 
  Mail, MapPin, Phone, Code, Database, Brain, Rocket, ChevronRight,
  Layers, Terminal, Cpu, Globe, Briefcase, Activity, Truck, Wallet
} from 'lucide-react';

const Portfolio = () => {
  const skills = {
    backend: ["PHP","Laravel 12+", "FastAPI","Python", "Backend Architecture", "Phalcon (v5)", "Codeigniter"],
    frontend: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML","CSS"],
    ai_data: ["Python AI Services","Small SLMs","LLMs","AI Agents", "Pandas/NumPy", "Data Visualization", "Tableau"],
    infrastructure: ["AWS (EC2, S3)", "Docker", "Composer", "PostgreSQL", "MySQL", "MongoDB", "Linux", "Nginx","Github"]
  };

  const domains = [
    { 
      name: "Automobile & Global Brands", 
      icon: <Globe size={20} />, 
      desc: "Delivering high-performance sites for Jaguar and Land Rover." 
    },
    { name: "Logistics & Supply Chain", icon: <Truck size={20} />, desc: "Developed YMS and CMS platforms for Adani Group and large-scale logistics clients." },
    { name: "HealthCare", icon: <Activity size={20} />, desc: "Built and delivered software solutions across Gym, Yoga, Diet, and IVF industries." },
    { name: "Sales", icon: <Wallet size={20} />, desc: "Designed and built Sales CRM platforms for diverse business clients" },
    { name: "Civil and Real Estate", icon: <Briefcase size={20} />, desc: "Cross-functional systems for construction and real estate." }
  ];

  const experience = [
    {
      role: "Senior Software Engineer",
      company: "Empezar Labs",
      period: "OCT 2024 - AUG 2025",
      description: "Leading development for logistics and supply chain solutions.",
      points: [
        "Developed logistics products for global industrial clients like MSC, Adani and 3PL's ",
        "Managed full-stack architecture using Phalcon 5 and React.js and Mysql",
        "Delivered many core modules for YMS and for CMS",
        "Optimized high-concurrency workflows through advanced architectural fixes"
      ]
    },
    {
      role: "Full-Stack Developer / Project Lead",
      company: "Monstera Technologies",
      period: "FEB 2021 - JAN 2024",
      description: "Managed primary product lifecycles across Construction, Real Estate and Fitness sectors.",
      points: [
        "Guided cross-functional teams on Health Tech and Sales CRM platforms.",
        "Migrated legacy IVF healthcare modules to modern Laravel standards.",
        "Scalable foundational platforms across construction and gym domains."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-gray-300 font-sans selection:bg-blue-500/30 w-full overflow-x-hidden">
      
      {/* 1. HERO & ABOUT ME - FULL WIDTH */}
      <section className="min-h-screen flex flex-col justify-center relative px-8 lg:px-20 border-b border-gray-800 py-10">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Full Stack Developer
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-black text-white leading-tight mb-6">
              Dhruv <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Tripathi.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed mb-10">
              Senior Software Engineer specializing in <span className="text-white italic">ERP and CRM–based solutions</span>, 
              with experience across multiple business domains and 
              <span className="text-blue-400 font-semibold"> diverse technology stacks</span>.
            </p>

            
            <div className="flex flex-wrap gap-8 mb-12">
              <ContactItem icon={<Mail size={20}/>} text="dhruvjb12@gmail.com" />
              <ContactItem icon={<MapPin size={20}/>} text="Mumbai, India" />
              <ContactItem icon={<Phone size={20}/>} text="+91-7977792351" />
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-gray-700 bg-[#1a1a1a]">
                <img 
                  src={`${import.meta.env.BASE_URL}profile.jpeg`}
                  alt="Dhruv Tripathi" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              {/* <div className="absolute -bottom-6 -left-6 bg-blue-600 p-4 rounded-2xl shadow-xl">
                <Rocket size={25} className="text-white" />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* 2. DOMAIN EXPERTISE - HORIZONTAL STRIP */}
      <section className="py-16 px-8 lg:px-20 bg-[#0d0d0d] border-b border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {domains.map((domain, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">{domain.icon}</div>
              <div>
                <h4 className="text-white font-bold mb-1">{domain.name}</h4>
                <p className="text-sm text-gray-500">{domain.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SKILLS & TOOLKIT - FULL WIDTH */}
      <section className="min-h-[80vh] flex flex-col justify-center py-24 px-8 lg:px-20 bg-[#111111]">
        <div className="w-full">
          <div className="flex flex-col mb-16">
            <h2 className="text-5xl font-bold text-white mb-4 tracking-tighter text-center md:text-left">Technical Arsenal</h2>
            <div className="h-1.5 w-32 bg-blue-600 mx-auto md:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillBox title="Backend Core" items={skills.backend} icon={<Layers className="text-blue-500" />} />
            <SkillBox title="Modern Frontend" items={skills.frontend} icon={<Globe className="text-cyan-500" />} />
            <SkillBox title="AI & Analytics" items={skills.ai_data} icon={<Brain className="text-purple-500" />} />
            <SkillBox title="Infrastructure" items={skills.infrastructure} icon={<Cpu className="text-orange-500" />} />
          </div>
        </div>
      </section>

      {/* 4. PROFESSIONAL JOURNEY - FULL WIDTH */}
      <section className="min-h-screen py-24 px-8 lg:px-20 bg-[#0d0d0d]">
        <div className="w-full">
          <div className="flex flex-col mb-20 items-center md:items-start">
            <h2 className="text-5xl font-bold text-white mb-4 tracking-tighter">Experience</h2>
            <p className="text-gray-500 text-lg uppercase tracking-widest font-mono">Building Scalable Enterprise Systems</p>
          </div>

          <div className="space-y-8">
            {experience.map((job, idx) => (
              <div key={idx} className="group relative grid lg:grid-cols-12 gap-8 p-10 rounded-[2.5rem] border border-gray-800 hover:border-gray-700 hover:bg-white/[0.02] transition-all duration-500">
                <div className="lg:col-span-3">
                  <span className="text-blue-500 font-mono text-base font-bold">{job.period}</span>
                  <h4 className="text-2xl font-black text-white mt-2 group-hover:text-blue-400 transition-colors">{job.company}</h4>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="text-3xl font-bold text-gray-100 mb-3">{job.role}</h3>
                  <p className="text-lg text-gray-400 mb-8 max-w-4xl border-l-2 border-blue-600 pl-4">{job.description}</p>
                  <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                    {job.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-base text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                        <ChevronRight size={20} className="text-blue-500 shrink-0 mt-1" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-gray-900 bg-[#0a0a0a] text-center px-8">
        <div className="mb-8 flex justify-center gap-6">
          <Terminal size={24} className="text-gray-700" />
          <Code size={24} className="text-gray-700" />
          <Database size={24} className="text-gray-700" />
        </div>
        <p className="text-gray-600 text-sm tracking-[0.3em] font-light uppercase">
          © 2026 Dhruv Tripathi | Senior Full Stack Engineer
        </p>
      </footer>
    </div>
  );
};

const SkillBox = ({ title, items, icon }) => (
  <div className="p-10 rounded-[2rem] bg-[#1a1a1a] border border-gray-800 hover:border-blue-500/40 transition-all duration-500 group flex flex-col h-full">
    <div className="w-14 h-14 rounded-2xl bg-gray-900 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]">
      <div className="group-hover:text-white transition-colors">{icon}</div>
    </div>
    <h3 className="text-xl font-bold text-white mb-6 tracking-tight">{title}</h3>
    <ul className="space-y-4 flex-grow">
      {items.map((item, i) => (
        <li key={i} className="text-base text-gray-500 flex items-center gap-3 font-medium">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-900 group-hover:bg-blue-500 transition-colors"></div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ContactItem = ({ icon, text }) => (
  <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-all cursor-pointer group">
    <span className="p-3 rounded-xl bg-gray-800/50 border border-gray-700 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:text-white transition-all duration-300">
      {icon}
    </span>
    <span className="text-base font-semibold">{text}</span>
  </div>
);

export default Portfolio;
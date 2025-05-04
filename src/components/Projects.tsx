
import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Enterprise Resource Management",
      description: "A comprehensive .NET Core application for resource management with advanced SQL Server integration and Entity Framework for optimal data access.",
      technologies: ["ASP.NET Core", "C#", "SQL Server", "Entity Framework", "Vertical Slice Architecture"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      github: "#",
      live: "#"
    },
    {
      title: "Database Performance Optimizer",
      description: "Tool that optimized over 10 stored procedures and database tables, enhancing data processing efficiency by 20% while maintaining data integrity.",
      technologies: ["SQL Server", "SQLite", "C#", ".NET", "Performance Optimization"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      github: "#",
      live: "#"
    },
    {
      title: "Microservice Architecture Framework",
      description: "Designed and implemented a microservice architecture that improved system reliability and scalability while reducing technical debt.",
      technologies: ["Microservices", "ASP.NET Core", "RESTful APIs", "Docker", "CI/CD"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      github: "#",
      live: "#"
    },
    {
      title: "Interactive Analytics Dashboard",
      description: "Dynamic web interface with JavaScript/jQuery that improved user experience by 15% through intuitive data visualization and real-time analytics.",
      technologies: ["JavaScript", "jQuery", "HTML/CSS", "D3.js", "RESTful APIs"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-navy">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card overflow-hidden relative opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden aspect-video">
                {/* Project image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent opacity-90"></div>
              </div>
              
              {/* Project details */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-navy-light text-slate-light px-3 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    className="hover-effect text-slate-light hover:text-gold transition-colors"
                    aria-label="View GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.live} 
                    className="hover-effect text-slate-light hover:text-gold transition-colors"
                    aria-label="View Live Project"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              {/* Animated border on hover */}
              <div 
                className={`absolute inset-0 border-2 border-gold opacity-0 transition-opacity duration-300 pointer-events-none ${hoveredProject === index ? 'opacity-100' : ''}`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

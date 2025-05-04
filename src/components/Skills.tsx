
import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const skills = [
    { category: "Languages & Frameworks", items: [
      { name: "ASP.NET MVC", level: 90 },
      { name: ".NET Core", level: 85 },
      { name: "C#", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "HTML/CSS", level: 80 },
      { name: "Entity Framework", level: 85 }
    ]},
    { category: "Database & Tools", items: [
      { name: "SQL Server", level: 90 },
      { name: "SQLite", level: 80 },
      { name: "IBM DB2", level: 75 },
      { name: "Git", level: 85 },
      { name: "Tortoise SVN", level: 80 },
      { name: "Jira", level: 75 }
    ]},
    { category: "Architecture & Methodologies", items: [
      { name: "Microservices", level: 80 },
      { name: "OOP", level: 90 },
      { name: "Agile SDLC", level: 85 },
      { name: "Vertical Slice Architecture", level: 80 },
      { name: "Unit Testing", level: 75 },
      { name: "RESTful APIs", level: 85 }
    ]}
  ];

  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const skillsElement = skillsRef.current;
    if (!skillsElement) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBars = skillsElement.querySelectorAll('.progress-bar');
          progressBars.forEach((bar, index) => {
            setTimeout(() => {
              (bar as HTMLElement).style.width = bar.getAttribute('data-width') || '0%';
              (bar as HTMLElement).style.opacity = '1';
            }, index * 100);
          });
        }
      });
    }, {
      threshold: 0.1
    });
    
    observer.observe(skillsElement);
    
    return () => {
      observer.unobserve(skillsElement);
    };
  }, []);

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-navy to-navy-dark">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {skills.map((skillGroup, groupIndex) => (
            <div 
              key={groupIndex} 
              className="glass-card p-6 opacity-0 animate-fade-in"
              style={{ animationDelay: `${groupIndex * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-gold">{skillGroup.category}</h3>
              
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-slate-light">{skill.name}</span>
                      <span className="text-sm text-gold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-dark/30 rounded-full h-2 overflow-hidden">
                      <div 
                        className="progress-bar bg-gold h-full rounded-full transition-all duration-1000 ease-out opacity-0"
                        style={{ width: "0%" }}
                        data-width={`${skill.level}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

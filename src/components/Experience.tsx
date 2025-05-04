
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      position: "Software Engineer",
      company: "Hexure India",
      period: "2023 - Present",
      description: [
        "Engineered and optimized two enterprise applications using .NET and .NET Core, ensuring robust, scalable, and maintainable solutions.",
        "Architected and implemented efficient database solutions using SQL Server and SQLite, resulting in a 15% improvement in query performance and enhanced data integrity.",
        "Streamlined data access processes by leveraging Entity Framework, reducing development time by 20% while maintaining consistency across application layers.",
        "Collaborated with cross-functional teams in an Agile environment, actively participating in 10+ sprints and managing tasks using Jira to ensure on-time delivery.",
        "Applied object-oriented programming (OOP) principles to design modular, reusable, and efficient solutions across three distinct codebases, improving maintainability and reducing technical debt.",
        "Spearheaded the development of a project using Vertical Slice Architecture, contributing to its design and implementation from inception; achieved over 80% code coverage using xUnit for unit testing, ensuring reliability and testability.",
        "Delivered 5+ projects by adhering to the Agile Software Development Life Cycle (SDLC), consistently meeting project timelines and quality standards."
      ]
    },
    {
      position: "Software Developer",
      company: "E-connectsolutions Pvt. Ltd.",
      period: "2019 - 2023",
      description: [
        "Orchestrated full-stack solutions for three projects, combining technical expertise with functional knowledge to meet client requirements.",
        "Developed and maintained both front-end and back-end components of software applications, improving system reliability and user engagement.",
        "Optimized over 10 stored procedures, triggers, and database tables, enhancing data processing efficiency by 20% and ensuring seamless application performance.",
        "Created dynamic HTML pages and implemented interactive JavaScript/jQuery functions, resulting in a 15% improvement in user experience.",
        "Executed all stages of the software development lifecycle (SDLC), from requirement analysis to deployment, ensuring timely and high-quality deliverables."
      ]
    }
  ];

  const education = {
    degree: "Bachelor of Engineering",
    institution: "MBM Engineering College",
    period: "2015-2019"
  };

  return (
    <section id="experience" className="py-24 bg-navy-dark relative">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        
        {/* Timeline */}
        <div className="mt-16 relative">
          <div className="timeline-line h-full"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="experience-card opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="timeline-dot"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline mb-2">
                <h3 className="text-xl md:text-2xl font-semibold mr-3">{exp.position}</h3>
                <p className="text-gold">@ {exp.company}</p>
              </div>
              
              <p className="text-slate text-sm mb-4">{exp.period}</p>
              
              <ul className="list-disc list-outside ml-4 text-slate space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Education */}
          <div className="experience-card opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="timeline-dot"></div>
            <div className="mb-2">
              <h3 className="text-xl md:text-2xl font-semibold">Education</h3>
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline mb-2">
              <h4 className="text-lg font-medium mr-3">{education.degree}</h4>
              <p className="text-gold">@ {education.institution}</p>
            </div>
            <p className="text-slate text-sm">{education.period}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

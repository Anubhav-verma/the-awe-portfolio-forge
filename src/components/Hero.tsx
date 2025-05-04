
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // 3D Points
    const points = [];
    const maxPoints = 150;
    const pointColor = 'rgba(212, 175, 55, ';
    let mouseX = 0;
    let mouseY = 0;

    // Create initial points
    for (let i = 0; i < maxPoints; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        size: 1.5,
        color: `${pointColor}${Math.random() * 0.5})`,
      });
    }

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw points
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        
        // Move points
        point.z -= 1;
        
        // Reset points that go too far
        if (point.z < 1) {
          point.z = 1000;
          point.x = Math.random() * canvas.width;
          point.y = Math.random() * canvas.height;
        }

        // Calculate 3D projection
        const scale = 1000 / point.z;
        const projectedX = point.x * scale + canvas.width / 2 + mouseX * (point.z * 0.05);
        const projectedY = point.y * scale + canvas.height / 2 + mouseY * (point.z * 0.05);
        const projectedSize = point.size * scale;

        // Draw only if in canvas bounds
        if (
          projectedX > 0 &&
          projectedX < canvas.width &&
          projectedY > 0 &&
          projectedY < canvas.height
        ) {
          ctx.fillStyle = point.color;
          ctx.beginPath();
          ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2);
          ctx.fill();
        }

        // Connect nearby points
        for (let j = i + 1; j < points.length; j++) {
          const otherPoint = points[j];
          const otherScale = 1000 / otherPoint.z;
          const otherProjectedX = otherPoint.x * otherScale + canvas.width / 2 + mouseX * (otherPoint.z * 0.05);
          const otherProjectedY = otherPoint.y * otherScale + canvas.height / 2 + mouseY * (otherPoint.z * 0.05);

          // Calculate distance between points
          const dx = projectedX - otherProjectedX;
          const dy = projectedY - otherProjectedY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Draw line if close enough
          if (distance < 120) {
            ctx.strokeStyle = `rgba(212, 175, 55, ${(1 - distance / 120) * 0.2})`;
            ctx.beginPath();
            ctx.moveTo(projectedX, projectedY);
            ctx.lineTo(otherProjectedX, otherProjectedY);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* 3D Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ opacity: 0.7 }}
      />

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          <p className="text-gold text-lg mb-5 opacity-0 animate-fade-in">Hi, my name is</p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-3 opacity-0 animate-fade-in animate-delay-100">
            Anubhav Verma.
          </h1>
          
          <h2 className="text-4xl md:text-6xl font-semibold text-slate opacity-0 animate-fade-in animate-delay-200">
            I build exceptional digital experiences.
          </h2>
          
          <p className="text-slate text-lg max-w-2xl mt-8 opacity-0 animate-fade-in animate-delay-300">
            I'm a software engineer specializing in building high-performance, robust 
            applications with a focus on exceptional user experiences. Currently, I'm focused on 
            creating enterprise solutions using .NET and optimizing database performance 
            at <span className="text-gold">Hexure India</span>.
          </p>
          
          <div className="mt-12 opacity-0 animate-fade-in animate-delay-400">
            <a href="#projects" className="button-primary flex items-center gap-2 w-fit hover-effect">
              Check out my work
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React, { useEffect, useState, useRef } from "react";

const CursorEffect = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const [particles, setParticles] = useState<{ x: number; y: number; size: number; life: number; id: number }[]>([]);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  let particleId = 0;

  useEffect(() => {
    // Initialize cursor visibility after slight delay to prevent flashing on page load
    const timer = setTimeout(() => setIsVisible(true), 300);

    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    if (!cursorDot || !cursorOutline) return;

    const moveCursor = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      
      // Add slight delay for the outline for a trailing effect
      setTimeout(() => {
        cursorOutline.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      }, 80);

      // Create particle every 4 mouse movements
      if (Math.random() > 0.8) {
        setParticles(prevParticles => [
          ...prevParticles.slice(-20), // Keep only the last 20 particles
          {
            x: posX,
            y: posY,
            size: Math.random() * 3 + 1,
            life: 100,
            id: particleId++
          }
        ]);
      }
    };

    const handleMouseDown = () => {
      cursorDot.style.transform = `translate3d(${cursorDot.offsetLeft}px, ${cursorDot.offsetTop}px, 0) scale(0.8)`;
      cursorOutline.style.transform = `translate3d(${cursorOutline.offsetLeft}px, ${cursorOutline.offsetTop}px, 0) scale(1.5)`;
    };

    const handleMouseUp = () => {
      cursorDot.style.transform = `translate3d(${cursorDot.offsetLeft}px, ${cursorDot.offsetTop}px, 0) scale(1)`;
      cursorOutline.style.transform = `translate3d(${cursorOutline.offsetLeft}px, ${cursorOutline.offsetTop}px, 0) scale(1)`;
    };

    const handleLinkHover = () => {
      cursorDot.style.transform = `translate3d(${cursorDot.offsetLeft}px, ${cursorDot.offsetTop}px, 0) scale(0.5)`;
      cursorOutline.style.transform = `translate3d(${cursorOutline.offsetLeft}px, ${cursorOutline.offsetTop}px, 0) scale(2)`;
      cursorOutline.style.borderColor = 'rgba(212, 175, 55, 0.5)';
    };

    const handleLinkLeave = () => {
      cursorDot.style.transform = `translate3d(${cursorDot.offsetLeft}px, ${cursorDot.offsetTop}px, 0) scale(1)`;
      cursorOutline.style.transform = `translate3d(${cursorOutline.offsetLeft}px, ${cursorOutline.offsetTop}px, 0) scale(1)`;
      cursorOutline.style.borderColor = 'rgb(212, 175, 55)';
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    const links = document.querySelectorAll("a, button, .hover-effect");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
      
      cancelAnimationFrame(requestRef.current!);
    };
  }, []);

  // Animation loop for particles
  const animate = (time: number) => {
    if (previousTimeRef.current != undefined) {
      // Update particles
      setParticles(prevParticles => 
        prevParticles
          .map(p => ({...p, life: p.life - 2}))
          .filter(p => p.life > 0)
      );
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);

  return (
    <>
      {/* Cursor dot and outline */}
      <div 
        ref={cursorDotRef} 
        className={`cursor-dot ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
      <div 
        ref={cursorOutlineRef} 
        className={`cursor-outline ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="cursor-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.life / 100,
          }}
        />
      ))}
    </>
  );
};

export default CursorEffect;

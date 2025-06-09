import React, { useEffect, useRef } from 'react';

class Particle {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = -10;
    this.size = Math.random() * 3 + 1;
    this.speed = Math.random() * 2 + 1;
    this.velocity = this.speed;
    this.bounce = 0.8;
    this.gravity = 0.1;
    this.opacity = Math.random() * 0.5 + 0.3;
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    // Bounce when hitting bottom
    if (this.y > this.canvas.height - this.size) {
      this.y = this.canvas.height - this.size;
      this.velocity = -this.velocity * this.bounce;
      
      // Reset if particle loses too much energy
      if (Math.abs(this.velocity) < 0.5) {
        this.reset();
      }
    }

    // Reset if particle goes off screen
    if (this.y > this.canvas.height + 10) {
      this.reset();
    }
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fillStyle = `rgba(25, 118, 210, ${this.opacity})`;
    this.ctx.fill();
  }
}

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(canvas.width * canvas.height / 10000); // Adjust density based on screen size
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas, ctx));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    initParticles();
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default ParticleBackground; 
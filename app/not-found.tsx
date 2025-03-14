"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("Canvas context not available");
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      color: string;
    }[] = [];
    const colors = [
      "#4ECDC4",
      "#FAD0C4",
      "#FFD1FF",
      "#B5EAD7",
      "#C7CEEA",
      "#F7A442",
      "#E942F7",
      "#0025EE",
      "#E9211C",
    ];

    // Initialize particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 50 + 10,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    function draw() {
      if (!ctx) return; // Ensure ctx is still valid
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
      });
    }

    function animate() {
      draw();
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        // Bounce off walls
        if (p.x - p.radius < 0 || p.x + p.radius > canvas.width) p.dx *= -1;
        if (p.y - p.radius < 0 || p.y + p.radius > canvas.height) p.dy *= -1;
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center pt-[210px] pb-[210px] text-center">
      {/* WebGL Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      ></canvas>

      {/* 404 Content */}
      <div className="relative">
        <h1 className="text-6xl font-bold mb-4 z-10">404</h1>
        <p className="text-2xl mb-6 z-10">
          Oops! The page you're looking for doesn't exist.
        </p>

        <Link href="/" className="btn-main">
          Go Home
        </Link>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

type SquaresProps = {
  direction?: "diagonal" | "up" | "right" | "down" | "left";
  speed?: number;
  squareSize?: number;
  borderColor?: string;
  hoverFillColor?: string;
  className?: string;
};

export function Squares({
  direction = "diagonal",
  speed = 0.4,
  squareSize = 40,
  borderColor = "rgba(160, 160, 185, 0.15)",
  hoverFillColor = "rgba(99, 102, 241, 0.15)",
  className = "",
}: SquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gridOffsetRef = useRef({ x: 0, y: 0 });
  const hoveredSquareRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const updateCanvasSize = () => {
      if (!canvas.parentElement) return;
      const width = canvas.parentElement.clientWidth;
      const height = canvas.parentElement.clientHeight;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const startX = Math.floor((x - gridOffsetRef.current.x) / squareSize);
      const startY = Math.floor((y - gridOffsetRef.current.y) / squareSize);
      hoveredSquareRef.current = { x: startX, y: startY };
    };

    const handleMouseLeave = () => {
      hoveredSquareRef.current = null;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      switch (direction) {
        case "right":
          gridOffsetRef.current.x = (gridOffsetRef.current.x + speed) % squareSize;
          break;
        case "left":
          gridOffsetRef.current.x = (gridOffsetRef.current.x - speed + squareSize) % squareSize;
          break;
        case "down":
          gridOffsetRef.current.y = (gridOffsetRef.current.y + speed) % squareSize;
          break;
        case "up":
          gridOffsetRef.current.y = (gridOffsetRef.current.y - speed + squareSize) % squareSize;
          break;
        case "diagonal":
          gridOffsetRef.current.x = (gridOffsetRef.current.x + speed) % squareSize;
          gridOffsetRef.current.y = (gridOffsetRef.current.y + speed) % squareSize;
          break;
      }

      const numCols = Math.ceil(width / squareSize) + 2;
      const numRows = Math.ceil(height / squareSize) + 2;

      const startX = (gridOffsetRef.current.x % squareSize) - squareSize;
      const startY = (gridOffsetRef.current.y % squareSize) - squareSize;

      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;

      for (let i = -1; i < numCols; i++) {
        for (let j = -1; j < numRows; j++) {
          const sqX = startX + i * squareSize;
          const sqY = startY + j * squareSize;

          if (hoveredSquareRef.current && hoveredSquareRef.current.x === i && hoveredSquareRef.current.y === j) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(sqX, sqY, squareSize, squareSize);
          }

          ctx.strokeRect(sqX, sqY, squareSize, squareSize);
        }
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", updateCanvasSize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [direction, speed, squareSize, borderColor, hoverFillColor]);

  return <canvas ref={canvasRef} className={`absolute inset-0 pointer-events-none ${className}`} />;
}

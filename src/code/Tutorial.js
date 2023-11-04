import { useEffect, useRef } from 'react';

export const CanvasTutorial = () => {
  const canvasRef = useRef(null);

  function draw() {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 2; j++) {
          ctx.beginPath();
          let x = 25 + j * 50; // x coordinate
          let y = 25 + i * 50; // y coordinate
          let radius = 20; // Arc radius
          let startAngle = 0; // Starting point on circle
          let endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
          let counterclockwise = i % 2 === 1; // Draw counterclockwise

          ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

          if (i > 1) {
            ctx.fill();
          } else {
            ctx.stroke();
          }
        }
      }
    }
  }

  useEffect(() => {
    draw();
  }, []);

  return <canvas height='300px' width='150px' ref={canvasRef}></canvas>;
};

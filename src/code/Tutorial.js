import { useEffect, useRef } from 'react';

export const CanvasTutorial = () => {
  const canvasRef = useRef(null);

  function draw() {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      // smiley face
      ctx.beginPath();
      // outer circle
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
      ctx.moveTo(110, 75);
      // mouth
      ctx.arc(75, 75, 35, 0, Math.PI, false);
      ctx.moveTo(65, 65);
      // left eye
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
      ctx.moveTo(95, 65);
      // right eye
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
      ctx.stroke();
    }
  }

  useEffect(() => {
    draw();
  }, []);

  return <canvas height='150px' width='150px' ref={canvasRef}></canvas>;
};

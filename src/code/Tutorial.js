import { useEffect, useRef } from 'react';

export const CanvasTutorial = () => {
  const canvasRef = useRef(null);

  function draw() {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      // stickman
      ctx.beginPath();
      // head
      ctx.arc(75, 75, 25, 0, Math.PI * 2, true);
      ctx.moveTo(110, 75);
      // hands
      ctx.arc(75, 75, 35, 0, Math.PI, false);
      ctx.moveTo(75, 100);
      // body
      ctx.lineTo(75, 130);
      ctx.moveTo(75, 130);
      // left leg
      ctx.lineTo(60, 180);
      ctx.moveTo(75, 130);
      // right leg
      ctx.lineTo(90, 180);
      ctx.moveTo(68, 74);
      ctx.arc(65, 74, 3, 0, Math.PI * 2, true);
      ctx.moveTo(85, 74);
      ctx.arc(82, 74, 3, 0, Math.PI * 2, true);
      ctx.moveTo(81, 80);
      ctx.arc(75, 80, 6, 0, Math.PI, false);
      ctx.stroke();
    }
  }

  useEffect(() => {
    draw();
  }, []);

  return <canvas height='300px' width='150px' ref={canvasRef}></canvas>;
};

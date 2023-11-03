import { useEffect, useRef } from 'react';

export const CanvasTutorial = () => {
  const canvasRef = useRef(null);

  function draw() {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fill();
    }
  }

  useEffect(() => {
    draw();
  }, []);

  // executed once the page has finished loading
  // done by listening for the load event on the document
  // window.addEventListener('load', draw);

  return <canvas height='150px' width='150px' ref={canvasRef}></canvas>;
};

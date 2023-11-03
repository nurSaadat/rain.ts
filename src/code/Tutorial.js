import { useEffect, useRef } from 'react';

export const CanvasTutorial = () => {
  const canvasRef = useRef(null);

  function draw() {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgb(200,0,0)';
      ctx.fillRect(10, 10, 50, 50);

      ctx.fillStyle = 'rgb(0,0,200, 0.5)';
      ctx.fillRect(30, 30, 50, 50);
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

import { useEffect, useRef } from 'react';

export const CanvasTutorial = () => {
  const canvasRef = useRef(null);

  function draw() {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
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

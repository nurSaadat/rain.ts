// import React, { useRef, useEffect } from 'react';

// export const RainyDaySimulation: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   // Function to draw a single raindrop
//   function drawRaindrop(drop: { x: number; y: number; speed: number, ctx: CanvasRenderingContext2D | null }) {
//     if (drop.ctx) {
//       drop.ctx.beginPath();
//       drop.ctx.moveTo(drop.x, drop.y);
//       drop.ctx.lineTo(drop.x, drop.y + 10); // Adjust raindrop length
//       drop.ctx.strokeStyle = 'blue'; // Raindrop color
//       drop.ctx.lineWidth = 2; // Raindrop thickness
//       drop.ctx.stroke();
//     }
//   }

//   // Function to update raindrop positions
//   function updateRaindrops() {
//     drops.forEach((drop) => {
//       drop.y += drop.speed;

//       if (drop.y > canvas.height) {
//         // Reset raindrop if it goes off the screen
//         drop.y = 0;
//         drop.x = Math.random() * canvas.width;
//       }
//     });
//   }

//   // Animation loop
//   function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Update and draw raindrops
//     updateRaindrops();
//     drops.forEach((drop) => drawRaindrop(drop));

//     requestAnimationFrame(animate);
//   }

//   useEffect(() => {
//     const canvas = canvasRef.current;

//     if (canvas) {
//       const ctx = canvas.getContext('2d');
//       if (ctx) {
//         // Set canvas size to match the container
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         // Define variables for raindrops
//         const numDrops = 100;
//         const drops: { x: number; y: number; speed: number }[] = [];

//         // Initialize raindrops
//         for (let i = 0; i < numDrops; i++) {
//           drops.push({
//             x: Math.random() * canvas.width,
//             y: Math.random() * canvas.height,
//             speed: 2 + Math.random() * 2, // Adjust speed as needed
//           });
//         }



//         // Start animation
//         animate();
//       }
//     }

//     // Handle window resize
//     const handleResize = () => {
//       if (canvas) {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//       }
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} />;
// };

export const Canvas = () => {
  return <div></div>
}

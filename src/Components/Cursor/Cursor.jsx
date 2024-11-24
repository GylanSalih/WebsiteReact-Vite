import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [cursorPosX, setCursorPosX] = useState(0);
  const [cursorPosY, setCursorPosY] = useState(0);

  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    // Mausbewegung-Handler
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    // Klick-Handler
    const handleMouseDown = () => {
      setIsMouseDown(true);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    // Event-Listener hinzufügen
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Cursor-Animation
    const interval = setInterval(() => {
      setCursorPosX(prevX => prevX + (mouseX - prevX) / 9);
      setCursorPosY(prevY => prevY + (mouseY - prevY) / 9);
    }, 16); // 60 FPS

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      clearInterval(interval);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <div
        className={`cursor ${isMouseDown ? 'active' : ''}`}
        style={{ left: `${mouseX}px`, top: `${mouseY}px` }}
      />
      <div
        className="cursor-follower"
        style={{ left: `${cursorPosX}px`, top: `${cursorPosY}px` }}
      />
    </>
  );
};

export default Cursor;

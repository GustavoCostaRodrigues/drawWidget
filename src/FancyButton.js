// src/FancyButton.js
import React, { useState } from 'react';

export default function FancyButton({ children, onClick, style }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    // Pega a posição do mouse em relação ao botão
    const rect = e.target.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        ...style,
        position: 'relative', // Essencial para posicionar o "holofote"
        overflow: 'hidden',   // Garante que o efeito não saia das bordas
        transition: 'background-color 0.3s',
      }}
    >
      {isHovered && (
        <span
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            // Cria um gradiente circular que parece um holofote
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(224, 224, 224, 0.5) 0%, transparent 50%)`,
          }}
        />
      )}
      {children}
    </button>
  );
}
import React, { useState } from 'react';
import styles from './CardIconos.module.css'; // Asegurate de importar tus estilos correctamente

const CardIconos = ({children, color, ...props}) => {
  const [isHovered, setIsHovered] = useState(false);

  

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const hoverStyle = {
    color: color,
    textShadow: `0 0 25px ${color}`,
    filter: `drop-shadow(${color})`,
    
  };
  

  return (
    <div 
      className={`${styles.contenedor} ${props.clase}`} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`${styles.mi_CardIcono} ${props.animacion}`}
        style={isHovered ? hoverStyle : {}}
      >
        {children}
      </div>
      <div>
        <h2 
          className={`${styles.text}`} 
          style={isHovered ? hoverStyle : {}}
        >
          {props.text}
        </h2>
      </div>
    </div>
  );
};

export default CardIconos;
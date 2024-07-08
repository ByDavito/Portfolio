import React from 'react'
import styles from './Card.module.css'

const CardTxt = ({ children,  ...props }) => {
    return (
      <div className={`${styles.mi_Card} ${props.clase}`}>
        <div className={`card-body d-flex justify-around h-full`}>
          <p className="card-text">
            {children}
          </p>
        </div>
      </div>
    );
  };

export default CardTxt
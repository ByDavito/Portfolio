import React from 'react'
import styles from './CardFoto2.module.css'

const CardFoto2 = ({ children, Foto, ...props }) => {
  return (
    <div>
           <div className={`${styles.mi_Card} ${props.clase}`}>
      <img src={Foto} className={`${styles.card_img}`} alt="..." />
      <div className={`card-body d-flex justify-around h-full`}>
        <p className="card-text ">
          {children}
        </p>
      </div>
    </div>
    </div>
  )
}

export default CardFoto2
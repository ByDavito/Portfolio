import React from 'react'
import styles from './CardIconos.module.css'

const CardIconos = ({children,...props}) => {
  return (
    <div className={`${styles.contenedor} ${props.clase}`}>
      <div className={`${styles.mi_CardIcono}`}>{children}</div>
      <div><h2 className={`${styles.text}`}>{props.text}</h2></div>
    </div>
  )
}

export default CardIconos
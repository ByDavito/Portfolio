import React from "react";
import styles from "./CardFoto.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const CardFoto = ({ children, Foto, ...props }) => {
  return (
    <div className={`${styles.mi_Card} ${props.clase}`}>
      <img src={Foto} className={`${styles.card_img}`} alt="..." />
      <div className={`card-body d-flex justify-around h-full`}>
      <div className="card-text ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardFoto;

import React, { useEffect, useRef } from "react";
import style from "./CardFoto.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const CardFoto = ({ children, Foto, Url, ...props }) => {
  const imagenRef = useRef(null);
  const CardRef = useRef(null);

  useEffect(() => {
    const imagen = imagenRef.current;
    const animacion = imagen.getAnimations()[0];
    const card = CardRef.current;

    if (animacion) {
      card.addEventListener("mouseover", () => {
        animacion.currentTime = 10;
        animacion.playbackRate = 0;
      });

      card.addEventListener("mouseout", () => {
        animacion.playbackRate = 1;
      });
    }
  }, []);

  return (
    <div className={`col-lg-3 col-md-6 col-sm-12 ${style.posicion}`}>
      <Link to={Url}>
        <div className="position-relative" style={{ height: "50vh" }}>
          <div className={`${style.mi_Card} ${props.clase}`}>
            <img
              ref={imagenRef}
              src={Foto}
              alt=""
              className="imagen"
            />
            <div className={`${style.card_body}`} ref={CardRef}>
              <h2>{children}</h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardFoto;
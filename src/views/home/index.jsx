import React, { useEffect } from "react";
import CardFoto from "../../assets/components/CardFoto/Index";
import CardIconos from "../../assets/components/CardIconos/Index";
import {
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import "./home.css";
import { RiJavascriptFill } from "react-icons/ri";
import CardTxt from "../../assets/components/Card/Index";
import WOW from "wowjs";
import "animate.css";

const Home = () => {
  

  return (
    <div
      className="conteainer justify-center content w-9/12 mt-20"
    >
      <div className="row justify-center align-middle ">
        <h1 className="titulo">Desarrollador Fullstack</h1>
        <h2 className="titulo">Racca David</h2>
        <div className="col-xl-12 row mt-16 pb-24">
          <CardFoto Foto="src/assets/img/ProyectARG.png">Tecnologias</CardFoto>
          <CardFoto Foto="src/assets/img/poseCV.png" Url={"/SobreMi"}>Sobre mi</CardFoto>
          <CardFoto Foto="src/assets/img/Trabajos.png"  Url={"/Vista"}>Proyectos y experiencias</CardFoto>
          <CardFoto Foto="src/assets/img/fitlogg.png">Contacto y CV</CardFoto>
      </div>
      </div>
    </div>
  );
};

export default Home;

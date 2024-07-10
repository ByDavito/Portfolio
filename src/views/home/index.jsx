import React from "react";
import CardFoto from "../../assets/components/CardFoto/Index";
import CardIconos from "../../assets/components/CardIconos/Index";
import { FaAngular, FaBootstrap, FaNodeJs, FaReact } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <div style={{ marginTop: "13vh" }} className="conteainer justify-center">
      <div className="row justify-center align-middle">
        <h1 className="titulo">Desarrollador Fullstack</h1>
        <div className="col-lg-10 col-md-8 col-sm-12">
          <CardFoto Foto="src\assets\img\poseCV.png">
            <h2 className="">David Ariel Racca</h2>
            <hr />
            ¡Hola! Soy David, un apasionado desarrollador fullstack junior con
            un gran ojo para los detalles. Desde chico, siempre tuve una
            afinidad especial con las computadoras, y con el tiempo, eso se
            transformó en una verdadera pasión por la programación.
            <br />
            Me manejo como pez en el agua con HTML, CSS y JavaScript, y tengo
            experiencia utilizando .NET Core 8. Actualmente, estoy en pleno
            proceso de aprendizaje de React, una tecnología que me está
            fascinando y con la que espero crear proyectos increíbles.
            <br />
            Busco constantemente oportunidades para crecer y aprender, y estoy
            ansioso por unirme a una empresa donde pueda enriquecer mi
            conocimiento y convertirme en un programador cada vez mejor. Mi
            objetivo es sumar experiencia y, por supuesto, aportar lo mejor de
            mí en cada proyecto.
            <br />
            Además, tengo un nivel de inglés básico-intermedio, lo que me
            permite comunicarme y entender documentación técnica en inglés sin
            problemas. Me considero un buen jugador de equipo, capaz de trabajar
            tanto como subordinado como líder. Siempre estoy dispuesto a
            aprender de los demás y a ofrecer mi ayuda cuando alguien se traba.
          </CardFoto>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12 row justify-center">
          <div className="row justify-center">
            <CardIconos text="React" clase="col-md-12 col-4">
              <FaReact />
            </CardIconos>
            <CardIconos text="Bootstrap" clase="col-md-12 col-4">
              <FaBootstrap />
            </CardIconos>
            <CardIconos text="Node.js" clase="col-md-12 col-4">
              <FaNodeJs />
            </CardIconos>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

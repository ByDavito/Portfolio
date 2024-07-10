import React from "react";
import "../Prueba/Vista.css";
import CardIconos from "../../assets/components/CardIconos/Index";
import { FaAngular, FaBootstrap, FaReact } from "react-icons/fa";
import CardTxt from "../../assets/components/Card/Index";
import CardFoto from "../../assets/components/CardFoto/Index";
import CardFoto2 from "../../assets/components/CardFoto2";
import Carrousel from "../../assets/components/Carrousel";

const Vista = () => {
  return (
  <div style={{ marginTop: "10vh" }} className="conteainer justify-center">

  <div className="row justify-center align-middle">
    <div className="col-lg-4 col-sm-12">
    <CardFoto2 Foto="src\assets\img\coop.png" > 
      <h2 className="card-title">Cooperativa</h2>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quaerat tempora consequuntur 
        veniam reiciendis temporibus velit deserunt deleniti harum, est, dolores molestiae placeat laborum, 
        dolore autem vel distinctio odit blanditiis.
        </p>
    </CardFoto2>
    </div>
    <div className="col-lg-4 col-sm-12">
    <CardFoto2 Foto="src\assets\img\coop.png" > 
      <h2 className="card-title">Cooperativa</h2>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quaerat tempora consequuntur 
        veniam reiciendis temporibus velit deserunt deleniti harum, est, dolores molestiae placeat laborum, 
        dolore autem vel distinctio odit blanditiis.
        </p>
    </CardFoto2>
    </div>
    <div className="col-lg-4 col-sm-12">
    <CardFoto2 Foto="src\assets\img\coop.png" > 
      <h2 className="card-title">Cooperativa</h2>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quaerat tempora consequuntur 
        veniam reiciendis temporibus velit deserunt deleniti harum, est, dolores molestiae placeat laborum, 
        dolore autem vel distinctio odit blanditiis.
        </p>
    </CardFoto2>
    </div>
    <h2 className="titulo">Mis Proyectos</h2>
    <div className="col-lg-12 col-sm-12">
      <Carrousel>
      </Carrousel>
    </div>
  </div>
  </div>
  );
};

export default Vista;

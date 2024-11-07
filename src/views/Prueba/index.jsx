import React from "react";
import "../Prueba/Vista.css";
import CardFoto2 from "../../assets/components/CardFoto2";
import Carrousel from "../../assets/components/Carrousel";

const Vista = () => {
  return (
  <div style={{ marginTop: "10vh" }} className="conteainer justify-center">

    <h2 className="titulo">Experiencias</h2>

  <div className="row justify-center align-middle">
    <div className="col-lg-4 col-sm-12">
    <CardFoto2 Foto="src\assets\img\coop.png" > 
      <h2 className="card-title">Cooperativa</h2>
      <hr />
      <p>He hecho pasantias en esta empresa donde aprendi a manejar react y node.js
        </p>
    </CardFoto2>
    </div>
    <div className="col-lg-4 col-sm-12">
    <CardFoto2 Foto="src\assets\img\logoEzpeleta.png" > 
      <h2 className="card-title">Instituto Ezpeleta</h2>
      <hr />
      <p>Este fue el instituto en la cual estudie y me formé como desarrollador de software.
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

import React from "react";
import CardFoto from "../../assets/components/CardFoto/Index";
import "./home.css";
import CardIconos from "../../assets/components/CardIconos/Index";
import { FaAngular, FaBootstrap, FaReact } from "react-icons/fa";

const Home = () => {
  return (
    <div style={{ marginTop: "13vh" }} className="conteainer justify-center">
    <div className="row justify-center align-middle">
      <div className="col-md-8 col-sm-12">
      <CardFoto Foto="src\assets\img\poseCV.png" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        quod doloremque fugit repellat, eius aliquam voluptatibus dolorum sit
        rem cumque aspernatur temporibus hic dolor, soluta eum, quasi aperiam
        eaque qui? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Facere inventore explicabo magnam enim. Quas pariatur repudiandae
        distinctio, molestias ex dicta quasi ipsum sed et numquam incidunt
        labore earum, repellendus unde?
      </CardFoto>
      </div>
      <div className="col-md-3 col-sm-12 row justify-center"> 
        <div className="row justify-center">
        <CardIconos text="React" clase="col-md-12 col-4">
          <FaReact />
        </CardIconos>
        <CardIconos text="Bootstrap" clase="col-md-12 col-4">
          <FaBootstrap />
        </CardIconos>
        <CardIconos text="Angular" clase="col-md-12 col-4">
          <FaAngular />
        </CardIconos>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home
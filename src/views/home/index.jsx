import React from "react";
import CardFoto from "../../assets/components/CardFoto/Index";
import "./home.css";
import CardIconos from "../../assets/components/CardIconos/Index";
import { FaAngular, FaBootstrap, FaReact } from "react-icons/fa";

const Home = () => {
  return (
    <div style={{ marginTop: "13vh" }} className="conteainer justify-center">
    <div className="row">
      <div className="col-9">
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
      <div className="col-3 row justify-center ml-3">
        <CardIconos text="React">
          <FaReact />
        </CardIconos>
        <CardIconos text="Bootstrap">
          <FaBootstrap />
        </CardIconos>
      </div>
    </div>
  </div>
  )
}

export default Home
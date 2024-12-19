import React from "react";
import "./Tecnologias.css";
import CardIconos from "../../assets/components/CardIconos/Index";
import {
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

const Tecnologias = () => {
  return (
    <div className="flex justify-center flex-col mt-36  w-full h-auto">
      <h3 className="text-center titulo">Tecnologias</h3>
      <div className="grid grid-cols-5 mx-52 mt-32">
        <CardIconos color="#7952B3" clase="col-span-1 mx-auto" text="C#" animacion="expand">
          <TbBrandCSharp />
        </CardIconos>
        <CardIconos color="#f7df1e" clase="col-span-1 mx-auto" text="Javascript" animacion="expand">
          <FaJs />
        </CardIconos>
        <CardIconos color="#F16529" clase="col-span-1 mx-auto" text="Html" animacion="expand">
          <FaHtml5 />
        </CardIconos>
        <CardIconos color="#264de4" clase="col-span-1 mx-auto" text="Css" animacion="expand">
          <FaCss3 />
        </CardIconos>
        <CardIconos color="#61DBFB" clase="col-span-1 mx-auto" text="React.js" animacion="rotate">
          <FaReact />
        </CardIconos>
        <CardIconos color="#7952B3" clase="col-span-2 mx-auto" text="Bootsrap" animacion="expand">
          <FaBootstrap />
        </CardIconos>
        <CardIconos color="#339933" clase="col-span-1 mx-auto" text="Node.js" animacion="expand">
          <FaNodeJs />
        </CardIconos>
        <CardIconos clase="col-span-2 mx-auto" text="GitHub" animacion="expand">
          <FaGithub />
        </CardIconos>
      </div>
    </div>
  );
};

export default Tecnologias;

import React, { useState } from "react";
import "./sobreMi.css";

const SobreMi = () => {
  const contenido = [
    {
      titulo: "Experiencias",
      descripcion: `<h4>Implecor</h4>

                    <p>Trabajé como soporte técnico. Si bien este puesto no estuvo directamente relacionado con el ámbito de la programación,
                    me familiaricé con sistemas de gestión e incluso llegué a proponer uno que integraba las áreas de ingeniería y almacén.</p>

                    <p>Lamentablemente, este sistema no fue aprobado, pero el proyecto incluyó investigación y documentación realizadas por mí. 
                    Tambien diseño esquemas de bases de datos y diagramas de flujo para estructurarlo adecuadamente.</p>

                    <hr>

                    <h4>Cooperativa</h4>

                    <p>Realicé mis prácticas profesionales durante dos meses. En esta experiencia, 
                    se nos planteó el desarrollo de una página web con React para un canal de televisión local, "Canal 50". 
                    Esta fue mi primera experiencia trabajando con React, 
                    por lo que investigué y aprendí diversas herramientas y metodologías para utilizar esta tecnología.</p>

                    <p>Ademas, me introdujeron a Node.js. Por cuestiones de tiempo, no profundizamos mucho en esta tecnología, 
                    pero descubrí su potencial y estoy dispuesto a seguir aprendiendo para dominarla en el futuro.</p>

                    <hr>

                    <h4>Tesis ProyectARG</h4>

                    <p>Este proyecto fue la tesis de mi carrera. El sistema fue diseñado para la compra, venta y alquiler de inmuebles, 
                    con funciones avanzadas como filtros de búsqueda, valoración y comentarios en las publicaciones. Además, cuenta con un 
                    sistema de manejo de usuarios y roles, gráficos, e informes administrativos.</p>

                    <p>El desarrollo se realizó con .NET Core 8. Este proyecto me permitió familiarizarme con el trabajo en equipo, 
                    ya que lo desarrollé junto a un compañero. A lo largo del proceso, trabajé tanto en el back-end como en el front-end, 
                    adquiriendo experiencia integral en ambas áreas.</p>
`,
    },
    {
      titulo: "Conocimientos",
      descripcion: `<h4>Front-end</h4>
                <p>Cuento con un sólido conocimiento en HTML, CSS y JavaScript. He diseñado interfaces de usuario intuitivas y dinámicas en varias ocasiones, 
                enfocándome en brindar una experiencia fluida y eficiente. 
                Estos diseños buscan optimizar el flujo de información y garantizar una navegación amigable para los usuarios.</p>
                
                <h4>Back-end</h4>
                <p>Durante el último año de mi carrera, me especialicé en el desarrollo back-end, 
                adquiriendo experiencia en .NET Core 8. He desarrollado métodos para la manipulación de datos y consultas optimizadas, 
                siempre priorizando la eficiencia y el buen rendimiento en las operaciones.</p>`,
    },
    {
      titulo: "Motivaciones",
      descripcion: `<h4>¿Por qué soy programador?</h4>

                    <p>Desde chico siempre fui muy receptivo a la tecnología y al mundo digital. Durante mi adolescencia, 
                    ayudé a mi padre en su negocio de informática, encargándome principalmente de armar y reparar computadoras. 
                    Siempre me fascinó cómo la tecnología, ya sea a través de los videojuegos o las herramientas de trabajo, puede transformar la forma en que vivimos. 
                    Esto me inspiró a dar un paso más y aprender a programar.</p>

                    <p>Decidir dedicarme a la programación fue un momento clave en mi vida, ya que no solo me permitió potenciar mis habilidades, 
                    sino también desarrollar mi creatividad. Hoy en día, siento que tengo un fuerte vínculo con esta profesión. 
                    Disfruto del proceso de resolver problemas y de la constante búsqueda de soluciones innovadoras. </p>
                    
                    <p>Sé que aún tengo mucho por aprender, pero siempre estoy abierto a nuevos desafíos, tecnologías y formas de trabajar en equipo. 
                    Mi objetivo es seguir creciendo como profesional, contribuyendo con mi conocimiento y pasión en cada proyecto que desarrollo.</p>`,
    },

    {
      titulo: "Quién soy",
      descripcion: `<p>Mi nombre es <b>David Ariel Racca</b>, un programador fullstack junior apasionado por la tecnología desde chico. 
                Me manejo muy bien con <b>React, .NET Core 8</b> y desarrollo frontend con <b>HTML, CSS y JavaScript</b>. Además, 
                tengo experiencia en la implementación de funcionalidades dinámicas y diseño de interfaces intuitivas. </p>
                <p>Mi meta es seguir aprendiendo y superándome, aplicando soluciones creativas y eficientes en los proyectos que desarrollo. 
                Soy una persona detallista, curiosa y comprometida. 
                Se trabajar en equipo y si la situacion lo amerita, puedo liderar a otros. Soy capaz de ayudar a otros cuando lo necesitan, 
                porque pienso que es la mejor forma de aprender. </p>`,
    },
  ];

  const [contenidoActual, setContenidoActual] = useState(contenido[3]);

  const cambioContenido = (index) => {
    document.querySelector(".blur").style.display = "block";
    document.querySelector(".blur").style.animation = "blur .2s forwards";
    
    setTimeout(() => {
      setContenidoActual(contenido[index]);
      document.querySelector(".blur").style.animation = "focus .2s ";
      setTimeout(() => {
        document.querySelector(".blur").style.display = "none";
      }, 200)
    }, 200);
  };

  return (
    <div className="grid grid-cols-5 gap-4 w-full h-full mt-44">
      
      <div className="main-card col-span-1">
        <img src="src/assets/img/poseCV.png" alt="" />
        <ul>
          <li onClick={() => cambioContenido(3)}>
            Quién soy <span></span>
          </li>
          <li onClick={() => cambioContenido(0)}>
            Experiencias <span></span>
          </li>
          <li onClick={() => cambioContenido(1)}>
            Conocimientos <span></span>
          </li>
          <li onClick={() => cambioContenido(2)}>
            Motivaciones <span></span>
          </li>
        </ul>
      </div>

      <div className="info-container col-span-4">
      <div className="blur"></div>
        <h3>{contenidoActual.titulo}</h3>
        <hr />
        <div
          dangerouslySetInnerHTML={{ __html: contenidoActual.descripcion }}
        ></div>
      </div>
    </div>
  );
};

export default SobreMi;

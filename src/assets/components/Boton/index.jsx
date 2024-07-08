import React, { useEffect, useState } from "react";
import styles from "./Boton.module.css";
import { FaMoon, FaSun } from "react-icons/fa";

const Boton = ({ children, ...props }) => {
  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    setRotate(!rotate);
  };
  const [darkMode, setDarkMode] = useState(false);
  const [icon, setIcon] = useState(<FaSun />);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      setIcon(<FaMoon />);
    } else {
      document.body.classList.remove("dark");
      setIcon(<FaSun />);
    }
  }, [darkMode]);
  return (
    <div>
      <button
        className={`${styles.boton} ${rotate ? styles.rotate : ''}`}
        onClick={() => setDarkMode(!darkMode)} 
      >
        {icon}
      </button>
    </div>
  );
};

export default Boton;

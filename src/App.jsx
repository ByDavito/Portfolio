import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./views/home";
import Vista from "./views/Prueba";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./views/NotFound";
import { FaMoon, FaSun } from "react-icons/fa";
import Dashboard from "./assets/components/Dashboard/Index";
import  './assets/img/poseCV.png';

function App() {
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
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="*" element={<NotFound />} />
            <Route path="/Vista" element={<Vista />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

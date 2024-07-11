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
import 'animate.css';
import { request } from "./utils/request";


function App() {
  const devolucion = async() => {
    try {
      const response = await request();
      console.log(response.data);
    } catch (error) {
      console.log('mal pibe', error.response ? error.response.data : error.message);
    }
  }
  devolucion();
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

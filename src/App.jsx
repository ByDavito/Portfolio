
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./views/home";
import Vista from "./views/Prueba";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./views/NotFound";
import Dashboard from "./assets/components/Dashboard/Index";
import  './assets/img/poseCV.png';
import 'animate.css';
import { request } from "./utils/request";
import SobreMi from "./views/SobreMi";
import Tecnologias from './views/Tecnologías';


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
            <Route path="/SobreMi" element={<SobreMi />} />
            <Route path="/Tecnologías" element={<Tecnologias />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import Navbar from "../Navbar/Index";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Dashboard = ({ children }) => {
  return (
    <>
        <Navbar/>
        <main className="justify-center">
        <Outlet />
        </main>
        <Footer />
      
          
        
    </>
  );
};

export default Dashboard;

import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
          <Navbar/>
          <main>
            <Outlet /> {/* All child routes render here */}
          </main>
          <Footer />
        </>
      );    
}

export default MainLayout
import React from 'react'
import "./Home.css"
import Crousel from "./Carousel";
import Products from './Products';
import Navbar from '../Navbar/Navbar';

 const Home = () => {
    return (
      <div className="home">
         <Navbar/>
         <Crousel />
         <Products/>
      </div>
    );
}
export default Home;

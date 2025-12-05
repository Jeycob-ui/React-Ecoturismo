import React from "react";
import "./index.css";
import Header2 from "../components/Header2/Header2";
import Footer from "./../components/Footer/Footer";
// import Card from './../components/Cards/Card';
import Slider from "../components/slider/Slider";

function PagLogueados() {
  return (
    <>
      <Header2 />
      {/* MAIN */}
      <main>
        <Slider />

        {/* CARDS */}
        <div className="contenedorcards">
          {/* <Card 
            urlImg={"https://picsum.photos/id/40/300/200"}
            title={"Paisajes"}
            description={"Conoce los paisajes más hermosos de la región."}
          /> */}
          {/* <Card 
            urlImg={"https://picsum.photos/id/41/300/200"}
            title={"Gastronomía"}
            description={"Sabores únicos que te encantarán."}
          /> */}
          {/* <Card 
            urlImg={"https://picsum.photos/id/42/300/200"}
            title={"Cultura"}
            description={"Tradición y arte en cada rincón."}
          /> */}
        </div>
        {/* CARDS */}
      </main>

      <Footer />
    </>
  );
}

export default PagLogueados;

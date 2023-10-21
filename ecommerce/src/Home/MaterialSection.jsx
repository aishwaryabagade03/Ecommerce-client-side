import React from "react";
import material from "../assets/Home/Materials_Hero-DT.jpg";
const MaterialSection = () => {
  return (
    <div class="container">
      <div class="grid grid-cols-2 md-grid-col">
        <div class="col-2 bg-gray-950 ...">
         <div class="text-white text-start flex flex-col px-24 mt-44">
         <p class="text-base font-serif">Our Materials</p>
          <h1 class="font-extrabold">EXPERTLY CRAFTED & RESPONSIBLY SOURCED</h1>
         </div>
        </div>
        <div class="materialimg col-2 ...">
          <img src={material} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MaterialSection;

import React, {useState, useEffect} from "react";
import axios from "axios";

const Categorycomp = ()=>{
  const [categories, setCategory]= useState([])
  function Categorydata(){
    axios
    .get("http://localhost:3003/Category/all-categories")
    .then((res) => {
      setCategory(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(()=>{
    Categorydata()
  },[])

  return (
   <>
   {categories.length > 0 ? (
     <div className="bg-gray-100">
     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-24">
         <h2 className="text-4xl  text-gray-900">EXPLORE BY CATEGORIES</h2>

         <div className="mt-12 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
           {categories.map((category) => (
             <div key={category.id} className="group relative">
               <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                 <img
                   src={`http://localhost:3003/Upload/category/${category.image}`}
                   alt={""}
                   className="h-full w-full object-cover object-center"
                 />
               </div>
               <h3 className="mt-6 mb-6 text-base text-gray-500">
                 <a href="#">
                   <span className="absolute inset-0" />
                   {category?.name}
                 </a>
               </h3>
             </div>
           ))}
         </div>
       </div>
     </div>
   </div>
   ):(
    <h1>Loading...</h1>
   )}
   </>
  )
}

export default Categorycomp
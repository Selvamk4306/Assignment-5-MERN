import React from "react";
import useFetch from "./useFetch";

const API_URL = "https://dummyjson.com/products";

const App = () => {
  const { data, load, err } = useFetch(API_URL);

  return (
   <div className="min-h-screen flex justify-center">
    <div>
      <header>
        <h1 className="w-full bg-gray-700 text-white text-4xl font-bold rounded-xl py-5 px-3">Pdk'S Ecommerce Store</h1>
         <h1 className="max-w-2xl mx-auto text-3xl font-bold mt-10 mb-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-center p-5 rounded-xl">
          Products Available</h1>
      </header>
      <main>
        {load &&
        <h3 className="text-blue-500 text-center">Loading Page....</h3>
        }
        {err && 
        <h3 className="text-red-500 text-center">{err}</h3> 
        }

        <div className="flex flex-wrap gap-8 justify-center">
          { data &&
          data.products &&
          data.products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg w-64 min-h-[390px] p-4 flex flex-col items-center 
             border-b-4 border-transparent hover:border-b-blue-500 
             transition-all duration-200 hover:scale-105">
              <img src={product.images?.[0]} alt={product.title} className="h-48 w-full object-cover"/>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-600">{product.description}</p>
                <div className="flex item-center justify-between mt-3">
                  <p className="text-blue-600 text-center text-bold font-semibold">${product.price}</p>
                  <h3 className="text-gray-400 text-sm justify-right">⭐{product.rating}</h3>
                </div>
              </div>
            </div>
          ))
         }
        </div>
      </main>
    </div>
  </div>
  );
};

export default App;

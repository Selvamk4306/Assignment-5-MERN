import React from "react";
import useFetch from "./useFetch";

const API_URL = "https://dummyjson.com/products";

const App = () => {
  const { data, loading, error } = useFetch(API_URL);

  return (
    <div className="bg-black min-h-screen py-8">
      <h1 className="text-white text-3xl font-bold text-center mb-10">
        Products
      </h1>

      {loading && <p className="text-blue-400 text-center">Loading...</p>}
      {error && <p className="text-red-400 text-center">Error: {error}</p>}

      <div className="flex flex-wrap gap-8 justify-center">
        {data?.products?.slice(0, 30).map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg w-64 min-h-[390px] shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-150"
          >
            <img
              src={
                product.images?.length > 0
                  ? product.images[0]
                  : "https://via.placeholder.com/600x400?text=No+Image"
              }
              alt={product.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/600x400?text=No+Image";
              }}
              className="product-image w-full h-40 object-cover rounded-md mb-4"
            />

            <div className="w-full px-2">
              <h2 className="text-lg font-semibold text-gray-900 mb-2 truncate">
                {product.title}
              </h2>
              <p className="text-sm text-gray-700 mb-1 truncate">
                {product.description}
              </p>
              <span className="block text-blue-700 font-bold text-center mb-2">
                ₹{product.price}
              </span>
              <span className="text-xs text-gray-400">{product.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

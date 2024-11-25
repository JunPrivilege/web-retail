/* eslint-disable react/prop-types */
import { useEffect } from "react";

import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { formatter } from "../data/formatter";

function ProductList({ products, buttonTitle, onVisibleChange, sortOption }) {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 8);

  const sortedProducts = [...visibleProducts].sort((a, b) => {
    if (sortOption === "price") {
      return a.price - b.price;
    }
    if (sortOption === "name") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  useEffect(() => {
    onVisibleChange(sortedProducts.length);
  }, [sortedProducts, onVisibleChange]);

  return (
    <>
      <div>
        <ul className="flex flex-wrap gap-6 w-full h-full mt-5 justify-center">
          {sortedProducts.map((product) => (
            <li key={product.id} className="mb-3">
              <Link to={`${product.id}`}>
                <img
                  className="w-64 h-64 object-cover cursor-pointer hover:scale-105 ease-in-out duration-300"
                  src={product.image}
                  alt={product.title}
                />
                <p className="flex flex-col items-center mt-5">
                  <p className="font-bold text-lg text-ellipsis truncate w-52">
                    {product.title}
                  </p>
                  <p className="font-medium text-stone-400">
                    {formatter.format(product.price)}
                  </p>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center my-10">
        <Button onClick={() => setShowAll(true)} title={buttonTitle} />
      </div>
    </>
  );
}

export default ProductList;

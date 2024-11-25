/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";

import Button from "./Button";
import { cartActions } from "../store/cart-slice";

function ProductItem({ products = [], id, title, price, image, category }) {
  const dispatch = useDispatch();

  function addToCartHandler() {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image,
        category,
      })
    );
  }

  return (
    <div className="px-32 pt-10 pb-28">
      <ul className="flex flex-wrap gap-6 w-full h-full justify-center">
        {products.map((product) => (
          <li
            key={product.id}
            id={product.id}
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-5"
          >
            <img
              className="w-[32rem] h-[23rem] object-cover"
              src={product.image}
              alt={product.title}
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
              <p className="text-xl mb-4">{product.price} $</p>
              <p className="text-gray-500 mb-6">{product.description}</p>
              <div className="flex items-center mb-4">
                {/* <div className="border-solid border-2 border-stone-500">
                  <button className="px-4 py-2 ">-</button>
                  <span className="mx-3 text-lg">1</span>
                  <button className="px-4 py-2 ">+</button>
                </div> */}
                <Button onClick={addToCartHandler} title="Add to cart" />
                <button className="ml-4 px-3 py-2 border-solid border-2 border-stone-500">
                  <i className="fa-regular fa-heart text-stone-500"></i>
                </button>
              </div>
              <ul className="list-disc pl-5 text-gray-500">
                <li className="uppercase font-semibold">{product.category}</li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductItem;

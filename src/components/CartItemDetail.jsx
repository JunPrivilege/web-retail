import { useDispatch } from "react-redux";

import { cartActions } from "../store/cart-slice";
import Button from "./Button";

/* eslint-disable react/prop-types */
function CartItemDetail({
  image,
  title,
  category,
  price,
  quantity,
  // total,
  id,
}) {
  const dispatch = useDispatch();

  function removeItemHandler() {
    dispatch(cartActions.removeItemFromCart(id));
  }

  function addItemHandler() {
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

  function removeAllItemsHandler() {
    dispatch(cartActions.removeAllItemsWithId(id));
  }

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between border-b py-4">
      <div className="flex items-center space-x-4 w-full lg:w-1/2">
        <img src={image} alt={title} className="w-16 h-20 object-cover" />
        <div>
          <p className="font-semibold text-stone-700 lg:w-50">{title}</p>
          <p className="text-sm text-stone-500">{category}</p>
          <p className="text-red-500 mt-2 font-semibold">${price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full lg:w-1/2 mt-4 lg:mt-0">
        <div className="flex items-center space-x-2">
          <Button
            title="-"
            onClick={removeItemHandler}
            className="px-2 py-1 border border-stone-300 rounded text-stone-700"
          />
          <span className="px-2">{quantity}</span>
          <Button
            title="+"
            onClick={addItemHandler}
            className="px-2 py-1 border border-stone-300 rounded text-stone-700"
          />
        </div>
        {/* <p className="text-red-500">${total.toFixed(2)}</p> */}
        <button
          onClick={removeAllItemsHandler}
          className="text-stone-500 hover:text-red-500"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default CartItemDetail;

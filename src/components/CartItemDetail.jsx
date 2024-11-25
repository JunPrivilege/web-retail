import { useDispatch } from "react-redux";

import { cartActions } from "../store/cart-slice";

/* eslint-disable react/prop-types */
function CartItemDetail({
  image,
  title,
  category,
  price,
  quantity,
  total,
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
    <tr className="border-b">
      <td className="px-4 py-4 flex items-center space-x-4">
        <img src={image} alt={title} className="w-12 h-16 object-cover" />
        <div>
          <p className="font-semibold text-gray-700 text-ellipsis truncate w-52">
            {title}
          </p>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
      </td>
      <td className="px-4 py-4 text-center text-gray-700">
        {price.toFixed(2)}
      </td>
      <td className="px-4 py-4 text-center">
        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={removeItemHandler}
            className="px-2 py-1 border border-gray-300 rounded text-gray-700"
          >
            -
          </button>
          <span className="px-2">{quantity}</span>
          <button
            onClick={addItemHandler}
            className="px-2 py-1 border border-gray-300 rounded text-gray-700"
          >
            +
          </button>
        </div>
      </td>
      <td className="px-4 py-4 text-center text-gray-700">
        {total.toFixed(2)}
      </td>
      <td className="px-4 py-4 text-center">
        <button onClick={removeAllItemsHandler} className="text-gray-500 hover:text-red-500">
          <i className="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default CartItemDetail;

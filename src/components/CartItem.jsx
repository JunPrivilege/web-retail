import { useSelector } from "react-redux";

import CartItemDetail from "./CartItemDetail";

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="w-2/3 mr-8">
      <div className="w-full">
        <div className="overflow-x-auto">
          <table className="border-collapse w-full">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-center font-semibold">Product</th>
                <th className="px-4 py-2 text-center font-semibold">
                  Unit Price
                </th>
                <th className="px-4 py-2 text-center font-semibold">QTY</th>
                <th className="px-4 py-2 text-center font-semibold">
                  Total USD
                </th>
                <th className="px-4 py-2 text-center font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <CartItemDetail
                    key={item.id}
                    id={item.id}
                    title={item.name}
                    image={item.image}
                    category={item.category}
                    price={item.price}
                    quantity={item.quantity}
                    total={item.totalPrice}
                  />
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-8 text-stone-500 text-lg"
                  >
                    No products in the cart
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

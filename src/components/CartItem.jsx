import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItemDetail from "./CartItemDetail";

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="w-full lg:w-2/3 lg:mr-8">
      <div className="w-full">
        <h2 className="text-2xl font-bold border-b p-2 text-center">Cart</h2>
        {cartItems.length > 0 ? (
          <div className="space-y-4 lg:space-y-0 lg:table lg:w-full">
            {cartItems.map((item) => (
              <CartItemDetail
                key={item.id}
                id={item.id}
                title={item.name}
                image={item.image}
                category={item.category}
                price={item.price}
                quantity={item.quantity}
                // total={item.totalPrice}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 ">
            <p className="text-stone-500 text-lg">No products in the cart</p>
            <Link to={"/catalog"} className="underline text-red-500">
              shop here!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartItem;

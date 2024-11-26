import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function MainNavigation() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="flex w-full pt-10 pb-5 px-14 justify-center items-center">
      <nav className="w-full">
        <h1 className="text-center text-6xl font-bold m-0 font-mono">Logo</h1>
        <div className="flex justify-around items-center mt-10">
          <div className="flex">
            <i className="fas fa-search text-xl"></i>
          </div>
          <ul className="flex">
            <li className="gap-8 flex list-none">
              <NavLink
                className="uppercase no-underline font-bold text-xl"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="uppercase no-underline font-bold text-xl"
                to="catalog"
              >
                Catalog
              </NavLink>
              <a
                aria-disabled
                className="text-stone-200 cursor-not-allowed uppercase font-bold text-xl"
              >
                -
              </a>
              <a
                aria-disabled
                className="text-stone-200 cursor-not-allowed uppercase font-bold text-xl"
              >
                -
              </a>
              <a
                aria-disabled
                className="text-stone-200 cursor-not-allowed uppercase font-bold text-xl"
              >
                -
              </a>
              <a
                aria-disabled
                className="text-stone-200 cursor-not-allowed uppercase font-bold text-xl"
              >
                -
              </a>
              <a
                aria-disabled
                className="text-stone-200 cursor-not-allowed uppercase font-bold text-xl"
              >
                -
              </a>
            </li>
          </ul>
          <ul className="flex gap-5 cursor-pointer">
            <li className="relative m-0 p-0">
              <Link to="cart" className="relative">
                <i className="fa-solid fa-cart-shopping text-xl"></i>
                {cartQuantity > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
                    {cartQuantity}
                  </span>
                )}
              </Link>
            </li>
            <li className="m-0 p-0">
              <i className="fa-regular fa-heart text-xl"></i>
            </li>
            <li className="m-0 p-0">
              <i className="fa-regular fa-user text-xl"></i>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;

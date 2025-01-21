import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function MainNavigation() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex w-full pt-5 pb-3 px-4 md:px-14 justify-between items-center">
      <nav className="w-full">
        <div className="flex justify-between items-center">
          <button
            className="flex items-center md:hidden"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>

          <h1 className="text-3xl md:text-6xl font-bold m-0 font-mono text-center flex-1 md:flex-none">
            Logo
          </h1>

          <ul className="hidden md:flex gap-8 list-none uppercase font-bold text-lg mt-4 md:mt-0 justify-center">
            <li>
              <NavLink className="no-underline" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="no-underline" to="catalog">
                Catalog
              </NavLink>
            </li>
          </ul>

          <ul className="flex gap-5 items-center cursor-pointer">
            <li className="relative">
              <Link to="cart" className="relative">
                <i className="fa-solid fa-cart-shopping text-xl"></i>
                {cartQuantity > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
                    {cartQuantity}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <i className="fa-regular fa-heart text-xl"></i>
            </li>
            <li>
              <i className="fa-regular fa-user text-xl"></i>
            </li>
          </ul>
        </div>

        {showMenu && (
          <ul className="md:hidden flex flex-col gap-4 mt-4 uppercase font-bold text-lg">
            <li>
              <NavLink
                className="no-underline"
                to="/"
                onClick={() => setShowMenu(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="no-underline"
                to="catalog"
                onClick={() => setShowMenu(false)}
              >
                Catalog
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default MainNavigation;

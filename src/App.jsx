import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage, { loader as homeLoader } from "./pages/Home";
import Root from "./roots/Root";
import CatalogPage, { loader as catalogLoader } from "./pages/Catalog";
import ProductDetailPage, {
  loader as productDetailLoader,
} from "./pages/ProductDetail";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    handle: {breadcrumb: "Home"},
    children: [
      { index: true, element: <HomePage />, loader: homeLoader },
      {
        path: "catalog",
        handle: {breadcrumb: "Catalog"},
        children: [
          { index: true, element: <CatalogPage />, loader: catalogLoader },
          {
            path: ":productId",
            handle: {breadcrumb: "Product Detail"},
            loader: productDetailLoader,
            id: "product-detail",
            children: [{ index: true, element: <ProductDetailPage /> }],
          },
        ],
      },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

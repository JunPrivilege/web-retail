import { useState } from "react";
import { Dropdown } from "primereact/dropdown";

import CatalogHeader from "../assets/catalog-header.png";
import { LAYOUT_GROUP } from "../data";
import PromotionalBanner from "../components/PromotionalBanner";
import CategoriesCatalog from "../components/CategoriesCatalog";
import { useLoaderData } from "react-router-dom";
import ProductList from "../components/ProductList";

function CatalogPage() {
  const data = useLoaderData();
  const [visibleCount, setVisibleCount] = useState(0);
  const [sortOption, setSortOption] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  const sortOptions = [
    { label: "Sort by Default", value: "default" },
    { label: "Sort by Price", value: "price" },
    { label: "Sort by Name", value: "name" },
  ];

  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const itemTemplate = (option) => {
    return (
      <div className="p-2 bg-white hover:bg-black hover:text-white border-b">
        {option.label}
      </div>
    );
  };

  return (
    <div className="min-w-screen min-h-screen">
      <div className="relative w-full h-96 mt-2">
        <img
          className="w-full h-full object-cover ml-auto brightness-50"
          src={CatalogHeader}
          alt="rooms"
        />
        <div className="header-catalog absolute inset-0 flex items-center justify-center max-w-lg ml-48">
          <div className="p-8 flex flex-col justify-center w-full">
            <h2 className="text-5xl font-bold mb-4 text-white">CATALOG</h2>
            <p className="font-thin text-white line-clamp-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              enim quos iure repudiandae amet sit vitae, atque id deserunt totam
            </p>
          </div>
        </div>
      </div>

      <div className="catalog px-32 pb-28">
        <CategoriesCatalog />

        <div className="list-shortcuts flex justify-between items-center pb-10">
          <p className="font-medium text-stone-400 line-clamp-1">
            Showing 1 - {visibleCount} of {data.length} results
          </p>
          <div className="flex items-center border rounded-lg px-4 py-2 w-72">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              className="ml-3 w-full focus:outline-none"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4">
            <p className="font-medium">Filter</p>
            <i className="fa-solid fa-list"></i>
            <Dropdown
              className="sort-option font-medium w-1/3"
              value={sortOption}
              options={sortOptions}
              onChange={(e) => setSortOption(e.value)}
              itemTemplate={itemTemplate}
            />

            <ul className="layout-group flex items-center gap-3">
              {LAYOUT_GROUP.map((data) => (
                <li key={data.id}>
                  <img className="w-full h-full" src={data.img} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ProductList
          products={filteredData}
          sortOption={sortOption}
          buttonTitle="Load More"
          onVisibleChange={setVisibleCount}
        />
        <PromotionalBanner />
      </div>
    </div>
  );
}

export default CatalogPage;

export async function loader() {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error("Could Not Fetch Data.");
  } else {
    return response;
  }
}

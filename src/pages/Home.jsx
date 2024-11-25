/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";

import HomeProducts from "../components/HomeProducts";
import HomeProjects from "../components/HomeProjects";
import JeweleryCollections from "../components/JeweleryCollections";

function HomePage() {
  const data = useLoaderData();

  return (
    <>
      <main className="min-h-screen min-w-screen">
        <div className="card flex justify-end items-center h-96 w-full mt-2">
          <p className="rounded-lg shadow-lg flex max-w-lg ml-auto mr-40">
            <p className="p-8 bg-gray-500 flex flex-col justify-center w-full">
              <h2 className="text-3xl font-bold mb-4 text-white">
                New Generation Ceramic Tile
              </h2>
              <p className="text-white font-thin mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat enim quos iure repudiandae amet sit vitae, atque id
                deserunt totam sapiente voluptate, cum odio excepturi laudantium
                dicta sint aut? Atque.
              </p>
              <button className="px-5 py-3 bg-white text-black font-bold rounded hover:bg-black hover:text-white w-48 uppercase">
                Learn More
              </button>
            </p>
          </p>
        </div>
        <div className="px-32 pt-5 pb-28">
          <HomeProducts />
          <HomeProjects categories={data} />
          <JeweleryCollections />
        </div>
      </main>
    </>
  );
}

export default HomePage;

export async function loader() {
  const response = await fetch("https://fakestoreapi.com/products/categories");

  if (!response.ok) {
    throw new Error("Could Not Fetch Data.");
  } else {
    return response;
  }
}

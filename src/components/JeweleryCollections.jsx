import { useEffect, useState } from "react";

import ShowRoom from "../assets/showroom.jpeg";
import HeaderContent from "./HeaderContent";
import Button from "./Button";

import { Link } from "react-router-dom";

function JeweleryCollections() {
  const [fetchedJewelery, setFetchedJewelery] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/jewelery"
      );

      if (!response.ok) {
        throw new Error("Fetching jewelery failed.");
      } else {
        const resData = await response.json();
        setFetchedJewelery(resData);
      }
    }

    fetchEvents();
  }, []);

  return (
    <HeaderContent title="Jewelery Collections">
      <ul className="flex flex-wrap gap-7 justify-center w-full mt-5">
        {fetchedJewelery.map((data) => (
          <li key={data.id} className="mb-3">
            <Link to={`/catalog/${data.id}`}>
              <img
                className="w-64 h-64 object-cover cursor-pointer hover:scale-105 ease-in-out duration-300"
                src={data.image}
                alt={data.title}
              />
            </Link>
            <p className="flex flex-col items-center mt-5 leading-6">
              <p className="font-bold text-lg text-ellipsis truncate w-52">
                {data.title}
              </p>
              <p className="font-medium text-stone-500">{data.price}$</p>
            </p>
          </li>
        ))}
      </ul>
      <div className="flex justify-center my-10">
        <Link to="catalog">
          <Button title="More Product" />
        </Link>
      </div>

      <div className="relative w-full h-96 mt-24">
        <img
          className="w-[60%] h-full object-cover"
          src={ShowRoom}
          alt="rooms"
        />
        <p className="absolute inset-0 flex items-center justify-center max-w-lg ml-auto">
          <p className="p-8 bg-stone-100 flex flex-col justify-center w-full">
            <h2 className="text-3xl font-bold mb-4">Our Showrooms</h2>
            <p className="font-thin mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              enim quos iure repudiandae amet sit vitae, atque id deserunt totam
              sapiente voluptate, cum odio excepturi laudantium dicta sint aut?
              Atque.
            </p>
            <Button title="Learn More" />
          </p>
        </p>
      </div>
    </HeaderContent>
  );
}

export default JeweleryCollections;

/* eslint-disable react/prop-types */
import HeaderContent from "./HeaderContent";
import Button from "./Button";
import { Link } from "react-router-dom";

import { IMAGES_CATEGORIES } from "../data";

function HomeProjects({ categories }) {
  return (
    <HeaderContent title="Projects">
      <div className="relative flex items-center">
        <ul className="flex gap-10 w-full h-full mt-5">
          {IMAGES_CATEGORIES.map((data, index) => (
            <li key={data.id || index} className="text-center">
              <img
                className="w-64 h-64 object-cover cursor-pointer hover:scale-105 ease-in-out duration-300"
                src={data.images}
                alt={data.title}
              />
              <p className="mt-5 text-gray-700 font-semibold capitalize">
                {categories[index]}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center my-10">
        <Link to="catalog">
          <Button title="View All" />
        </Link>
      </div>
    </HeaderContent>
  );
}

export default HomeProjects;

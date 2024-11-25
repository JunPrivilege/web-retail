import { CATEGORY_CATALOG } from "../data";

function CategoriesCatalog() {
  return (
    <div>
      <ul className="flex flex-wrap gap-7 justify-center w-full my-20">
        <li className="w-64 h-72 bg-black cursor-pointer hover:scale-105 ease-in-out duration-300">
          <div className="flex flex-col justify-center mt-4 p-5 leading-5">
            <p className="text-xs text-stone-300">Lorem Ipsum</p>
            <p className="text-lg text-white font-medium mt-2">Categories</p>
            <p className=" text-stone-400 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s,
            </p>
          </div>
        </li>
        {CATEGORY_CATALOG.map((data) => (
          <li
            key={data.id}
            className="relative mb-3 cursor-pointer hover:scale-105 ease-in-out duration-300"
          >
            <img
              className="w-64 h-72 object-cover brightness-75"
              src={data.img}
              alt=""
            />
            <div className="absolute inset-0 flex flex-col justify-end p-5">
              <p className="text-xs text-stone-300">{data.title}</p>
              <p className="text-lg text-white font-medium">{data.paragraph}</p>
              <p className=" text-stone-300">{data.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesCatalog;

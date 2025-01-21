import Room from "../assets/room.jpeg";
import LivingRoom from "../assets/living-room.jpeg";
import HeaderContent from "./HeaderContent";

import { SECTIONS, IMAGES } from "../data/index";
import Button from "./Button";

function HomeProducts() {
  return (
    <HeaderContent title="Products">
      <div className="home-products">
        <ul className="scroll-horizontal-wrapper grid grid-cols-1 md:grid-cols-2 gap-10 p-2">
          {SECTIONS.map((section) => (
            <li key={section.id} className="scroll-horizontal-item relative">
              <img
                src={section.imgSrc}
                alt={section.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg "
              />
              <p className="absolute -bottom-4 left-0 right-0 bg-black bg-opacity-70 text-white p-4 w-5/6 text-center mx-auto">
                <h3 className="text-xl font-semibold">{section.title}</h3>
                <p className="text-sm line-clamp-2">{section.description}</p>
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative w-full h-96 mt-24">
        <img
          className="w-[90%] h-full object-cover ml-auto"
          src={Room}
          alt="rooms"
        />
        <p className="absolute inset-0 flex items-center justify-center max-w-lg">
          <p className="p-8 bg-stone-100 flex flex-col justify-center w-full">
            <h2 className="text-3xl font-bold mb-4">Vision</h2>
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

      <div className="creative mt-24 flex">
        <div>
          <h1 className="font-bold text-3xl leading-10">
            Creative Solutions <br /> by Professional Designers
          </h1>
          <p className="mt-6 font-thin">
            Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
            <br />
            aptent dapibus metus maecenas consequat. Elementum interdum a
            <br />
            semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetr
            <br />
            sagittis sit aliquet at. Magna nam platea justo.
          </p>
          <ul className="flex flex-wrap gap-9 my-12 justify-center items-center">
            {IMAGES.map((data) => (
              <li key={data.id} className="text-center">
                <img className="w-52 h-72 object-cover" src={data.img} alt="" />
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Button title="Read More" />
          </div>
        </div>
        <span className="relative ml-auto hidden md:block sm:hidden">
          <img
            src={LivingRoom}
            alt="Living Room"
            className="w-[25rem] h-full object-cover"
          />
          <p className="absolute inset-0 flex items-end max-w-52 ml-auto">
            <p className="flex items-center p-7 bg-white bg-opacity-90 justify-center w-full gap-4">
              <i className="fa-solid fa-play p-4 text-slate-50 bg-black rounded-full"></i>
              <span>
                <p className=" text-stone-400 mb-1">Watch</p>
                <p className="font-bold">Video-tour</p>
              </span>
            </p>
          </p>
        </span>
      </div>
    </HeaderContent>
  );
}

export default HomeProducts;

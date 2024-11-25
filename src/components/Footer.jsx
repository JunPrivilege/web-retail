import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-24">
      <div className="container mx-auto grid grid-cols-4 md:grid-cols-4">
        <div className="md:mb-0 flex flex-col justify-between h-full">
          <h2 className="text-5xl font-bold font-mono">Logo</h2>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4">
              <Link aria-label="Facebook">
                <i className="fab fa-facebook-f text-2xl"></i>
              </Link>
              <Link aria-label="Twitter">
                <i className="fab fa-twitter text-2xl"></i>
              </Link>
              <Link aria-label="Instagram">
                <i className="fab fa-instagram text-2xl"></i>
              </Link>
            </div>
            <p className="text-gray-500 text-sm mt-7">
              Copyright © 2023 | All Rights Reserved.
            </p>
          </div>
        </div>

        <div className="md:mb-0 leading-7">
          <h3 className="font-bold mb-2 text-xl">Products</h3>
          <ul>
            <li>
              <Link className="text-gray-400">
                Sand Stone
              </Link>
            </li>
            <li>
              <Link className="text-gray-400">
                Stone
              </Link>
            </li>
            <li>
              <Link className="text-gray-400">
                Cement
              </Link>
            </li>
            <li>
              <Link className="text-gray-400">
                Soft Stone
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:mb-0 leading-7">
          <h3 className="font-bold mb-2 text-xl">Services</h3>
          <ul>
            <li>
              <Link className="text-gray-400">
                Measurement Service
              </Link>
            </li>
            <li>
              <Link className="text-gray-400">
                Product Advice
              </Link>
            </li>
            <li>
              <Link className="text-gray-400">
                Interior Design
              </Link>
            </li>
          </ul>
        </div>

        <div className="leading-7">
          <h3 className="font-bold mb-2 text-xl">Contact Information</h3>
          <p className="text-gray-400">
            3181 Al Imam Saudi Ibn Abdul Aziz Branch Rd, An Nuzhah, Riyadh
            12414, Saudi Arabia
          </p>
          <p className="flex text-gray-500 text-sm justify-end mt-20">
            Created with love by
            <span className="font-bold">thecreation design</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

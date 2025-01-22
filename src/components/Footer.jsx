import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1>BEACHES</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icon hover:scale-150" />
            <FaTwitter className="icon hover:scale-150" />
            <FaYoutube className="icon hover:scale-150" />
            <FaPinterest className="icon hover:scale-150" />
            <FaInstagram className="icon hover:scale-150" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex text-lg">
            <li className="hover:underline">About</li>
            <li className="hover:underline">Partnerships</li>
            <li className="hover:underline">Careers</li>
            <li className="hover:underline">Newsroom</li>
            <li className="hover:underline">Advertising</li>
          </ul>
          <ul className="text-right lg:flex text-lg">
            <li className="hover:underline">Home</li>
            <li className="hover:underline">Destinations</li>
            <li className="hover:underline">Travel</li>
            <li className="hover:underline">View</li>
            <li className="hover:underline">Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

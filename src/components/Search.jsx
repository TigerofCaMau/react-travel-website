import React from "react";
import { RiCustomerService2Full, RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      {/* Left Side */}
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2 className="pb-3">LUXURY VACATIONS FOR TWO PEOPLE</h2>
          <p className="text-xl py-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam hic
            quae possimus perspiciatis in optio earum eos porro enim nemo itaque
            laudantium eum omnis, at commodi. Voluptatibus assumenda molestiae
            libero quaerat eum animi cupiditate repellat.
          </p>
          <p className="text-xl py-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            soluta magnam veniam ea molestiae? Reprehenderit iure reiciendis
            nisi omnis laborum odit, consectetur beatae ullam totam accusantium
            similique eum atque sunt!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1 ps-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1 ps-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div>
        <div className="border text-center">
          <p className="pt-2 text-xl">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4 text-xl">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2 text-xl">
            BOOK NOW AND SAVE
          </p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label className="text-xl pb-2 pt-2 pl-1">Destination</label>
            <select className="border rounded-md p-2">
              <option>Grande Antigua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label className="text-xl pb-2 pl-1">Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label className="text-xl pb-2 pl-1">Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full my-4 text-xl">
            Rates & Availabilities
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;

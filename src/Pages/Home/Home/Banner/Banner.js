import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

const Banner = () => {
  return (
    <div
      className="hero h-[500px]"
      style={{
        backgroundImage:
          'url(https://img.freepik.com/premium-photo/woman-flower-shop-looks-flowers_670382-10044.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center  text-neutral-content ">
        <div>
          <h1 className="mb-5 text-3xl font-bold text-white">
            Find Business Opportunities for Sale
          </h1>
          <div className="bg-white bg-opacity-10 py-3 px-5 rounded-full">
            <div className="md:grid  md:grid-cols-4 p-7 gap-2 hidden ">
              <div className="dropdown dropdown-bottom">
                <label
                  tabIndex={0}
                  className="hover:cursor-pointer flex items-center justify-between gap-3 bg-white py-[10px] px-4 rounded-md text-slate-500 font-bold"
                >
                  Opportunity Type
                  <BsChevronDown />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content w-[186px] z-[1] menu text-sm shadow bg-base-100  text-black rounded-none"
                >
                  <li>
                    <p className=" px-3 py-1 m-0 hover:bg-accent hover:text-white rounded-none">
                      Opportunity Type
                    </p>
                  </li>
                  <li>
                    <p className=" px-3 py-1 m-0 hover:bg-accent hover:text-white rounded-none">
                      Business For Sales
                    </p>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-bottom">
                <label
                  tabIndex={0}
                  className="hover:cursor-pointer flex items-center justify-between bg-white py-[10px] px-4 rounded-md text-slate-500 font-bold"
                >
                  Industry
                  <BsChevronDown />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content w-[186px] z-[1] menu text-sm shadow bg-base-100  text-black rounded-none"
                >
                  <li>
                    <p className=" px-3 py-1 m-0 hover:bg-accent hover:text-white rounded-none">
                      Industry
                    </p>
                  </li>
                  <li>
                    <p className=" px-3 py-1 m-0 hover:bg-accent hover:text-white rounded-none">
                      Business For Sales
                    </p>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-bottom">
                <label
                  tabIndex={0}
                  className="hover:cursor-pointer flex items-center justify-between  bg-white py-[10px] px-4 rounded-md text-slate-500 font-bold"
                >
                  Location
                  <BsChevronDown />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content w-[186px] z-[1] menu text-sm shadow bg-base-100  text-black rounded-none"
                >
                  <li>
                    <p className=" px-3 py-1 m-0 hover:bg-accent hover:text-white rounded-none">
                      Location
                    </p>
                  </li>
                  <li>
                    <p className=" px-3 py-1 m-0 hover:bg-accent hover:text-white rounded-none">
                      Business For Sales
                    </p>
                  </li>
                </ul>
              </div>
              <div className="bg-[#774E88] w-40 flex items-center justify-center">
                <button className=" uppercase text-white font-semibold">
                  Search
                </button>
              </div>
            </div>

            <p className="text-end mr-20 cursor-pointer text-white hover:text-accent">
              Advance Search
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

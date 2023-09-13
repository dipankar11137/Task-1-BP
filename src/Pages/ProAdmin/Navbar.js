import React from 'react';
import { BsFillGrid3X3GapFill, BsMessenger } from 'react-icons/bs';
import { FaBars, FaSearch } from 'react-icons/fa';
import { IoNotificationsSharp } from 'react-icons/io5';
import Messenger from './NavHelper/Messenger';
import NineDots from './NavHelper/NineDots';
import Notification from './NavHelper/Notification';
import './NavHelper/ThreeCorners.css';

const Navbar = ({ setDrawer, drawer }) => {
  return (
    <div className="navbar fixed z-50 bg-base-100 border-b-2 py-0 my-0">
      <div className="flex-1  ">
        <div className="-ml-3  w-[58px]">
          {drawer ? (
            <button
              onClick={() => setDrawer(false)}
              className=" md:ml-3 text-lg p-2 rounded-full shadow-xl "
            >
              <FaBars />
            </button>
          ) : (
            <button
              onClick={() => setDrawer(true)}
              className=" md:ml-3 text-lg p-2 rounded-full shadow-xl "
            >
              <FaBars />
            </button>
          )}
        </div>
        <div className="border-r-2 h-[61px]"></div>
        {drawer && (
          <div className="duration-400">
            <h1 className="ml-2 text-3xl font-extrabold  duration-300">
              Business<span className="font-semibold">Post</span>
            </h1>
          </div>
        )}
        {drawer && (
          <div className="border-r-2 h-[61px] ml-2 duration-300"></div>
        )}
      </div>
      <div className="flex-none  py-0 mr-8">
        {/* search bar */}
        <div
          className={`${
            drawer ? 'w-80' : 'w-96'
          } flex items-center bg-white p-2 rounded-full mr-5 w-96 py-3 shadow`}
        >
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 bg-transparent outline-none placeholder-gray-500"
          />
        </div>
        {/* name image */}
        <div className="flex items-center mr-5 shadow-lg py-2 px-2 rounded-full cursor-pointer">
          <img
            className="w-8 h-8 rounded-full"
            src="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg"
            alt=""
          />
          <h1 className="ml-2 font-semibold">Jhon Doe</h1>
        </div>
        {/* 9 dots */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator bg-white p-3 rounded-full shadow-lg">
              <BsFillGrid3X3GapFill className="text-lg" />
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-96 bg-base-100 shadow-lg"
          >
            <NineDots />
            <div className="fixed top-0 right-3 -mt-4">
              <div className="triangle ">
                <div className="triangle-inner"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Messenger */}
        <div className="dropdown dropdown-end ml-5">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator  p-3 rounded-full shadow-lg">
              <BsMessenger className="text-lg" />
              <span className="badge badge-primary badge-sm indicator-item rounded-full">
                5
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content  bg-base-100 shadow-lg"
          >
            <Messenger />
            <div className="fixed top-0 right-3 -mt-4">
              <div className="triangle ">
                <div className="triangle-inner"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Notification */}
        <div className="dropdown dropdown-end ml-5">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator  p-3 rounded-full shadow-lg">
              <IoNotificationsSharp className="text-lg" />
              <span className="badge badge-primary badge-sm indicator-item rounded-full">
                8
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content  bg-base-100 shadow-lg"
          >
            <Notification />
            <div className="fixed top-0 right-3 -mt-4">
              <div className="triangle ">
                <div className="triangle-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

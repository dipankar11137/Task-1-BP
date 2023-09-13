import React from 'react';
import { FaBars } from 'react-icons/fa';

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
          <div>
            <h1 className="ml-2 text-3xl font-extrabold duration-300">
              Business<span className="font-semibold">Post</span>
            </h1>
          </div>
        )}
        {drawer && (
          <div className="border-r-2 h-[61px] ml-2 duration-300"></div>
        )}
      </div>
      <div className="flex-none  py-0">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <div>
          <h1>dadao</h1>
        </div>
        <div>
          <h1>dadao</h1>
        </div>
        <div>
          <h1>dadao</h1>
        </div>
        <div>
          <h1>dadao</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

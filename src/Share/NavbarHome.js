import React, { useState } from 'react';
import { AiFillHeart, AiFillSound, AiOutlineUser } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import '../Css/Navbar.css';
import logo1 from '../Images/Logo/logoname.png';
import logo from '../Images/Logo/logonamewhite.png';

const NavbarHome = () => {
  const [navbarScroll, setNavbar] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBg);
  const menuItems = (
    <>
      <li>
        <div className="dropdown dropdown-bottom">
          <label
            tabIndex={0}
            className="hover:cursor-pointer flex items-center "
          >
            Buy a Business
            <IoMdArrowDropdown />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content w-[186px] z-[1] menu text-sm   shadow bg-base-100 rounded-md text-black"
          >
            <li>
              <p>Search For a Business</p>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div className="dropdown dropdown-bottom">
          <label
            tabIndex={0}
            className="hover:cursor-pointer flex items-center "
          >
            Buy a Franchise
            <IoMdArrowDropdown />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content w-[192px] z-[1] menu text-sm   shadow bg-base-100 rounded-md text-black"
          >
            <li>
              <a>Search For a Franchise</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div className="dropdown dropdown-bottom">
          <label
            tabIndex={0}
            className="hover:cursor-pointer flex items-center "
          >
            Sell a Business
            <IoMdArrowDropdown />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content w-[192px] z-[1] menu text-sm  shadow bg-base-100 rounded-md text-black"
          >
            <li>
              <a>Sell For Free</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div className="dropdown dropdown-bottom">
          <label
            tabIndex={0}
            className="hover:cursor-pointer flex items-center"
          >
            Business Brokers
            <IoMdArrowDropdown />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content w-[210px] z-[1] menu text-sm  shadow bg-base-100 rounded-md text-black"
          >
            <li className="-mt-1">
              <a>Brokers Directory</a>
            </li>
            <li className="-mt-3">
              <a>Business Sales Promo</a>
            </li>
            <li className="-mt-3">
              <a>Brokers Directory Promo</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div className="dropdown dropdown-bottom">
          <label
            tabIndex={0}
            className="hover:cursor-pointer flex items-center "
          >
            Franchisors
            <IoMdArrowDropdown />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content w-[220px] z-[1] menu text-sm shadow bg-base-100 rounded-md text-black"
          >
            <li className="-mt-1">
              <a>Franchisors Directory</a>
            </li>
            <li className="-mt-3">
              <a>Franchisors Sales Promo</a>
            </li>
            <li className="-mt-3">
              <a>Franchisors Directory Promo</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div className="dropdown dropdown-bottom">
          <label
            tabIndex={0}
            className="hover:cursor-pointer flex items-center "
          >
            Business Wanted
            <IoMdArrowDropdown />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content w-[215px] z-[1] menu  shadow bg-base-100 rounded-md  text-black"
          >
            <li>
              <p>Find a Business For Free</p>
            </li>
            <li className="-mt-5">
              <p>Buyer's Market</p>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
  return (
    <div>
      <div
        className={`${
          navbarScroll
            ? 'bg-white navbar fixed z-10 text-black py-0 pr-0 duration-300'
            : 'bg-none navbar fixed z-10 text-white'
        }  `}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <div className="normal-case text-xl">
            {navbarScroll ? (
              <img className="h-5 md:ml-10" src={logo1} alt="" />
            ) : (
              <img className="h-5 md:ml-10" src={logo} alt="" />
            )}
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div
          className={`${
            navbarScroll
              ? 'navbar-end  py-4 pr-0  bg-[#774E88] -skew-x-12'
              : 'navbar-end  py-4 pr-0'
          }  `}
        >
          <div className={`${navbarScroll ? 'skew-x-12 ' : ''}`}>
            <div className="dropdown dropdown-bottom lg:mr-10 ">
              <label
                tabIndex={0}
                className="hover:cursor-pointer flex items-center  border-[1px] border-white px-2 py-1 gap-3 text-white"
              >
                <AiOutlineUser />
                My Business
                <IoMdArrowDropdown />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content w-[180px] z-[1] menu  shadow bg-base-100 rounded-md  mt-3 text-black"
              >
                <li className="text-black flex ">
                  <p>
                    <AiFillSound />
                    Post a free Ad
                  </p>
                </li>
                <li className="-mt-2">
                  <p>
                    <AiFillSound />
                    Manage ads
                  </p>
                </li>
                <li className="-mt-2">
                  <p>
                    <AiFillHeart />
                    My Watchlist
                  </p>
                </li>
                <li className="-mt-2">
                  <p>
                    <AiOutlineUser />
                    Profile Setting
                  </p>
                </li>
                <li className="-mt-2">
                  <p>
                    <AiOutlineUser />
                    Login/Register
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarHome;

import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaBusinessTime, FaEye, FaSearchPlus, FaUser } from 'react-icons/fa';
import { HiSpeakerphone } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { TiThLargeOutline } from 'react-icons/ti';
import { Link, Outlet } from 'react-router-dom';
import './Tooltip.css';

const Dashboard = ({ drawer, setDrawer }) => {
  const [selectedButton, setSelectedButton] = useState('');

  return (
    <div className="bg-slate-100 flex ">
      {/* left side */}
      <div className="fixed z-40 md:pt-20  p-2 border-r-[1px] w-[55px] pl-2 h-screen bg-white">
        <div
          onClick={() => setSelectedButton('Overview')}
          data-tip="Overview"
          className={
            selectedButton === 'Overview'
              ? 'rounded-full shadow-lg  p-2 mt-5 cursor-pointer bg-blue-600 text-white tooltip tooltip-open tooltip-right tooltip-neutral tooltip-container '
              : 'rounded-full shadow-lg  p-2 mt-5 cursor-pointer tooltip tooltip-right '
          }
        >
          <AiFillHome className="text-lg " />
        </div>
        <div
          onClick={() => setSelectedButton('Profile Setting')}
          data-tip="Profile Setting"
          className={
            selectedButton === 'Profile Setting'
              ? 'rounded-full shadow-lg  p-2 mt-2 cursor-pointer bg-blue-600 text-white tooltip tooltip-open tooltip-right tooltip-neutral '
              : 'rounded-full shadow-lg  p-2 mt-2 cursor-pointer tooltip tooltip-right '
          }
        >
          <FaUser className="text-lg " />
        </div>
        <div
          onClick={() => setSelectedButton('My Promos')}
          data-tip="My Promos"
          className={
            selectedButton === 'My Promos'
              ? 'rounded-full shadow-lg  p-2 mt-2 cursor-pointer bg-blue-600 text-white tooltip tooltip-open tooltip-right tooltip-neutral '
              : 'rounded-full shadow-lg  p-2 mt-2 cursor-pointer tooltip tooltip-right '
          }
        >
          <HiSpeakerphone className="text-lg " />
        </div>
        <div
          onClick={() => setSelectedButton('My Save Search')}
          data-tip="My Save Search"
          className={
            selectedButton === 'My Save Search'
              ? 'rounded-full shadow-lg  p-2 mt-2 cursor-pointer bg-blue-600 text-white tooltip tooltip-open tooltip-right tooltip-neutral '
              : 'rounded-full shadow-lg  p-2 mt-2 cursor-pointer tooltip tooltip-right '
          }
        >
          <FaSearchPlus className="text-lg " />
        </div>
        <div
          onClick={() => setSelectedButton('My Watch list')}
          data-tip="My Watch list"
          className={
            selectedButton === 'My Watch list'
              ? 'rounded-full shadow-lg  p-2 mt-2 cursor-pointer bg-blue-600 text-white tooltip tooltip-open tooltip-right tooltip-neutral '
              : 'rounded-full shadow-lg  p-2 mt-2 cursor-pointer tooltip tooltip-right '
          }
        >
          <FaEye className="text-lg " />
        </div>
        <div
          onClick={() => setSelectedButton('My Order History')}
          data-tip="My Order History"
          className={
            selectedButton === 'My Order History'
              ? 'rounded-full shadow-lg  p-2 mt-2 cursor-pointer bg-blue-600 text-white tooltip tooltip-open tooltip-right tooltip-neutral '
              : 'rounded-full shadow-lg  p-2 mt-2 cursor-pointer tooltip tooltip-right '
          }
        >
          <FaBusinessTime className="text-lg " />
        </div>
        <div
          onClick={() => setSelectedButton('Email Center')}
          data-tip="Email Center"
          className={
            selectedButton === 'Email Center'
              ? 'rounded-full shadow-lg  p-2 mt-2 cursor-pointer bg-blue-600 text-white tooltip tooltip-open tooltip-right tooltip-neutral '
              : 'rounded-full shadow-lg  p-2 mt-2 cursor-pointer tooltip tooltip-right '
          }
        >
          <MdEmail className="text-lg " />
        </div>
      </div>
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle "
          />
          <div
            className={`${
              drawer ? 'lg:w-[1100px]' : 'lg:w-[1305px]'
            } drawer-content drawer-w-full   `}
          >
            <Outlet></Outlet>
          </div>
          <div className="drawer-side navigation ">
            <label for="dashboard-sidebar" className="drawer-overlay "></label>
            <section className="flex ">
              <div
                className={` ${
                  drawer ? 'w-[258px] border-r-[1px]' : 'w-[0px] '
                } bg-white h-screen  text-white pt-16 pl-[57px] relative  duration-300`}
              >
                <div className="mt-4  flex flex-col gap-4 relative">
                  <>
                    {/* Manage contact */}
                    {selectedButton === 'Overview' && (
                      <div className=" text-black ">
                        <hr className="mb-1" />

                        <Link to="/proAdmin">
                          <p
                            href=""
                            className="hover:text-accent cursor-pointer pl-2 flex items-center"
                          >
                            <AiFillHome className="mr-1" /> Overview
                          </p>
                        </Link>
                        <hr className="my-1" />
                        <p
                          href=""
                          className="hover:text-accent cursor-pointer pl-2 flex items-center"
                        >
                          Business Sales Promo
                        </p>
                        <hr className="my-1" />
                        <p
                          href=""
                          className="hover:text-accent cursor-pointer pl-2 flex items-center"
                        >
                          Business Directory
                        </p>
                        <hr className="my-1" />
                      </div>
                    )}
                    {selectedButton === 'Profile Setting' && (
                      <div className=" text-black ">
                        <p
                          href=""
                          className="hover:text-accent cursor-pointer pl-2 flex items-center"
                        >
                          <AiFillHome className="mr-1" /> My profile
                        </p>
                        <hr className="my-1" />
                        <Link to="/proAdmin/myProfile">
                          <p className="hover:text-accent cursor-pointer pl-2 flex items-center">
                            <TiThLargeOutline className="mr-1" /> My Profile
                          </p>
                        </Link>

                        <hr className="my-1" />
                      </div>
                    )}
                    {selectedButton === 'My Promos' && (
                      <div className=" text-black ">
                        <p
                          href=""
                          className="hover:text-accent cursor-pointer pl-2 text-xl font-semibold flex items-center"
                        >
                          My Promos
                        </p>
                        <hr className="my-2" />
                        <Link to="/proAdmin/businessSales">
                          <p className="hover:text-accent cursor-pointer pl-2 flex items-center text-md">
                            <TiThLargeOutline className="mr-2" /> Business /
                            Franchise Sales
                          </p>
                        </Link>

                        <hr className="my-2" />
                        <Link to="/proAdmin/professionalDirectory">
                          <p className="hover:text-accent cursor-pointer pl-2 flex items-center text-sm">
                            <TiThLargeOutline className="mr-2" /> Business
                            Directory
                          </p>
                        </Link>
                        <hr className="my-2" />
                        <Link to="/proAdmin/newBusinessSales">
                          <p className="hover:text-accent cursor-pointer pl-2 flex items-center text-sm">
                            <TiThLargeOutline className="mr-2" />
                            New Business Sales
                          </p>
                        </Link>
                        <hr className="my-2" />
                        <Link to="/proAdmin/newBusinessPromo">
                          <p className="hover:text-accent cursor-pointer pl-2 flex items-center text-sm">
                            <TiThLargeOutline className="mr-2" />
                            New Business Promo
                          </p>
                        </Link>
                        <hr className="my-2" />
                      </div>
                    )}
                  </>
                  {/* )} */}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

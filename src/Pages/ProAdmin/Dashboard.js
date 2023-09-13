import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaBusinessTime, FaEye, FaSearchPlus, FaUser } from 'react-icons/fa';
import { HiSpeakerphone } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { Outlet } from 'react-router-dom';
import './Tooltip.css';

const Dashboard = ({ drawer, setDrawer }) => {
  const [open, setOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState('');

  return (
    <div className="bg-white flex ">
      {/* left side */}
      <div className="fixed z-40 md:pt-20  p-2 border-r-2 w-[56px] pl-2 h-screen bg-white">
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
        <div className="drawer md:drawer-mobile">
          <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle "
          />
          <div className="drawer-content">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side navigation ">
            <label for="dashboard-sidebar" className="drawer-overlay "></label>
            <section className="flex ">
              <div
                className={` ${
                  drawer ? 'w-[260px] border-r-2' : 'w-[0px] '
                } bg-white h-screen  text-white pt-40 pl-[57px] relative  duration-300`}
              >
                <div className="mt-4  flex flex-col gap-4 relative">
                  <>
                    {/* Manage contact */}
                    {drawer && (
                      <div className=" text-black">
                        <h1>dado</h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Placeat veniam fugit consectetur tempora dolore
                          eum ducimus enim rem, id voluptatibus voluptates
                          quaerat accusantium nihil facilis porro assumenda eius
                          error soluta.
                        </p>
                      </div>
                    )}
                    {/* <div
                      onClick={() => setSelectedButton('Button 7')}
                      className={
                        selectedButton === 'Button 7'
                          ? 'bg-primary text-black rounded-lg '
                          : ''
                      }
                    >
                      {' '}
                      <Link
                        to="/dashboard/contact"
                        className={`  group flex items-center text-xl   gap-3.5 font-medium p-2 hover:bg-primary rounded-md`}
                      >
                        <h2
                          style={{
                            transitionDelay: `${0 + 3}00ms`,
                          }}
                          className={`whitespace-pre duration-500 ${
                            !drawer &&
                            'opacity-0 translate-x-28 overflow-hidden '
                          }`}
                        >
                          Manage Contact
                        </h2>
                      </Link>
                    </div> */}
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

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = ({ drawer, setDrawer }) => {
  const [open, setOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState('');
  return (
    <div className="bg-white flex">
      <div className="relative z-10 ">
        <h1>Hello</h1>
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
                  drawer ? 'w-40 ' : 'w-[0px] '
                } bg-green-400 h-screen  text-white pt-8 relative duration-300`}
              >
                <div className="mt-4  flex flex-col gap-4 relative">
                  <>
                    {/* Manage contact */}
                    {drawer && (
                      <div className=" bg-red-600">
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

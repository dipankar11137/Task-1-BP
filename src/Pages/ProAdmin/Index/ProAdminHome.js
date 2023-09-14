import React from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';
import List from '../../../Components/List';
import useDrawer from '../../../hooks/useDrawer';

const ProAdminHome = () => {
  const [drawer, setDrawer] = useDrawer();
  console.log(drawer);

  return (
    <div className="">
      {/* OverView */}
      <div className="text-black pt-20  h-100% px-7  ml-10 md:ml-0">
        <div className="flex items-center my-5">
          <div className="h-16 w-1 bg-primary"></div>
          <h1 className="ml-8 text-3xl font-bold">Overview </h1>
        </div>
        <div className="grid md:grid-cols-3 md:gap-10 mt-10 p-3">
          <div
            className={`${
              drawer ? '' : ''
            }  h-40 bg-secondary rounded-t-lg shadow-md `}
          >
            <div className="p-4 mt-4 text-white font-semibold">
              <h1>Ad View : #</h1>
              <h1>Day : #</h1>
              <h1>Month : #</h1>
              <h1>Year : #</h1>
            </div>
            <div className="flex items-center bg-white mt-[7px] p-1">
              <BiUpArrowAlt />
              <p className="uppercase ml-1">business sales promo</p>
            </div>
          </div>
          <div className=" h-40 bg-secondary rounded-t-lg shadow-md">
            <div className="p-4 mt-4 text-white font-semibold">
              <h1>Ad View : #</h1>
              <h1>Day : #</h1>
              <h1>Month : #</h1>
              <h1>Year : #</h1>
            </div>
            <div className="flex items-center bg-white mt-[7px] p-1">
              <BiUpArrowAlt />
              <p className="uppercase ml-1">business sales promo</p>
            </div>
          </div>
          <div className=" h-40 bg-secondary rounded-t-lg shadow-md">
            <div className="p-4 mt-4 text-white font-semibold">
              <h1>Ad View : #</h1>
              <h1>Day : #</h1>
              <h1>Month : #</h1>
              <h1>Year : #</h1>
            </div>
            <div className="flex items-center bg-white mt-[7px] p-1">
              <BiUpArrowAlt />
              <p className="uppercase ml-1">business sales promo</p>
            </div>
          </div>
        </div>
      </div>

      <List name={' Business Sales Promo'} />
      <List name={'Business Directory'} />

      <footer className="footer  p-4 bg-white text-base-content mt-40 pt-14 ">
        <div className="flex justify-between px-10 w-full items-center pb-4">
          <p>Business Media Group 2020.All rights reserved</p>
          <div className="flex gap-5">
            <p className="cursor-pointer hover:text-primary">
              Terms of Service
            </p>
            <p className="cursor-pointer hover:text-primary">Privacy Policy</p>
            <p className="cursor-pointer hover:text-primary">Contact us</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProAdminHome;

import React from 'react';
import { BiHomeAlt, BiUserCircle } from 'react-icons/bi';
import { BsCalendar2EventFill, BsFillCartPlusFill } from 'react-icons/bs';
import { GoFileMedia } from 'react-icons/go';
import { HiDocument, HiUsers } from 'react-icons/hi';
import { MdOutlineMenuBook, MdPayment } from 'react-icons/md';

const NineDots = () => {
  return (
    <div className="py-7 px-8">
      <div className="flex gap-x-2 gap-y-5">
        <div className="cursor-pointer hover:bg-slate-300 rounded-xl px-7 py-4">
          <h1 className="p-3 rounded-full bg-accent w-12">
            <BsFillCartPlusFill className="text-2xl text-white" />
          </h1>
          <p className="pt-1 text-center">Orders</p>
        </div>
        <div className="cursor-pointer hover:bg-slate-300 rounded-xl px-7 py-4">
          <h1 className="p-3 rounded-full bg-red-800 w-12">
            <HiUsers className="text-2xl text-white" />
          </h1>
          <p className="pt-1 text-center">Users</p>
        </div>
        <div className="cursor-pointer hover:bg-slate-300 rounded-xl px-4 py-4">
          <h1 className="p-3 rounded-full bg-green-800 w-12">
            <BiHomeAlt className="text-2xl text-white" />
          </h1>
          <p className="pt-1 text-center">Products</p>
        </div>
      </div>
      <div className="flex gap-x-2 gap-y-5 mt-5">
        <div className="cursor-pointer hover:bg-slate-300 rounded-xl px-7 py-4">
          <h1 className="p-3 rounded-full bg-slate-200 w-12">
            <GoFileMedia className="text-2xl text-white" />
          </h1>
          <p className="pt-1 text-center">Orders</p>
        </div>
        <div className="cursor-pointer hover:bg-slate-300 rounded-xl px-7 py-4">
          <h1 className="p-3 rounded-full bg-slate-200 w-12">
            <BiUserCircle className="text-2xl text-white" />
          </h1>
          <p className="pt-1 text-center">Account</p>
        </div>
        <div className="cursor-pointer hover:bg-slate-300 rounded-xl px-4 py-4">
          <h1 className="p-3 rounded-full bg-accent w-12">
            <HiDocument className="text-2xl text-white" />
          </h1>
          <p className="pt-1 text-center">Docs</p>
        </div>
      </div>
      <div className="flex gap-x-2 gap-y-5 mt-5">
        <div className="cursor-pointer hover:bg-slate-300 rounded-xl px-7 py-4">
          <h1 className="p-3 rounded-full bg-slate-200 w-12">
            <MdPayment className="text-2xl text-white" />
          </h1>
          <p className="pt-1 text-center">Payment</p>
        </div>
        <div className="cursor-pointer hover:bg-slate-300 rounded-xl px-7 py-4">
          <h1 className="p-3 rounded-full bg-slate-200 w-12">
            <BsCalendar2EventFill className="text-2xl text-white" />
          </h1>
          <p className="pt-1 text-center">Event</p>
        </div>
        <div className="cursor-pointer hover:bg-slate-300 rounded-xl px-4 py-4">
          <h1 className="p-3 rounded-full bg-orange-600 w-12">
            <MdOutlineMenuBook className="text-2xl text-white" />
          </h1>
          <p className="pt-1 text-center">Book</p>
        </div>
      </div>
    </div>
  );
};

export default NineDots;
